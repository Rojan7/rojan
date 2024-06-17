let start = document.getElementById('start')
let stop = document.getElementById('stop')
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  let intervalid;
let startchangingcolor = function() {
    if(!intervalid)
        {
            intervalid = setInterval(changeBgColor,1000);
        }
    
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }




};
let stopchangingcolor = function(){
    clearInterval(intervalid)
    intervalid = null


}

start.addEventListener('click',startchangingcolor)
stop.addEventListener('click',stopchangingcolor)