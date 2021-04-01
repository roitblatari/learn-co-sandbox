 https://learn.co/tracks/computer-science/why-algorithms/recursion/recursion-readme#
function sayDownFrom(n){
  console.log(n)
  if(n > 1){
    sayDownFrom(n -1) // recursive call
  } else {
    return true // base case
  }
}
 
sayDownFrom(5)