const LOCAL_STORAGE_LIST_KEY = 'task.lists'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

var todoInput = document.getElementById("todo-input")
var submitBtn = document.getElementById("todo-submit")
var todoList = document.querySelector(".todo-list")
var options = document.querySelectorAll(".selectopt")

document.addEventListener("DOMContentLoaded", getTodos)
submitBtn.addEventListener("click", addTodoList)
todoList.addEventListener("click", deleteCheck)

function addTodoList(e) {
    e.preventDefault()

    var todoText = todoInput.value


    if (todoText == undefined || todoText == "" || todoText == " ") {
        alert("Fill in all the details")
    }

    else {
        lists.push(todoText)
        save()

        // div-todo
        var todoDiv = document.createElement("div")
        todoDiv.classList.add("todo")

        // li-todo
        var todoItem = document.createElement("li")
        todoItem.innerText = todoText
        todoItem.classList.add("todo-item")
        todoDiv.appendChild(todoItem)

        //complete-button-todo
        var completeBtn = document.createElement("button")
        completeBtn.classList.add("todo-complete")
        completeBtn.innerHTML = '<i class="fas fa-check"></i>'
        todoDiv.appendChild(completeBtn)

        //delete-button-todo
        var deleteBtn = document.createElement("button")
        deleteBtn.classList.add("todo-delete")
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
        todoDiv.appendChild(deleteBtn)

        //append to todo-list
        todoList.appendChild(todoDiv)

        todoInput.value = null
    }
}

function deleteCheck(e) {
    var item = e.target
    var todo = item.parentElement

    if (item.classList.contains("todo-delete")) {
        todo.setAttribute("id", "animate")

        item.onclick = anime({
            targets: "#animate",
            translateX: window.innerWidth,
            duration: 6000,
        }
        )

        removeLocalTodo(todo)

        todo.addEventListener("transitionend", function () {
            todo.remove()
        })

    }

    if (item.classList.contains("todo-complete")) {
        todo.classList.toggle("completed")
    }
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
}

function getTodos() {
    let list = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

    list.forEach(todo => {
        // div-todo
        var todoDiv = document.createElement("div")
        todoDiv.classList.add("todo")

        // li-todo
        var todoItem = document.createElement("li")
        todoItem.innerText = todo
        todoItem.classList.add("todo-item")
        todoDiv.appendChild(todoItem)

        //complete-button-todo
        var completeBtn = document.createElement("button")
        completeBtn.classList.add("todo-complete")
        completeBtn.innerHTML = '<i class="fas fa-check"></i>'
        todoDiv.appendChild(completeBtn)

        //delete-button-todo
        var deleteBtn = document.createElement("button")
        deleteBtn.classList.add("todo-delete")
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
        todoDiv.appendChild(deleteBtn)

        //append to todo-list
        todoList.appendChild(todoDiv)

    });
}

function removeLocalTodo(todo) {
    var todoIndex = Array.from(todoList.childNodes).indexOf(todo);
    lists.splice(todoIndex, 1);
    save()
}

options.forEach(element => {
    element.addEventListener("click", filterItems)
})

function filterItems(e) {
    var todos = todoList.childNodes
    todos.forEach(element => {
        var option = e.target.value
        switch (option) {
            case "All":
                element.style.display = "flex"
                break
            case "Completed":
                if (element.classList.contains("completed")) {
                    element.style.display = "flex"
                }
                else {
                    element.style.display = "none"
                }
                break
            case "Uncompleted":
                if (element.classList.contains("completed")) {
                    element.style.display = "none"
                }
                else {
                    element.style.display = "flex"
                }
                break
        }
    })
}
