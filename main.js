// let counter = 0;

// function counterIncrement() {
//   counter++;
//   return counterIncrement();
// }

// try {
//   counterIncrement();
// } catch (error) {
//   console.log(counter);
//   console.log(error);
// }

// function flattenArray(arr) {
//   var flat = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flat = flat.concat(flattenArray(arr[i]));
//     } else {
//       flat.push(arr[i]);
//     }
//   }
//   return flat;
// }

// const trampoline = (f, ...args) => {
//   let result = f(...args);
//   while (typeof result === "function") {
//     result = result();
//   }
//   result;
// };

const testArray = [1, 2, [3, 4, 5, [6, 7]]];

function flattenArray(arr) {
  function trampoline(fn) {
    while (typeof fn === "function") {
      fn = fn();
    }
    return fn;
  }

  function flat(arr, acc) {
    if (arr.length === 0) return acc;
    let [first, ...rest] = arr;
    if (Array.isArray(first)) {
      return () => flat(first.concat(rest), acc);
    } else {
      return () => flat(rest, acc.concat(first));
    }
  }

  return trampoline(() => flat(arr, []));
}

console.log(flattenArray(testArray));

const p = document.createElement("p");

function addPrime(limit) {
  let prime = false;
  let n = limit;
  let i = n;

  while (prime == false) {
    if (i === 2 || i === 3) {
      prime = true;
      console.log(`${i} is a prime number.`);
    } else if ((i + 1) % 6 !== 0 && (i - 1) % 6 !== 0) {
      i += 1;
    } else {
      let isPrime = true;
      for (let k = 2; k <= Math.sqrt(i); k++) {
        if (i % k === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime == true) {
        prime = true;
        if (i === n) {
          console.log(`${i} is a prime number.`);
        } else {
          console.log(`The prime number following ${n} is ${i}.`);
        }
      } else {
        i += 1;
      }
    }
  }
}
