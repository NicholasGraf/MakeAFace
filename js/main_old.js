$(function() {


// Nav Toggle
$('.nav-trigger').click(function(){
   $('.nav,.face').toggleClass('trigger');
   $('.opening').addClass('trigger');
});

// Categories
$('.cat-back').click(function(){
   $('.category').removeClass('trigger');
   $('.nav-background').addClass('trigger');
});

$('.cat-head').click(function(){
   $('.category').removeClass('trigger');
   $('.nav-head').addClass('trigger');
});

$('.cat-hair').click(function(){
   $('.category').removeClass('trigger');
   $('.nav-hair').addClass('trigger');
});

$('.cat-eyes').click(function(){
   $('.category').removeClass('trigger');
   $('.nav-eyes').addClass('trigger');
});

$('.cat-nose').click(function(){
   $('.category').removeClass('trigger');
   $('.nav-nose').addClass('trigger');
});

$('.cat-mouth').click(function() {
   $('.category').removeClass('trigger');
   $('.nav-mouth').addClass('trigger');
});

$('.cat-ass').click(function(){
   $('.category').removeClass('trigger');
   $('.nav-ass').addClass('trigger');
});

//Categort Back
$('.cat-close').click(function(){
   $(this).parent().removeClass('trigger');
});




// Draggable Items
$('.drag').TouchBox();

$('.face').on("click",".drag", function(){ 
   $(this).find('.remove').stop(0).show(0).delay(2000).hide(0); 
   $(this).find('.fade').stop().addClass('trigger').delay(2000).queue(function(){
         $(this).removeClass('trigger').dequeue();
   });
});

$('.face').on("click",".remove",function(){
   $(this).closest('.drag').remove();
});


// Backgrounds 

$('.background1a').click(function(){
  $('.face').css({"background":"url(img/background.jpg) center center"});
});

$('.background1').click(function(){
  $('.face').css({"background":"url(img/background1.jpg) center center"});
});

$('.background2').click(function(){
  $('.face').css({"background":"url(img/background2.jpg) center center"});
});

$('.background3').click(function(){
  $('.face').css({"background":"url(img/background3.jpg) center center"});
});

$('.background4').click(function(){
  $('.face').css({"background":"url(img/background4.jpg) center center"});
});





// Head
$('div[class^="nav-item head"]').click(function(){
   var item1 = '<div class="head"><img src="img/';
   var item2 = '.png"></div>';
   var classname = $(this).attr('class').split(' ')[1];
   $('.face').find('.head').remove();
   $('.face').append( item1 + classname + item2 );
});

/*
$('.head1').click(function(){
  $('.face').find('.head').remove();
  $('.face').append('<div class="head"><img src="img/head1.png"></div>');
});

$('.head2').click(function(){
  $('.face').find('.head').remove();
  $('.face').append('<div class="head"><img src="img/head2.png"></div>');
});

$('.head3').click(function(){
  $('.face').find('.head').remove();
  $('.face').append('<div class="head"><img src="img/head3.png"></div>');
});

$('.head4').click(function(){
  $('.face').find('.head').remove();
  $('.face').append('<div class="head"><img src="img/head4.png"></div>');
});

$('.head5').click(function(){
  $('.face').find('.head').remove();
  $('.face').append('<div class="head"><img src="img/head5.png"></div>');
});

$('.head6').click(function(){
  $('.face').find('.head').remove();
  $('.face').append('<div class="head"><img src="img/head6.png"></div>');
});

$('.head7').click(function(){
  $('.face').find('.head').remove();
  $('.face').append('<div class="head"><img src="img/head7.png"></div>');
});

$('.head8').click(function(){
  $('.face').find('.head').remove();
  $('.face').append('<div class="head"><img src="img/head8.png"></div>');
});

$('.head9').click(function(){
  $('.face').find('.head').remove();
  $('.face').append('<div class="head"><img src="img/head9.png"></div>');
});

$('.head10').click(function(){
  $('.face').find('.head').remove();
  $('.face').append('<div class="head"><img src="img/head10.png"></div>');
});


$('.head11').click(function(){
  $('.face').find('.head').remove();
  $('.face').append('<div class="head"><img src="img/head11.png"></div>');
});


$('.head12').click(function(){
  $('.face').find('.head').remove();
  $('.face').append('<div class="head"><img src="img/head12.png"></div>');
});


$('.head13').click(function(){
  $('.face').find('.head').remove();
  $('.face').append('<div class="head"><img src="img/head13.png"></div>');
});


$('.head14').click(function(){
  $('.face').find('.head').remove();
  $('.face').append('<div class="head"><img src="img/head14.png"></div>');
});
*/



// Hair
$('div[class^="nav-item hair"]').click(function(){
   var item1 = '<div class="hair drag"><div class="fade"><img src="img/';
   var item2 = '.png"><div class="remove icon-remove"></div></div></div>';
   var classname = $(this).attr('class').split(' ')[1];
   $('.face').find('.hair').remove();
   $('.face').append( item1 + classname + item2 );
});

/*
$('.hair1').click(function(){
  $('.face').find('.hair').remove();
  $('.face').append('<div class="hair drag"><div class="fade"><img src="img/hair1.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.hair2').click(function(){
  $('.face').find('.hair').remove();
  $('.face').append('<div class="hair drag"><div class="fade"><img src="img/hair2.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.hair3').click(function(){
  $('.face').find('.hair').remove();
  $('.face').append('<div class="hair drag"><div class="fade"><img src="img/hair3.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.hair4').click(function(){
  $('.face').find('.hair').remove();
  $('.face').append('<div class="hair drag"><div class="fade"><img src="img/hair4.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.hair5').click(function(){
  $('.face').find('.hair').remove();
  $('.face').append('<div class="hair drag"><div class="fade"><img src="img/hair5.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.hair6').click(function(){
  $('.face').find('.hair').remove();
  $('.face').append('<div class="hair drag"><div class="fade"><img src="img/hair6.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.hair7').click(function(){
  $('.face').find('.hair').remove();
  $('.face').append('<div class="hair drag"><div class="fade"><img src="img/hair7.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.hair8').click(function(){
  $('.face').find('.hair').remove();
  $('.face').append('<div class="hair drag"><div class="fade"><img src="img/hair8.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.hair9').click(function(){
  $('.face').find('.hair').remove();
  $('.face').append('<div class="hair drag"><div class="fade"><img src="img/hair9.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.hair10').click(function(){
  $('.face').find('.hair').remove();
  $('.face').append('<div class="hair drag"><div class="fade"><img src="img/hair10.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

*/


// Eyes
$('div[class^="nav-item eyes"]').click(function(){
   var item1 = '<div class="eyes drag"><div class="fade"><img src="img/';
   var item2 = '.png"><div class="remove icon-remove"></div></div></div>';
   var classname = $(this).attr('class').split(' ')[1];
   $('.face').find('.eyes').remove();
   $('.face').append( item1 + classname + item2 );
});

/*
$('.eyes1').click(function(){
  $('.face').find('.eyes').remove();
  $('.face').append('<div class="eyes drag"><div class="fade"><img src="img/eyes1.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.eyes2').click(function(){
  $('.face').find('.eyes').remove();
  $('.face').append('<div class="eyes drag"><div class="fade"><img src="img/eyes2.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.eyes3').click(function(){
  $('.face').find('.eyes').remove();
  $('.face').append('<div class="eyes drag"><div class="fade"><img src="img/eyes3.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.eyes4').click(function(){
  $('.face').find('.eyes').remove();
  $('.face').append('<div class="eyes drag"><div class="fade"><img src="img/eyes4.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.eyes5').click(function(){
  $('.face').find('.eyes').remove();
  $('.face').append('<div class="eyes drag"><div class="fade"><img src="img/eyes5.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.eyes6').click(function(){
  $('.face').find('.eyes').remove();
  $('.face').append('<div class="eyes drag"><div class="fade"><img src="img/eyes6.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.eyes7').click(function(){
  $('.face').find('.eyes').remove();
  $('.face').append('<div class="eyes drag"><div class="fade"><img src="img/eyes7.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.eyes8').click(function(){
  $('.face').find('.eyes').remove();
  $('.face').append('<div class="eyes drag"><div class="fade"><img src="img/eyes8.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.eyes9').click(function(){
  $('.face').find('.eyes').remove();
  $('.face').append('<div class="eyes drag"><div class="fade"><img src="img/eyes9.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});
*/



// Nose
$('.nose1').click(function(){
  $('.face').find('.nose').remove();
  $('.face').append('<div class="nose drag"><div class="fade"><img src="img/nose1.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.nose2').click(function(){
  $('.face').find('.nose').remove();
  $('.face').append('<div class="nose drag"><div class="fade"><img src="img/nose2.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.nose3').click(function(){
  $('.face').find('.nose').remove();
  $('.face').append('<div class="nose drag"><div class="fade"><img src="img/nose3.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.nose4').click(function(){
  $('.face').find('.nose').remove();
  $('.face').append('<div class="nose drag"><div class="fade"><img src="img/nose4.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.nose5').click(function(){
  $('.face').find('.nose').remove();
  $('.face').append('<div class="nose drag"><div class="fade"><img src="img/nose5.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.nose6').click(function(){
  $('.face').find('.nose').remove();
  $('.face').append('<div class="nose drag"><div class="fade"><img src="img/nose6.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});



// Mouth
$('.mouth1').click(function(){
  $('.face').find('.mouth').remove();
  $('.face').append('<div class="mouth drag"><div class="fade"><img src="img/mouth1.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.mouth2').click(function(){
  $('.face').find('.mouth').remove();
  $('.face').append('<div class="mouth drag"><div class="fade"><img src="img/mouth2.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.mouth3').click(function(){
  $('.face').find('.mouth').remove();
  $('.face').append('<div class="mouth drag"><div class="fade"><img src="img/mouth3.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.mouth4').click(function(){
  $('.face').find('.mouth').remove();
  $('.face').append('<div class="mouth drag"><div class="fade"><img src="img/mouth4.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.mouth5').click(function(){
  $('.face').find('.mouth').remove();
  $('.face').append('<div class="mouth drag"><div class="fade"><img src="img/mouth5.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.mouth6').click(function(){
  $('.face').find('.mouth').remove();
  $('.face').append('<div class="mouth drag"><div class="fade"><img src="img/mouth6.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});

$('.mouth7').click(function(){
  $('.face').find('.mouth').remove();
  $('.face').append('<div class="mouth drag"><div class="fade"><img src="img/mouth7.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});



// Assessories
$('.ass1').click(function(){
  $('.face').find('.ass').remove();
  $('.face').append('<div class="ass drag"><div class="fade"><img src="img/ass1.png"><div class="remove icon-remove"></div></div></div>');
  $('.drag').TouchBox();
});


//END 
});
