// mobile menu

var menu = document.getElementById('bars');
var mobileList = document.getElementById('mobileList');
var active = false;

menu.addEventListener('click',function(){
  if(active === false)
    {
     mobileList.style.display = "block";
      active = true;
    } else {
      mobileList.style.display = "none";
      active=false;
    }
})