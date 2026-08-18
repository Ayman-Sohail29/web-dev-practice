console.log("Connected!");
for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}
let tasks = [];

function sayhello(){
  alert(" HELLO!");
}
sayhello();

document.getElementById("addBtn").addEventListener("click", function(){
  let task = document.getElementById("taskinput").value;
  if (task===""){
    alert ("please add a task" )}
    else if  ( task.length===1 ) { alert("task is too short")}
    else{ tasks.push(task);


      
 function createDeleteButton(li){
   let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", function() { li.remove(); });
  li.appendChild(delBtn);
  document.getElementById("tasklist").appendChild(li);
 }

  document.getElementById("taskCount").textContent= "totaltasks : " + tasks.length;
    let li = document.createElement("li");
  li.textContent = task;
    createDeleteButton(li);

 
} });