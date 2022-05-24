window.onload = () => {
  //render date
  const dateBox = document.querySelector('.date');
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  dateBox.append(`Date : ${month}/${day}/${year}`);
};
