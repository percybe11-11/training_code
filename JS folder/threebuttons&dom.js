
let isSubbed=JSON.parse(localStorage.getItem('subStateLocal'))||false;

let buttonFlag=JSON.parse(localStorage.getItem('bfl'))||{
    game: false,
    music:false,
    news:false
  };

let subButton=document.getElementById('subber');
let button={
  game:document.getElementById('gameB'),
  music:document.getElementById('musicB'),
  news:document.getElementById('newsB')
}

subbing();

document.getElementById('subber').innerText=isSubbed?'subscribed':'subscribe';

document.getElementById('subber').addEventListener('click',()=>{
  isSubbed=!isSubbed;
  localStorage.setItem('subStateLocal',JSON.stringify(isSubbed));
  subbing();
})

function subbing(){
subButton.classList.toggle('pressedSub',isSubbed);
subButton.classList.toggle('unpressedSub',!isSubbed);
document.getElementById('subber').innerText=isSubbed?'subscribed':'subscribe';
};

/*function buttonListener(event){
  buttonFlag[event]=!buttonFlag[event];
  button[event].classList.toggle('pressedSub',buttonFlag[event]);
  button[event].classList.toggle('unpressedSub',!buttonFlag[event]);
  localStorage.setItem('bfl',JSON.stringify(buttonFlag));
};*///

button.music.addEventListener('click',()=>{
  displayer('content1');
  buttonStatus('musicB');
});

button.game.addEventListener('click',()=>{
  displayer('content2');
  buttonStatus('gameB');
  });

button.news.addEventListener('click',()=>{
  displayer('content3');
  buttonStatus('newsB');
});

  function displayer(id){
    document.querySelectorAll('.hiddenPara').forEach(div=>{div.style.display='none'});
    document.getElementById(id).style.display='block';
  }

  function buttonStatus(id){
    document.querySelectorAll('.toggler').forEach(button=>{button.classList.remove('pressedSub');
      button.classList.add('unpressedSub');
    });

    let buttonStat=document.getElementById(id);
    buttonStat.classList.add('pressedSub');
    buttonStat.classList.remove('unpressedSub');

  }


window.onload = function(){
  Object.keys(buttonFlag).forEach((event)=>{
    button[event].classList.toggle('pressedSub',buttonFlag[event]);
    button[event].classList.toggle('unpressedSub',!buttonFlag[event]);
})}

