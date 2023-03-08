let sec = 0;
let min = 00;
let interval;
const stopWatch = ()=>{
    sec++;
    if(sec<60){
        document.getElementById('sec').innerText = sec;
       // console.log(sec)
    }
    if(sec===60){
        sec=0;
        min++;
        document.getElementById('min').innerText = min;
    }
}

document.getElementById('start').addEventListener('click', function(){
    interval = setInterval(stopWatch,1000);
})
document.getElementById('stop').addEventListener('click', function(){
    clearInterval(interval);
})
document.getElementById('reset').addEventListener('click', function(){
    clearInterval(interval);
    sec =00;
    min = 00;
    document.getElementById('sec').innerText = sec;
    document.getElementById('min').innerText = min;
})