

let todoItemContainer = document.getElementById("todo-items-container");
let addBtn = document.getElementById("add-btn");
let title = document.getElementById("title");
let form = document.getElementById("form");
let leftTast = document.getElementById("left-tast");

let arr = [];

form.addEventListener("click", (event) => {
    event.preventDefault()
})


addBtn.addEventListener('click', () => {
    arr.push(title.value)
    localStorage.setItem("todo", JSON.stringify(arr))
    title.value = "";
    showTodo();

});

function showTodo() {
    let items = JSON.parse(localStorage.getItem("todo"));
    todoItemContainer.innerHTML = ""
    items.forEach((item, index) => {
        todoItemContainer.innerHTML += `

        <div class="todo-item " id = todo${index} onclick = active(id) >
          
            <input type = "checkbox" class = "circle" />
            
            <div class="todo-content"> ${item} </div>
            <button class= delete-btn id = ${index} onclick=deleteItem(${index})> <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/000000/filled-trash.png" alt="filled-trash"/> </button>
        </div>
 `
    });

    if (items.length > 0) {
        leftTast.innerText = ` ${items.length}  tasks left `
    }else{
        leftTast.innerText = "";
    }
}



function deleteItem(id) {

    let items = JSON.parse(localStorage.getItem("todo"));

    let newItems = items.filter((item, index) => {
        return index !== id;
    })

    localStorage.setItem("todo", JSON.stringify(newItems))
    showTodo();

}

function active(index) {
    let todoActiveElement = document.getElementById(index);
    todoActiveElement.classList.toggle("active")

}









