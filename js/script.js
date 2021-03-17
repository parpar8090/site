function setFooterFromMain(id){
  var main = location.href;
  document.getElementById(id) = main.getElementById("footer");
  alert(main);
}