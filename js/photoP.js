
"use strict";
$("#profile").click(function(){
  var x = $("#profile");
  if (x.attr("src")==='img/perfil5.jpg'){
  x.attr("src","img/perfil1.PNG");
  }
  else{
  x.attr("src","img/perfil5.jpg");
  }
});
