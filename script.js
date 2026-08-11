console.log("Connected!");

let tasks = [];



document.getElementById("addBtn").addEventListener("click", function(){
  let task = document.getElementById("taskinput").value;
  tasks.push(task);
  document.getElementById("taskCount").textContent= "totaltasks : " + tasks.length;
    let li = document.createElement("li");
  li.textContent = task;


  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", function() { li.remove(); });
  li.appendChild(delBtn);
  document.getElementById("tasklist").appendChild(li);
} );