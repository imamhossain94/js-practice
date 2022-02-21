
// Js asynchronous operation.


const promise = new Promise((resolve, reject) => {
    const res = false;
    if (res) {
      resolve('Resolved!');
    }
    else {
      reject(Error('Error'));
    }
  });
   
  promise.then((res) => {
    console.log(res);
  }, (err) => {
    console.log(err);
    //alert(err);
  });


  //The .catch() method for handling rejection
  const promiseTwo = new Promise((resolve, reject) => {  
    
    setTimeout(() => { // wait for 5 seconds
        resolve("Resolved after 5 seconds");
        //reject(Error('Promise Rejected Unconditionally.')); // reject promise with an error
    }, 5000);
  });
   
  promiseTwo.then((res) => {
    console.log(res);
  });
   
  promiseTwo.catch((err) => {
    console.log(err); // catching the rejected error value
  });


  // JavaScript Promise.all()

  const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(500);
    },500);
  });

  
  const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1000);
    },1000);
  });

  Promise.all([promise1, promise2]).then((res)=>{
      console.log(res[0]);
      console.log(res[1]);
  })



// Executor function of JavaScript Promise object

 const executorFunc = (resolve, reject) => {
    resolve("Executor function");
 };

 new Promise(executorFunc).then((res)=>{
    console.log(res);
 });


//Avoiding nested Promise and .then() // Run this code in google chrome console
/*
const promise = new Promise((resolve, reject) => {  
    setTimeout(() => {
      resolve('*');
    }, 1000);
  });
   
  const twoStars = (star) => {  
    return (star + star);
  };
   
  const oneDot = (star) => {  
    return (star + '.');
  };
   
  const print = (val) => {
    console.log(val);
  };
   
  // Chaining them all together
  promise.then(twoStars).then(oneDot).then(print);
*/


// Async Await Promises

function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);
    });
  }
   
  async function msg() {
    const msg = await helloWorld();
    console.log('Message:', msg);
  }
   
  msg();


  // Es6 method
  function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);
    });
  }
   
  async function msg() {
    const msg = await helloWorld();
    console.log('Message:', msg);
  }
   
  msg();


  // Error Handeling
  let json = '{ "age": 30: }'; // invalid json data
 
try {
  let user = JSON.parse(json); // <-- error
  console.log( user.name ); // no name!
} catch (e) {
    console.log( "Invalid JSON data!" );
}



  