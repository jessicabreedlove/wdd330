import { getLocal, saveLocal } from './ls.js';
import { rebuildHTML } from './utilities.js';

const formTodo = document.querySelector('.formToDo');
//form submit
formTodo.onsubmit = function (e) {
  e.preventDefault();
  const value = e.target.name.value;
  let items = [];
  let id = Id();
  function Id() {
    if (getLocal() === null || getLocal().length == 0) {
      return 1;
    } else {
      // console.log(getLocal().length);
      return getLocal()[getLocal().length - 1].id + 1;
    }
  }
  let item = {
    id: id,
    name: value,
    completed: false,
  };
  if (value == '') {
    alert('please add a value');
  } else {
    if (getLocal() == null) {
      items.push(item);
      saveLocal(items);
      rebuildHTML();
    } else {
      getLocal().map((todo) => {
        items.push(todo);
      });
      items.push(item);
      saveLocal(items);
      rebuildHTML();
    }
  }
};
