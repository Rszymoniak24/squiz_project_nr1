$('.searchfield').removeClass('searchfield_nojs');
$('.searchfield').removeClass('searchinput_nojs');
$('.body_a').removeClass('body_a_nojs');
$('.hamb').removeClass('hamb_nojs');
$('.menuham').removeClass('menuham_nojs');
$('.headerexp').removeClass('headerexp_nojs');

$( ".cross" ).hide();

$( ".hamburger" ).click(function() {
$( ".menuham" ).slideToggle( 400, function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
   $('.headerexp').animate({height:'525px'}, 500);
});

$( ".cross" ).click(function() {
$( ".menuham" ).slideToggle( 400,function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();

});
$('.headerexp').animate({height:'220px'}, 500);
});

$(".buttonsearch").hover(
  function(){
    $(".searchfield").show();
  //  $(".searchfield").animate({width:'250px','margin-left' :'10px'},400);
  //  $(".searchinput").animate({width:'229px'},400);
    $(".searchinput").show();
    $(".searchinput").focus();
  })
  $(".searchfield").mouseleave(
    function(){

      var type=$('input[name="search"]').val()
      if(!type=="")
        return true;
    //  $(".searchfield").show();
    //  $(".searchfield").animate({width:'0px','margin-left' :'0px'},400);
    //  $(".searchinput").animate({width:'0px'},400);
 $(".searchinput").hide();
 $(".searchfield").hide();
    })


  $(".pause2").hide();
$(".pause").click(
  function(){

    $(".pause").hide();
      $(".pause2").show();
    $('.slid').slick('slickPause')

  })
  $(".pause2").click(
    function(){

      $(".pause2").hide();
        $(".pause").show();
      $('.slid').slick('slickPlay')

    })
