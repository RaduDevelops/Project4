//Declaring the vars
let adder = document.getElementById("adder");
const taskContainer = document.getElementById("my-tasks");
let textInput = document.querySelector("input");
let pcontainer = document.getElementsByClassName("p-container");


// The function that adds a task
function adding(){
    const parent = document.createElement('div');
    parent.classList.add("task");
 // Creating the todo
    const child1 = document.createElement('div');
    child1.classList.add("unchecked");
    child1.innerHTML = textInput.value;
// Creating the 'checking' button
    const child2 = document.createElement('button');
    child2.classList.add("inactive");
    const child22 = document.createElement("i");
    child22.classList.add("fa-solid","fa-check");
    child2.appendChild(child22);
//Creating the 'remove' button
    const child3 = document.createElement('button');
    child3.classList.add("remove-btn");
    const child33 = document.createElement("i");
    child33.classList.add("fa-solid","fa-trash");
    child3.appendChild(child33);
//appending the children to the parent div, respectively to the task container
    parent.appendChild(child1);
    parent.appendChild(child2);
    parent.appendChild(child3);
    taskContainer.append(parent);
    };


// The function that removes a task
    function deleteTask(e){
      const item = e.target;
     if(item.classList[1] === "fa-trash"){
      const todo= item.parentElement.parentElement;
      todo.remove();
      }
      //  REMAIN HERE !!!!
      if(item.classList[1] === "fa-check"){
      }
    }


// Linking the adding function to the "Add Task" button
adder.addEventListener("click",(e)=>{
    e.preventDefault();
  if(textInput.value!==""){
    console.log("added");
    adding();
  }else{
    console.log("not added");
    alert("Please write a task before addind it!");
  }
});

taskContainer.addEventListener("click", deleteTask)





/* Linking the delete function to the "remove" button button
 removeButton.addEventListener("click",(e)=>{
  e.preventDefault();
  deleteTask();
 }) */

