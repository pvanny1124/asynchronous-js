//Creating a promise
var p1 = new Promise(function(resolve, reject) {
   resolve([1,2,3,4]);
 });

 p1.then(function(arr) {
   console.log("Promise p1 resolved with data:", arr);
 });
 
//Handling errors w/ promise
var p1 = new Promise(function(resolve, reject) {
   reject("ERROR");
 });

 p1.then(function(data) {
   console.log("Promise p1 resolved with data:", data);
 }).catch(function(data) {
   console.log("Promise p1 was rejected with data:", data);
 });
 
//More Error checking
var p1 = new Promise(function(resolve, reject) {
   var num = Math.random();
   if (num < 0.5) {
     resolve(num);
   } else {
     reject(num);
   }
 });

 p1.then(function(result) {
   console.log("Success:", result);
 }).catch(function(error) {
   console.log("Error:", error);
 });
 
 
 //Wrapping setTimeout with Promise
 //Here, the setTimeout is invoked as soon as promise is created
 //4 seconds later, once there is nothing left in the stack,
 //setTimeout runs its code and calls resolve()
 //Using .then, we have a way of handling the resolve once it is invoked!!

 var promise = new Promise(function(resolve, reject) {
   setTimeout(function() {
     var randomInt = Math.floor(Math.random() * 10);
     resolve(randomInt);
   }, 4000);
 });

 promise.then(function(data) {
   console.log("Random int passed to resolve:",
               data);
 });
 
 //Promise chaining
 var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    var randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
  }, 500);
});

promise.then(function(data) {
  console.log("Random int passed to resolve:",
               data);
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(Math.floor(Math.random() * 10));
    }, 3000);
  });
}).then(function(data) {
  console.log("Second random int passed to resolve:", data);
});

//Passing data between Promise resolves!
var promise = new Promise(function(resolve, reject) {
   resolve(5);
 });

 promise.then(function(data) {
   return data * 2;
 }).then(function(data) {
   return data + 20;
 }).then(function(data) {
   console.log(data);
 });