function timeout(callback) {
  setTimeout(() => {
    console.log('first set timeout done');
    setTimeout(() => {
      console.log('second set timeout done');
      callback('done');
    }, 0);
  }, 0);
}

module.exports = timeout;
