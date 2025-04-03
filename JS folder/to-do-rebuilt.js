
let array=JSON.parse(localStorage.getItem('holding')) || [];

document.getElementById("submit-button").addEventListener('click',()=>{
  runSub();
})

if (!Array.isArray(array)) {
  array = [];
}

let holder='';

function adder(){
  holder='';
  array.forEach(function(inputer,index){
   let name = inputer.name;
   let date = inputer.date;
    let html = `
   <div class='spacer'> <p>${name}</p></div>
   <div class='spacer'> <p>${date}</p></div>
   <div class='spacer'> <p><button class='deleter'>Delete</button></p></div>`;
    holder+=html;
  })
  
  document.getElementById('display').innerHTML = holder;

    document.querySelectorAll('.deleter').forEach((deleteButton, index)=>{
      deleteButton.addEventListener('click',()=>{
        deleteItem(index);
      })
    })


  localStorage.setItem('holding',JSON.stringify(array));
} 

function runSub(){
 let holder3 = document.getElementById('inputbox');
 let dater1 = document.getElementById('dater');
  let inputText = holder3.value;
  let inputDater = dater1.value;
  if(inputText!==''){
    let name=inputText;
    let date=inputDater;
    array.push({name,date});
    holder3.value='';
    adder();
  }
  localStorage.setItem('holding', JSON.stringify(array));
  adder();
}

function deleteItem(index){
  array.splice(index,1);
  localStorage.setItem('holding', JSON.stringify(array));
  adder();
}
adder();