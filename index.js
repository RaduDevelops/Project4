let adder = document.getElementById("adder");
const taskContainer = document.getElementById("my-tasks");
let textInput = document.querySelector("input");
let pcontainer = document.getElementsByClassName("p-container");

function adding(){
    const taskContainer = document.getElementsByClassName("tasks");
    const parent = document.createElement('div');
    parent.classList.add("task");

    const child1 = document.createElement('div');
    child1.classList.add("unchecked");
    child1.innerHTML = textInput.value;

    const child2 = document.createElement('button');
    const child22 =document.createElementNS("http://www.w3.org/2000/svg","svg");
    child2.appendChild(child22);
    child2.classList.add("inactive");

    parent.appendChild(child1);
  


    document.body.pcontainer.taskContainer.appendChild(parent);
    
    };

adder.addEventListener("click",(e)=>{
    e.preventDefault();
  if(textInput.value!==""){
    console.log("added");
    adding();
  }else{
    console.log("not added");
    alert("Please write a task before addind it!");
  }
})

console.log(taskContainer);