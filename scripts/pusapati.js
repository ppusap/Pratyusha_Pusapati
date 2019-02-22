
console.log('Script for contact and interaction Page');
console.log('Delare the java script functions here!!');
document.getElementById('contact').addEventListener('click',function()
{
const str= document.getElementById('first').value
console.log("str="+str)
const str1=document.getElementById('second').value
console.log("str1="+str1)
const year=document.getElementById('age').value
console.log("year="+year)
const ans="Welcome"+str+str1+"!!"

if((str==""))
{
     alert("Please enter your name")
}
else{
     const ans1="Thanks "+str+" have a nice day!!"
     document.getElementById('disp').innerHTML=ans1}


})

