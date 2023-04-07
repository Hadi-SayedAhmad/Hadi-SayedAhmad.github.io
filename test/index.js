const dropdown = document.querySelectorAll('.dropdown');
const dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
  const dropdownToggle = el.querySelector('a');
  const dropdownMenu = el.querySelector('.dropdown-menu');
  const dropdownImg = el.querySelector('img');
  const dropdownDesc = el.querySelector('.desc');
  dropdownToggle.onclick = function(event) {
    event.preventDefault();
    event.stopPropagation();
    dropdownArray.forEach(function(el){
      el.classList.remove('show');
    });
    el.classList.add('show');
  };
  dropdownToggle.onmouseover = function(event) {
    event.preventDefault();
    event.stopPropagation();
    dropdownArray.forEach(function(el){
      el.classList.remove('show');
    });
    el.classList.add('show');
    dropdownDesc.style.display = 'block';
    dropdownImg.style.display = 'block';
  };
  dropdownToggle.onmouseout = function(event) {
    event.preventDefault();
    event.stopPropagation();
    el.classList.remove('show');
    dropdownDesc.style.display = 'none';
    dropdownImg.style.display = 'none';
  };
});
