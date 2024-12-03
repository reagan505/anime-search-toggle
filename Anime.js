function searchToggle(obj, evt) {
  var container = document.querySelector('.search-wrapper');

  if (!container.classList.contains('active')) {
      container.classList.add('active');
      evt.preventDefault();
  } else if (container.classList.contains('active') &&
             !obj.closest('.input-holder')) {
      container.classList.remove('active');
      container.querySelector('.search-input').value = '';
  }
}

window.searchToggle = searchToggle;
