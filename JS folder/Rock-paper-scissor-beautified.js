let score = JSON.parse(localStorage.getItem('gameScore'));

  if (score === null){
    score = {
    computer:0,
    human:0,
    draw:0
    }
  };

  document.addEventListener('keydown',(event)=>{
    if(event.key==='a'){
      autoplay();
    }
  });

  let timeIntervalId;
  let isAutoplay=false;
  let autoPb=document.querySelector('.autoP');
  
  function autoplay(){
    if(!isAutoplay){
    timeIntervalId = setInterval(()=>{
      randomNumber1=Math.random();
      {
        autoPb.innerText = 'stop Autoplay';
        if (randomNumber1>=0 && randomNumber1<1/3){
          humanPick='Rock';
        } else if(randomNumber1>=1/3 && randomNumber1<2/3){
          humanPick='Paper';
        } else if (randomNumber1>2/3 && randomNumber1<1){
          humanPick='Scissor';
      }
      play(humanPick);
    };
    isAutoplay=true;

    },1000)} else{
      clearInterval(timeIntervalId);
      isAutoplay=false;
      autoPb.innerText ='Autoplay';
    }
    
  }

  let computerPick='';
  let flag ='';
  let humanPick='';
  let randomNumber=0;
  let randomNumber1=0;

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r'){
    play('Rock');
  } else if(event.key==='p'){
    play('Paper');
  }else if(event.key==='s'){
    play('Scissor');
  }
});


  function play(humanPick){
    randomNumber=Math.random();
   if (randomNumber >= 0 && randomNumber <= 1/3) {
      computerPick = 'Rock';
      document.getElementById('display0').innerHTML = '<img src="images/rock.webp" class="rock">';
    } else if (randomNumber >= 1/3 && randomNumber <= 2/3) {
      computerPick = 'Paper';
      document.getElementById('display0').innerHTML = '<img src="images/paper.webp" class="paper">';
    } else if (randomNumber >= 2/3 && randomNumber <=1) {
      computerPick = 'Scissor';
      document.getElementById('display0').innerHTML = '<img src="images/scissor.webp" class="scissor">';
    }
    console.log('computer pick:'+computerPick);

    if (humanPick === 'Rock'){
    document.getElementById('display4').innerHTML = '<img src="images/rock.webp" class="rock">';
    } else if(humanPick === 'Paper'){
      document.getElementById('display4').innerHTML = '<img src="images/paper.webp" class="paper">';
    } else if(humanPick === 'Scissor'){
      document.getElementById('display4').innerHTML = '<img src="images/scissor.webp" class="scissor">';
    }
   
    if (computerPick === humanPick){
     score.draw++;
     flag = 'draw';
    UpdateDisplay();
    }
    else if ((computerPick === 'Rock' && humanPick === 'Scissor')|| (computerPick === 'Paper' && humanPick === 'Rock') || (computerPick === 'Scissor' && humanPick === 'Paper')) {
      score.computer++;
      flag = 'computerWin';
      UpdateDisplay();
      console.log(`computer wins, score - draw:${score.draw}, human:${score.human}, computer:${score.computer}`);
      
    } else {
      score.human++;
      flag = 'humanWin';
      UpdateDisplay();
      console.log(`human wins, score:score - draw: ${score.draw}, human:${score.human}, computer:${score.computer}`); 
    }
    localStorage.setItem('gameScore',JSON.stringify(score));
    return score;
  };

  function UpdateDisplay(){
    if (flag ==='draw'){
    document.getElementById('display3').innerText = `Score: draw: ${score.draw}, human:${score.human}, computer:${score.computer}`;
    document.getElementById('display1').innerText = 'Draw';
    } else if (flag ==='computerWin'){
      document.getElementById('display3').innerText = `Score: draw: ${score.draw}, human:${score.human}, computer:${score.computer}`;
      document.getElementById('display1').innerText = 'Computer Wins';
    } else if (flag ==='humanWin'){
      document.getElementById('display3').innerText = `Score: draw: ${score.draw}, human:${score.human}, computer:${score.computer}`;
      document.getElementById('display1').innerText = 'Human Wins';
    } else if (flag ===''){
      document.getElementById('display3').innerText = `Score: draw: ${score.draw}, human:${score.human}, computer:${score.computer}`;
      document.getElementById('display1').innerText = 'Reset';
      document.getElementById('display4').innerText = '';
      document.getElementById('display0').innerHTML = '';
    }
  };

  document.body.addEventListener('keydown',(event)=>{
    if (event.key==='Backspace'){
      reset();
    }
  })

  function reset(){
    if(isAutoplay){
      return;
    } else{
      document.getElementById('display1').innerHTML="<div><p>Confirm Reset?</p><button id='yes'>Yes</button><button id='no'>No</button></div>"
      document.getElementById('yes').addEventListener('click',()=>{
        reset90();
       })
       document.addEventListener('keydown',(event)=>{
        if(event.key==='y'|| event.key==='Y'){
        reset90();
       }})
       document.getElementById('no').addEventListener('click',()=>{
        document.getElementById('display1').innerHTML="";
       })
       document.addEventListener('keydown',(event)=>{
        if(event.key==='n'|| event.key==='N'){
         document.getElementById('display1').innerHTML="";
    }})
  }};

  function reset90(){
    flag = '';
    score={
    computer:0,
    human:0,
    draw:0
    }
    console.log(`score reset: draw: ${score.draw}, human: ${score.human}, computer: ${score.computer}`);
    localStorage.removeItem('gameScore');
    UpdateDisplay();
    return score;
  };

  document.getElementById('yes').addEventListener('click',()=>{
    reset90();
   })
   document.getElementById('yes').addEventListener('keydown',(event)=>{
    if(event.target.id==='y'|| event.key==='Y'){
    reset90();
   }})
   document.getElementById('no').addEventListener('click',()=>{
    document.getElementById('display1').innerHTML="";
   })
   document.getElementById('no').addEventListener('keydown',(event)=>{
    if(event.target.id==='n'|| event.key==='N'){
     document.getElementById('display1').innerHTML="";
   }})
  
  
  