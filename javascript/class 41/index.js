
/*
  1. browser control 
  2. form validation 
  3. try catch 
  4. finally 
  5. throw keyword 
*/


// console.log("one:", one);
try {
  console.log('above code');
  if (true) {
    throw "my error";
  }
  console.log('next code');
} catch (error) {
  console.log(error);
  console.error(error);
} finally {
  console.log('hello world');
}