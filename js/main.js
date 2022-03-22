//sticky menu

window.addEventListener("scroll",function(){
  
    var navbar = document.getElementById("navbar");
  
  if(window.pageYOffset >= 100 ){
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  })
  
//mobile menu

var myNav=document.getElementById("mobileNav")
var openNav=document.getElementById("openNav")
var closeNav=document.getElementById("closeNav")


openNav.addEventListener("click", function(){
    myNav.style.height="100%";
})
closeNav.addEventListener("click", function(){
    myNav.style.height="0%";
})

function closeN(){
  myNav.style.height="0%";
}


//counter up 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

//scroll up
$(function(){
    $.scrollUp();
  });
