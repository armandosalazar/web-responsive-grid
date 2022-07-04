document.getElementById('burger').addEventListener('click', function () {
  document
    .getElementsByClassName('main__links')[0]
    .classList.toggle('main__links--active');
});
document
  .getElementsByClassName('main__links')[0]
  .addEventListener('click', function () {
    document
      .getElementsByClassName('main__links')[0]
      .classList.toggle('main__links--active');
  });
