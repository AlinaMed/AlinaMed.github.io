var h=document.getElementById("hour");
var m=document.getElementById("min");
var s=document.getElementById("sec");

setInterval(function(){
var d = new Date();
var hours = 23-d.getHours();
if(hours<10)
{
  hours="0"+hours;
}
var min = 59-d.getMinutes();
if(hours<10)
{
  min="0"+min;
}
var sec = 59-d.getSeconds();
if(sec<10)
{
  sec="0"+sec;
}
h.innerHTML=hours+":";
m.innerHTML=min+":";
s.innerHTML=sec;
}, 1000)
