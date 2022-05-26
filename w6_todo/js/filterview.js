const filterAll = document.querySelector('#filterAll');
const filterActive = document.querySelector('#filterActive');
const filterComplete = document.querySelector('#filterComplete');

filterAll.addEventListener('click', () => {
  list.item.add('filterAll');
  console.log('filterAll');
});

filterActive.addEventListener('click', () => {
  list.item.add('filterActive');
  list.item.remove('filterAll');
  list.item.remove('filterComplete');
});

filterComplete.addEventListener('click', () => {
  list.item.add('filterComplete');
  list.item.remove('filterAll');
  list.item.remove('filterActive');
});
