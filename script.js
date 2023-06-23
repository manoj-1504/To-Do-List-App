const inpt = document.querySelector("input");
const btn = document.querySelector("button");
const inputList = document.querySelector("ul");
const div = document.getElementById("list-container");

btn.addEventListener("click", (e) => {

  if (inpt.value === "") {
    alert("Enter a task");
  } else {
    let lists = document.createElement("li");
    let spn = document.createElement("span");
    let txt = document.createTextNode("\u00d7");
    spn.appendChild(txt);
    lists.innerHTML = inpt.value;
    inputList.appendChild(lists);
    lists.appendChild(spn);
    div.style.display = "block";
  }

  inpt.value = "";
  setData();
});

inputList.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  setData();
});

function setData() {
  localStorage.setItem("data", inputList.innerHTML);
}

function showTask() {
  inputList.innerHTML = localStorage.getItem("data");
}
showTask();
