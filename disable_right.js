// This script disables right click as a basic protection against image theft.

window.addEventListener('contextmenu', function (e) { 
  e.preventDefault(); 
}, false);