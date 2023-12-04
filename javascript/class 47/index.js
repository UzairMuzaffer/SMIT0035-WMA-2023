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
      todos = data;
      displayTodos(data);
   } catch (error) {
      console.error('Error fetching todos:', error.message);
   }
};


async function editTodo(id) {
   const index = todos.findIndex(todo => todo.id == id);
   const title = prompt(`Edit data for this(${id}) todo`, todos[index].title);

   const response = await fetch(`${apiUrl}/${id}`, {
      method: 'PATCH',
      // method: 'PUT',
      body: JSON.stringify({
         title,
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
   });
   const data = await response.json();
   todos[index].title = data.title;
   displayTodos(todos);
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

   if (!title) return;
   try {
      const response = await fetch(apiUrl, {
         method: 'POST',
         body: JSON.stringify({
            title,
            completed: false,
            userId: 1, // For simplicity, assign to a user with ID 1
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      });
      const todo = await response.json();
      todos.unshift(todo);
      displayTodos(todos);
      newTodoInput.value = ''; // Clear input field
   } catch (error) {
      console.error('Error adding todo:', error.message);
   }
}

async function deleteTodo(id) {
   try {
      const data = await (await fetch(`${apiUrl}/${id}`, {
         method: 'DELETE',
      })).json();
      todos = todos.filter(todo => todo.id != id);
      displayTodos(todos);
   } catch (error) {
      console.error('Error deleting todo:', error.message);
   }
}

fetchTodos();