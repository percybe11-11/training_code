let inputArray = [];
let holder='';

function holderRun(){
  holder ='';
for (let i=0;i<inputArray.length;i++){
  const todoObject = inputArray[i];
  let name = todoObject.name;
  let dueDate= todoObject.dueDate;
  const html = `<p>${name}</p><p>${dueDate}</p><button class="delete button" onclick="inputArray.splice(${i},1); holderRun();">Delete</button>`;
  holder += html;
}
document.getElementById('display2').innerHTML=holder;
}


function submit(){
  let inputBox = document.getElementById('inputbox');
  let date = document.getElementById('dater');
  if (inputBox.value!=='') {
  let inputValue = inputBox.value;
  dateView = date.value;
  inputArray.push({name: inputValue, dueDate: dateView});
  console.log(inputArray);
  inputBox.value = '';
  holderRun();
  }
}