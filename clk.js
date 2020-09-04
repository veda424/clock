console.log('hi');

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation  = 6*stime;
    hour = document.getElementById('hour');
    minute = document.getElementById('minute');
    second = document.getElementById('second');


    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    
}, 1000);
 tdate =document.getElementById('container');
 date = new Date();
 dd = date.getDate();
 mm = date.getMonth();
 yy = date.getFullYear();
 tdate.innerHTML = `<h1 style="color:red;">Today's date is: </h1> <h2><b>${dd}/${mm}/${yy}</h2></b>`;

