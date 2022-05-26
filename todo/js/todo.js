function generateTodoHTML(todoLIst, inputValue, property) {
  //generate div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  todoDiv.classList.toggle(property);

  //generate li
  const newTodo = document.createElement('li');
  newTodo.innerText = inputValue;
  newTodo.classList.add('todo-item');

  todoDiv.appendChild(newTodo);

  if (property === 'uncompleted') {
    //generate checkmark btn
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
    completedBtn.classList.add('complete-btn');
    todoDiv.appendChild(completedBtn);
  } else if (property === 'completed') {
    //generate restore btn
    const restoreBtn = document.createElement('button');
    restoreBtn.innerHTML = '<i class="fas fa-history"></i>';
    restoreBtn.classList.add('restore-btn');
    todoDiv.appendChild(restoreBtn);
  }

  // generate delete btn
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.classList.add('delete-btn');
  todoDiv.appendChild(deleteBtn);

  // append div to exisiting ul in html
  todoList.appendChild(todoDiv);

  return todoList;
}

export default generateTodoHTML;
