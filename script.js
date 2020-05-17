//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);



// Functions

function addTodo(event){
    //preventing the default behavior to refreshing bthe page with button click
    event.preventDefault();

    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //creating li
    const newTodo = document.createElement('li');
     newTodo.innerText = todoInput.value;
     newTodo.classList.add('todo-item');
     todoDiv.appendChild(newTodo);
     
     //Checked mark button
     const completedButton = document.createElement('button');
     completedButton.innerHTML ='<i class="fas fa-check"></i>';
     completedButton.classList.add("complete-btn");
     todoDiv.appendChild(completedButton);

     //Check trash or Delete button
     const deleteButton = document.createElement('button');
     deleteButton.innerHTML ='<i class="fas fa-trash"></i>';
     deleteButton.classList.add("delete-btn");
     todoDiv.appendChild(deleteButton);

     //Append to UL list
     todoList.appendChild(todoDiv);
     
     //Clear Todo input value
      todoInput.value = "";
}

function deleteCheck(e){
     const item = e.target;

     //Delete Todo
     if(item.classList[0] ==="delete-btn"){
     const todo = item.parentElement ;


     //Animation
     todo.classList.add("fall");
     todo.addEventListener('transitionend', function(){
         todo.remove();
     });  
     }

     if(item.classList[0] === "complete-btn"){
         const todo = item.parentElement;
         todo.classList.toggle("completed");
     }
     
}