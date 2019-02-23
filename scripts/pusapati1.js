console.log('Script for Interaction Page')
console.log('Declare all the functions related to the Interaction Page here!! ')

function avg(s1,s2,s3)
{
    return (s1+s2+s3)/3
}

let gr1=0.0,gr2=0.0,gr3=0.0;
document.getElementById('grade').addEventListener('click',function()
{


const g1=document.getElementById('cs1').value

const g2=document.getElementById('cs2').value
const g3=document.getElementById('cs3').value


if(g1<0||g1>4)
{
   alert("enter a valid grade")
}
else
{
      gr1=parseFloat(g1)
}

if(g2<0||g2>4)
{
    alert("enter a valid grade")
}
else
{
      gr2=parseFloat(g2)
}

if(g3<0||g3>4)
{
   alert("Enter a valid grade")
}
else
{
      gr3=parseFloat(g3)
}

const ans3= 'The Cummulative Grade for this semester is: '+avg(gr1,gr2,gr3)
document.getElementById('score').innerHTML=ans3
      localStorage.setItem('final GPA', ans3)  // define a string key to store + its value
      localStorage.setItem('grade for course 1', gr1)
      localStorage.setItem('grade for course 2', gr2)
      localStorage.setItem('grade for course 3', gr3)


})








