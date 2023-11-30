/*
   Asynchronous javascript
   1. path params
   
   // api request methods
   1. GET
   2. DELETE
   3. POST
   4. PUT
   5. PATCH

   */

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
let todos = [];

async function fetchTodos() {
   try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      displayTodos(data);
   } catch (error) {
      console.error('Error fetching todos:', error.message);
   }
};


function editTodo(id) {
   const index = todos.findIndex(todo => todo.id == id);
   const title = prompt(`Edit data for this(${id}) todo`, todos[index].title);

   fetch(`${apiUrl}/${id}`, {
      method: 'PATCH',
      // method: 'PUT',
      body: JSON.stringify({
         title,
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
   })
      .then((response) => response.json())
      .then((json) => {
         todos[index].title = json.title;
         displayTodos(todos);
      });
}

function displayTodos(todos) {
   const todoList = document.getElementById('todoList');
   todoList.innerHTML = '';

   todos.forEach(todo => {
      const listItem = document.createElement('li');
      listItem.classList.add('todoItem');
      listItem.innerHTML = `
            <span>${todo.title}</span>
            <button onclick="deleteTodo(${todo.id})">Delete</button>
            <button onclick="editTodo(${todo.id})">Edit</button>
          `;
      todoList.appendChild(listItem);
   });
}

async function addTodo() {
   const newTodoInput = document.getElementById('newTodo');
   const title = newTodoInput.value.trim();

   if (title) {
      try {
         fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify({
               title,
               completed: false,
               userId: 1, // For simplicity, assign to a user with ID 1
            }),
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
         }).then(response => response.json()).then(todo => {
            todos.unshift(todo);
            displayTodos(todos);
         });

         newTodoInput.value = ''; // Clear input field
      } catch (error) {
         console.error('Error adding todo:', error.message);
      }
   }
}

function deleteTodo(id) {
   try {
      fetch(`${apiUrl}/${id}`, {
         method: 'DELETE',
      }).then(() => {
         todos = todos.filter(todo => todo.id != id);
         displayTodos(todos);
      });
      // Fetch updated list of todos
   } catch (error) {
      console.error('Error deleting todo:', error.message);
   }
}
// async function deleteTodo(todoId) {
//    try {
//       await fetch(`${apiUrl}/${todoId}`, {
//          method: 'DELETE',
//       });

//       fetchTodos(); // Fetch updated list of todos
//    } catch (error) {
//       console.error('Error deleting todo:', error.message);
//    }
// }

// Initial fetch and display
fetchTodos();