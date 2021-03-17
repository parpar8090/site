const url = "https://test.parpar8090.com";
JQuery(document).ready(function(){
  JQuery('#head').load(url+"head.html"); 
  JQuery('#header').load(url+"/header.html"); 
  JQuery('#footer').load(url+"footer.html"); 
});