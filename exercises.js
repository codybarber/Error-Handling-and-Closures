// Try/Catch

// function add(x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw new Error('Arguments must be numbers');
//   }
//   return x + y;
// }
//
// try {
//   var sum = add(2, 3);
//   console.log("try/catch exercise sum: " + sum);
//   // var name = add("cody", "barber");
//   // console.log(name + " " + sum);
// } catch (e) {
//   console.log('Caught error: ', e.message);
// }

// Async
//
// function asyncAdd(x, y, callback) {
//   setTimeout(function() {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//       callback(new Error('Arguments must be numbers'));
//     }
//     callback(null, x + y);
//   }, 1000);
// }
//
// try {
//   asyncAdd(1, 2, function(err, answer) {
//     if (err) {
//       console.log('Caught error: ', err.message);
//       return;
//     }
//     console.log('async exercise sum: ' + answer);
//   });
// } catch (e) {
//   console.log('Caught error: ', e.message);
// }

// Make a Counter with a closure

// function makeCounter() {
//   var counter = 0;
//   function countFunc() {
//     return counter++;
//   }
//   return countFunc;
// }
//
// var count = makeCounter();
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

//Make a Calculator with a closure

var calc = (function() {
  var counter = 0;
    return {
      getNumber: function() {
        return counter;
      },
      add: function(val) {
        counter = counter + val;
      },
      subtract: function(val) {
        counter = counter - val;
      },
      multiply: function(val) {
        counter = counter * val;
      }
    };
})();

console.log(calc.getNumber());
calc.add(4);
console.log(calc.getNumber());
calc.subtract(2);
console.log(calc.getNumber());
calc.multiply(3);
console.log(calc.getNumber());
