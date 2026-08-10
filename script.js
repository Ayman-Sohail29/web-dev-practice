console.log("Connected!");

document.getElementById("myBtn").addEventListener("click", function() {
  let name = prompt("what is your name?");
  alert("HELLO " + name ) ;
});

document.getElementById("addBtn").addEventListener("click", function(){
  let task = document.getElementById("taskinput").value;
  let li = document.createElement("li");
  li.textContent = task;


  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", function() { li.remove(); });
  li.appendChild(delBtn);
  document.getElementById("tasklist").appendChild(li);
} );