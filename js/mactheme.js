function errorInput(){
  document.getElementById("passwordInput").classList.add('animated');
  document.getElementById("passwordInput").classList.add('shake');
  setTimeout(function(){document.getElementById("passwordInput").classList.remove('shake')}, 2000);
  return false;
}
