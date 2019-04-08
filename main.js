function arrayToObj(array) {
   // your code goes here
   const obj = {}
   array.forEach(item => {
      obj[item[0]] = item[1];
   });
   return obj
};

module.exports = arrayToObj;
