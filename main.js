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

// const testArray = [1, 2, [3, 4, 5, [6, 7]]];

// function flattenArray(arr) {
//   function trampoline(fn) {
//     while (typeof fn === "function") {
//       fn = fn();
//     }
//     return fn;
//   }

//   function flat(arr, acc) {
//     if (arr.length === 0) return acc;
//     let [first, ...rest] = arr;
//     if (Array.isArray(first)) {
//       return () => flat(first.concat(rest), acc);
//     } else {
//       return () => flat(rest, acc.concat(first));
//     }
//   }

//   return trampoline(() => flat(arr, []));
// }

// console.log(flattenArray(testArray));

const list = document.querySelector("ol");

function addPrime(n) {
  arr = [];
  if (n >= 2) {
    arr.push(2);
  }
  if (n >= 3) {
    arr.push(3);
  }
  for (let i = 4; i < n; i++) {
    let isPrime = true;
    for (let k = 2; k <= Math.sqrt(i); k++) {
      if (i % k === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      li = document.createElement("li");
      li.textContent = i;
      list.appendChild(li);
    }
  }
  console.log(arr);
  return arr;
}

setTimeout(addPrime(10000)), 0;
