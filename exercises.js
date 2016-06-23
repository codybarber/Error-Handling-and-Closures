// Try/Catch

function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return x + y;
}

try {
  var sum = add(2, 3);
  console.log("try/catch exercise sum: " + sum);
  // var name = add("cody", "barber");
  // console.log(name + " " + sum);
} catch (e) {
  console.log('Caught error: ', e.message);
}

// Async

function asyncAdd(x, y, callback) {
  setTimeout(function() {
    if (typeof x !== 'number' || typeof y !== 'number') {
      callback(new Error('Arguments must be numbers'));
    }
    callback(null, x + y);
  }, 1000);
}

try {
  asyncAdd(1, 2, function(err, answer) {
    if (err) {
      console.log('Caught error: ', err.message);
      return;
    }
    console.log('async exercise sum: ' + answer);
  });
} catch (e) {
  console.log('Caught error: ', e.message);
}
