
//CALL BACK
//
//$(document).ready(function(){
//    $("h1").click(function(){
//        
//        $(".sample").slideToggle(1000,function(){
//            alert("Animation Completed");
//        });
//    });
//});    
//  



//CHAGING

$(document).ready(function(){
    $("h1").click(function(){
        
        $(".sample").css('background-color','orange').slideUp(2000).slideDown(1000)
        
    });
});  