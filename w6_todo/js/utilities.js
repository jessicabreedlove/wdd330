import { getLocal, saveLocal } from './ls.js';
// get date
window.onload = () => {
  //render date
  const dateBox = document.querySelector('.date');
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  dateBox.append(`Date : ${month}/${day}/${year}`);
  rebuildHTML();
};

let list = document.querySelector('.list');

let activeBtn = document.getElementById('filterActive');
let completedBtn = document.getElementById('filterComplete');
let allBtn = document.getElementById('filterAll');

activeBtn.addEventListener('click', () => {
  rebuildHTML('active');
});

completedBtn.addEventListener('click', () => {
  rebuildHTML('completed');
});

allBtn.addEventListener('click', () => {
  rebuildHTML('');
});

//active items count

function rebuildHTML(filter) {
  //adding items to the list
  list.innerHTML = '';
  let localList = getLocal();
  if (localList !== null) {
    localList
      .filter((todo) => {
        if (filter == 'active') {
          if (todo.completed == true) {
            return false;
          }
        } else if (filter == 'completed') {
          if (todo.completed == false) {
            return false;
          }
        }
        return true;
      })
      .map((todo) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.id = todo.id;
        const button = document.createElement('button');
        button.classList.add('deleteBtn');
        button.innerHTML = 'x';
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'itemCheck';
        input.checked = todo.completed;
        input.id = todo.id;
        input.addEventListener('click', () => {
          //move item from active to completed - also in local
          localList = localList.map((localItem) => {
            if (localItem.id == todo.id) {
              localItem.completed = input.checked;
            }
            return localItem;
          });
          saveLocal(localList);
        });
        const p = document.createElement('p');
        p.innerHTML = todo.name;
        div.append(input);
        div.append(p);
        div.append(button);
        list.append(div);
      });
    //to get the count
    let activeCount = document.querySelector('#activeCount');
    let lengthIWant = localList.filter((i) => i.completed == false);
    activeCount.innerHTML = `${lengthIWant.length}`;
  }
}

//function for delete
list.addEventListener('click', (e) => {
  if (e.target.className == 'deleteBtn') {
    let id = e.target.parentNode.id;
    let listLocal = getLocal().filter((item) => item.id != id);
    saveLocal(listLocal);
    rebuildHTML('');
  }
});

export { rebuildHTML };
