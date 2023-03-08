const getData = new Promise((resolve, rejecct) =>{
    const num = Math.random()*100;
    console.log(num);
    if(num<10){

        resolve(0);
    }
    else{

        rejecct("I am not fine");
    }
});

getData.then(data => console.log(data)).catch(err => console.error('ERR: ', err))