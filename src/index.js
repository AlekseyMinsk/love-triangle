/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

var arr = [...preferences]

 if(arr.length < 3) return 0;
 var answer = 0;
 var alreadyInLove = [];
 arr.forEach((item, index) => {
  var n = alreadyInLove.includes(index);
  if(!n) {
   var secondLoveIndex = item - 1;
   if(secondLoveIndex != index) {
    var secondLoveItem = arr[secondLoveIndex];
    if(secondLoveItem) {
     var thirdLoveIndex = secondLoveItem - 1;
     if(thirdLoveIndex != secondLoveIndex && thirdLoveIndex != index) {
      var thirdLoveItem = arr[thirdLoveIndex];
      if(thirdLoveItem) {
       if((thirdLoveItem - 1) === index) {
        answer++;
                             alreadyInLove = [...alreadyInLove, index, secondLoveIndex, thirdLoveIndex];

       }
      }
     }

    }
   }
  } 
 });
 return answer;
};