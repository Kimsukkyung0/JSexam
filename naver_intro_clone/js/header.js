$(document).ready(function(){
    $('.gnb_menu').delegate('.gnb_menu_list', 'mouseenter', function(){
        $(this).find('.gnb_dropMenu_wrap').stop().slideDown(500);
    });

});
