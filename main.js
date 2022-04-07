
// window.addEventListener('load', () => {




const form = document.querySelector('#new-tasks-form');
const input = document.querySelector('#new-task-input');
const listElement = document.querySelector('#tasks');


form.addEventListener('submit', (e) => {
e.preventDefault();

const task = input.value;

if (!task) {
    alert('please Fill out the task form');
    return;
}

const task_el = document.createElement('div');
task_el.classList.add("task");
// console.log(task_el)

const task_content_el = document.createElement('div');
task_content_el.classList.add("content");
// task_content_el.innerText = task;



const task_input_el = document.createElement('input');

task_input_el.classList.add('text');
task_input_el.type = "text";
task_input_el.value = task;
task_input_el.setAttribute('readonly','readonly');

task_content_el.appendChild(task_input_el);

task_el.appendChild(task_content_el);

const action_el = document.createElement('div');
action_el.classList.add("actions");

const edit_button = document.createElement('button');
edit_button.classList.add("edit");
edit_button.innerText = "Edit";

const delete_button = document.createElement('button');
delete_button.classList.add("delete");
delete_button.innerText = "Delete";

action_el.appendChild(edit_button);
action_el.appendChild(delete_button);

task_el.appendChild(action_el);


listElement.appendChild(task_el);


input.value = "";

edit_button.addEventListener('click', () => {
   if(edit_button.innerText.toLocaleLowerCase()=="edit"){
    task_input_el.removeAttribute("readonly");
    task_input_el.focus();
    edit_button.innerText = "Save"

   }else {
       task_input_el.setAttribute("readonly","readonly");
       edit_button.innerText = "Edit";
   }


})


delete_button.addEventListener('click', () => {
    listElement.removeChild(task_el);
})




})








// })