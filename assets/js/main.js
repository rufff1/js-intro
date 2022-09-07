var hour = new Date().getHours();

console.log(hour);

if (hour>=6 && hour<=12) {
    alert('Good Morning');
    document.body.style.backgroundColor='white';
}
else if(hour>12 && hour<=18){
  alert('Good Afternoon');
  document.body.style.backgroundColor='yellow';
}
else if(hour>18 || hour<6){
    alert('Good Night');
    document.body.style.backgroundColor='black';
}