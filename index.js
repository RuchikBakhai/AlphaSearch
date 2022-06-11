$(document).ready(function(){
  $(".heading").css("display","none");
  $(".heading").fadeIn(1000);
  $(".search").css("display","none");
  $(".search").fadeIn(1000);
  $(".engine").css("display","none");
  $(".engine").fadeIn(1000);
  $(".searchimg").css("display","none");
  $(".searchimg").fadeIn(1000);
  $(".rules").css("display","none");
  $(".rules").fadeIn(1000);
});
var es = false;
var engine = "";
$("body").on("keypress",function(event){
  if(event.key=="Enter"){
    if(es==false){
      var key = document.querySelector(".searchbar").value;
      es = true;
      setEngine(key);
    }
    else{
      var key = document.querySelector(".searchbar").value;
      search(key);
    }
  }
});
$(".searchimg").click(function(event){
      if(es==false){
        var key = document.querySelector(".searchbar").value;
        es = true;
        setEngine(key);
      }
      else{
        var key = document.querySelector(".searchbar").value;
        search(key);
      }
});
function setEngine(key){
  if(key=="g" || key=="G"){
    $(".enginename").text("Google");
    var key = document.querySelector(".searchbar").value = "";
    $(".codehead").text("search in Google");
    engine = "https://www.google.com/search?q=";
  }
  else if(key=="y" || key=="Y"){
    $(".enginename").text("Youtube");
    var key = document.querySelector(".searchbar").value = "";
    $(".codehead").text("search in Youtbe");
    engine = "https://www.youtube.com/results?search_query=";
  }
  else if(key=="d" || key=="D"){
    $(".enginename").text("Google Docs");
    var key = document.querySelector(".searchbar").value = "";
    $(".codehead").text("search in Google Docs");
    engine = "https://docs.google.com/document/u/0/?tgif=d&q=";
  }
  else if(key=="f" || key=="F"){
    $(".enginename").text("Facebook");
    var key = document.querySelector(".searchbar").value = "";
    $(".codehead").text("search in Facebook");
    engine = "https://www.facebook.com/search/top?q=";
  }
  else if(key=="sl" || key=="Sl"){
    $(".enginename").text("Slides");
    var key = document.querySelector(".searchbar").value = "";
    $(".codehead").text("search in Slides");
    engine = "https://docs.google.com/presentation/u/0/?tgif=d&q=";
  }
  else if(key=="dr" || key=="Dr"){
    $(".enginename").text("Drive");
    var key = document.querySelector(".searchbar").value = "";
    $(".codehead").text("search in Drive");
    engine = "https://drive.google.com/drive/search?q=";
  }
  else{
    var key = document.querySelector(".searchbar").value = "";
    $(".codehead").text("Invalid key");
    es = false;
  }
}

function search(key){
  window.location.href = engine+key;
}
