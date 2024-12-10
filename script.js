function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

 for (let i = 0; i < num.length-1; i++) {
	 let result=0;
 	if(obj[num(i)]>obj[num(i+1)]){
		result+=obj[num(i)];
	}else{
		result=result-obj[num(i)];
	}
 }
result+=obj[num(num.length-1);];
	return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
