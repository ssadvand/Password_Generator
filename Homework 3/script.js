// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("abc")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  console.log("xyz")
  var t = "1234567890"
  var u = "!@#_$%^&*"
  var v = "ASDFGHJKLQWERTYUIOPZXCVBNM"
  var r = (t + u + v)
  
  var x = ""
  for (
    var i = 0;
    i < 10;
    i++
  ) {
    x = x + r[Math.floor(Math.random() * r.length)]
  }
 
  return (x)
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// (SAMPLE I MADE WITH TUTOR)
// console.log("HJello World", "WHere is the world", "123")
// console.log("2" + 2)
// var x = ("sp")
// x = x + 22
// console.log(x)
// var y = x + "ABC"
// console.log(y)
// var bool = x == "sp22"
// if (bool) {
//   console.log(y)
// }
// else {
//   console.log("UH-OH")
// }
// var nums = [x, 2, y]
// console.log(nums[0])
// var z = nums[2];
// console.log(z)
// for (
//   var i = 0;
//   i < 5;
//   i++) {
//   console.log(nums[i])
// }
