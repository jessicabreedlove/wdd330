// local storage helpers

//function to stringify
function saveLocal(items) {
  localStorage.setItem('todoItemsTut', JSON.stringify(items));
}

//function to parse
function getLocal() {
  return JSON.parse(localStorage.getItem('todoItemsTut'));
}

export { getLocal, saveLocal };
