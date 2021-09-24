const client = require('./mongo.client.js');
const pizzas = client.db('pizzaDB').collection('pizzas');

const data = [
  {
    name: 'Neapolitan',
    shape: 'round',
    price: 9.99,
  },
  {
    name: 'Cheese and Tomato',
    shape: 'round',
    price: 5.99,
  },
  {
    name: 'The Spicy One',
    shape: 'rectangle',
    price: 6.99,
  },
];

client.connect(async (err) => {
  if (err) throw err;

  // remove the collection first
  pizzas.drop();

  // CREATE
  const create = await pizzas.insertMany(data);

  // READ
  const readOne = await pizzas.findOne({ name: 'Cheese and Tomato' });

  // READ
  const readAll = await pizzas.find().toArray();

  // UPDATE
  const updateOne = await pizzas.updateOne(
    { name: 'Cheese and Tomato' },
    { $set: { name: 'Cheese and Pomodoro' } }
  );

  // DELETE
  const deleteOne = await pizzas.deleteOne({ name: 'The Spicy One' });

  console.log(`CREATED ${create.insertedCount} record(s)`);
  console.log('READ this object ', readOne);
  console.log('READ these objects: ', readAll);
  console.log(`UPDATED ${updateOne.modifiedCount} document`);
  console.log(`DELETED ${deleteOne.deletedCount} document`);
});
