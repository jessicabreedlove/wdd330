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

const formTodo = document.querySelector('.formToDo');
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
        // //trying to get the count
        // let activeCount = document.querySelector('#activeCount');
        // lengthIWant = countingItems;
        // activeCount.innerHTML = `${lengthIWant}`;
        // activeCount.innerHTML = activeCount;
        // console.log(countingItems);
        //returns total with undefined
        const p = document.createElement('p');
        p.innerHTML = todo.name;
        div.append(input);
        div.append(p);
        list.append(div);
      });
  }
}

//function to stringify
function saveLocal(items) {
  localStorage.setItem('todoItemsTut', JSON.stringify(items));
}

//function to parse
function getLocal() {
  return JSON.parse(localStorage.getItem('todoItemsTut'));
}

//removing item from list and localStorage
// const inputs = document.querySelectorAll('input[name="itemCheck');
// for (let i = 0; i < inputs.length; i++) {
//   inputs[i].addEventListener('click', function (e) {
//     if (JSON.parse(localStorage.getItem('todoItemsTut')) !== null) {
//       let itemsLocal = [];
//       JSON.parse(localStorage.getItem('todoItemsTut')).map((todo) => {
//         if (todo.id != e.target.id) {
//           itemsLocal.push(todo);
//         }
//       });
//       localStorage.setItem('todoItemsTut', JSON.stringify(itemsLocal));
//       window.location.reload();
//     }
//   });
// }

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
      console.log(getLocal().length);
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
