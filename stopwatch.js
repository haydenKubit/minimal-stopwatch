let countSeconds = 0;
let countMins = 0;
let countHours = 0;
let countMilis = 0;
let count = `${countHours} : ${countMins} : ${countSeconds} : ${countMilis}`;
let id;
document.querySelector('.time').innerHTML = count;

function start(){
  id = setInterval(function(){
    countMilis++;
    if(countMilis>=10){
      countSeconds++;
      countMilis = 0;
    }
    if(countSeconds>=60){
      countMins++;
      countSeconds=0;
    }
    if(countMins>=60){
      countHours++;
      countMins=0;
    }
    count = `${countHours} : ${countMins} : ${countSeconds} : ${countMilis}`;
    document.querySelector('.time').innerHTML = count;
  },100)
}

function stop(){
  clearInterval(id);
}

function reset(){
  clearInterval(id);
  countSeconds = 0;
  countMins = 0;
  countHours = 0;
  countMilis = 0;
  count = `${countHours} : ${countMins} : ${countSeconds} : ${countMilis}`;
  document.querySelector('.time').innerHTML = count;
}

function change(){
  if(document.querySelector('.light').classList.contains('dark'))
  {
    document.querySelector('.light').classList.remove('dark');
  }
  else{
    document.querySelector('.light').classList.add('dark');
  }
}