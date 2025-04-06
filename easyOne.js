/*EASY_01

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});


Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.

*/

//SOLUTION

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis),100);
}

const millis = 100;

async function testSleep() {
  const start = Date.now();
  await sleep(millis);
  const end = Date.now();
  console.log(end - start); // Should be approximately 100
}

testSleep();
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */



  //Algorithm of the solution

// async function sleep(millis) {
//   return new Promise((res, rej) => {
//       setTimeout(()=>{
//           res(millis)
//       }, )
//   })
// }

/* 
   * let t = Date.now()
   * sleep(100).then(() => console.log(Date.now() - t)) // 100
*/

