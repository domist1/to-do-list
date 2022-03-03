// SET DATE

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


let todaysDate = new Date();
let year = todaysDate.getFullYear();
let date = todaysDate.getDate();
let month = todaysDate.getMonth();
month = months[month];

const datum = document.querySelector('.date');
datum.textContent = `${month}, ${date} ${year}`;

// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form  = document.querySelector('.form-control');
const item  = document.getElementById('taskInput');

const submitBtn = document.querySelector('.add-task');
const container = document.querySelector('.tasks-container');
const list      = document.querySelector('.tasks-list');
const clearBtn  = document.querySelector('.clear-tasks');
// edit option
let editElement;
let editFlag = false;
let editID   = '';


// ****** EVENT LISTENERS **********
submitBtn.addEventListener('click', addItem);
// clear items
clearBtn.addEventListener('click',clearItems);

// ****** FUNCTIONS **********
function addItem(e){
  const value = item.value;
  const id = new Date().getTime.toString();
  if(value && !editFlag){ 
   const element = document.createElement('article');
   // add class
   element.classList.add('task-item');
   // add id
   const attr = document.createAttribute('data-id');
   attr.value = id;
   element.setAttributeNode(attr);
   element.innerHTML = `
   <p class="title">${value}</p>
      <div class="btn-container">
      <!-- delete btn -->
      <button type="button" class="delete-btn">
         <i class="fas fa-trash"></i>
      </button>
      </div>
   `;
   const deleteBtn = element.querySelector('.delete-btn');
   deleteBtn.addEventListener('click', deleteItem);
   // append child
   list.appendChild(element);
   // display alert
   displayAlert('item added to the list', 'success');
   // show container
   container.classList.add('show-container');
   // set back to default
   setBackToDefault();
  }
   else if(value && editFlag){
   console.log('edit');
   }
   else{
   displayAlert('please enter value','delete');
   }
}

// display alert
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // remove alert
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    },2000);
}

// clear items
function clearItems(){
    const items = document.querySelectorAll('.task-item');
    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        });
    }
    container.classList.remove('show-container');
    displayAlert('empty list', 'success');
    setBackToDefault();
}

// set back to default
function setBackToDefault(){
    item.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'add';
}

// delete function
function deleteItem(){
    const element = document.querySelector('.task-item');
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove('show-container');
    }
    displayAlert('item removed', 'delete');
    setBackToDefault();
} 

