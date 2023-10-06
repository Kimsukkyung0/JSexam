let subToggle=true;
$(".language-dropdown").hover(()=>{
  if(subToggle){
    $("#language-content").slideDown(1000);
  }else{
    $("#language-content").slideUp(1000);
  }
  subToggle=!subToggle;
});
