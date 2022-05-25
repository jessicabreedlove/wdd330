// get date
window.onload = () => {
  //render date
  const dateBox = document.querySelector('.date');
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  dateBox.append(`Date : ${month}/${day}/${year}`);
};

const formTodo = document.querySelector('.formToDo');
let list = document.querySelector('.list');

//adding items to the list
if (JSON.parse(localStorage.getItem('todoItemsTut')) !== null) {
  JSON.parse(localStorage.getItem('todoItemsTut')).map((todo) => {
    const div = document.createElement('div');
    div.className = 'item';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'itemCheck';
    input.id = todo.id;
    const p = document.createElement('p');
    p.innerHTML = todo.name;
    div.append(input);
    div.append(p);
    list.append(div);
  });
}

//removing item from list and localStorage
const inputs = document.querySelectorAll('input[name="itemCheck');
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', function (e) {
    if (JSON.parse(localStorage.getItem('todoItemsTut')) !== null) {
      let itemsLocal = [];
      JSON.parse(localStorage.getItem('todoItemsTut')).map((todo) => {
        if (todo.id != e.target.id) {
          itemsLocal.push(todo);
        }
      });
      localStorage.setItem('todoItemsTut', JSON.stringify(itemsLocal));
      window.location.reload();
    }
  });
}

//form submit
formTodo.onsubmit = function (e) {
  e.preventDefault();
  const value = e.target.name.value;
  let items = [];
  let id = Id();
  function Id() {
    if (
      JSON.parse(localStorage.getItem('todoItemsTut')) === null ||
      JSON.parse(localStorage.getItem('todoItemsTut')).length == 0
    ) {
      return 1;
    } else {
      console.log(JSON.parse(localStorage.getItem('todoItemsTut')).length);
      return (
        JSON.parse(localStorage.getItem('todoItemsTut'))[
          JSON.parse(localStorage.getItem('todoItemsTut')).length - 1
        ].id + 1
      );
    }
  }
  let item = {
    id: id,
    name: value,
  };
  if (value == '') {
    alert('please add a value');
  } else {
    if (JSON.parse(localStorage.getItem('todoItemsTut')) == null) {
      items.push(item);
      localStorage.setItem('todoItemsTut', JSON.stringify(items));
      window.location.reload();
    } else {
      JSON.parse(localStorage.getItem('todoItemsTut')).map((todo) => {
        items.push(todo);
      });
      items.push(item);
      localStorage.setItem('todoItemsTut', JSON.stringify(items));
      window.location.reload();
    }
    // const div = document.createElement('div');
    // div.className = 'item';
    // const input = document.createElement('input');
    // input.type = 'checkbox';
    // input.name = 'itemCheck';
    // const p = document.createElement('p');
    // p.innerHTML = value;
    // div.append(input);
    // div.append(p);
    // list.append(div);
  }
};
