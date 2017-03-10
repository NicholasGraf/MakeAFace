$(function() {


// Navigation Toggle
$('.nav-trigger').click(function(){
   // Open/Close Face Items
   $('.nav').toggleClass('trigger');
   // Remove Opening Text
   $('.opening').addClass('trigger');
   // Close Sub-Categories everytime nav is opened
   $('.category').removeClass('trigger');
   // Remove Save Hiding Class the first time nav is opened
   $('.saved-trigger').delay(1000).queue(function(){
      $(this).removeClass('hidden').clearQueue();
      });
   // Remove Save icon when nav is open
   $('.saved').toggleClass('moveout');
   // Close Save Panel when nave is opened
   $('.saved').removeClass('trigger');
});



// Open Sub-Categories
$('div[class^="cat-"]').click(function(){
   var className = $(this).attr('class');
   $('.nav-' + className + '').addClass('trigger');
});



// Close Sub-Categories
$('.cat-close').click(function(){
   $(this).parent().removeClass('trigger');
});





// LOAD DRAGGABLE ITEMS

// Draggable Items
$('.drag').TouchBox();

// Show draggable item area and option to delete
$('.face').on("click",".drag", function(){
   $(this).find('.remove').stop(0).show(0).delay(2000).hide(0); 
   $(this).find('.fade').stop().addClass('trigger').delay(2000).queue(function(){
         $(this).removeClass('trigger').dequeue();
   });
});





// LOAD FACE ITEMS

// Load Backgrounds 
$('div[class^="nav-item background"]').click(function(){
   var classname = $(this).attr('class').split(' ')[1];
   $('.background img').attr('src', '/face/img/' + classname + '.jpg');
});


// Load Heads
$('div[class^="nav-item head"]').click(function(){
   var item1 = '<div class="head"><img src="img/';
   var item2 = '.png"></div>';
   var classname = $(this).attr('class').split(' ')[1];
   $('.face').find('.head').remove();
   $('.face').append( item1 + classname + item2 );
   $('.drag').TouchBox();
});

// Load Heads
$('.nohead').click(function(){
   $('.face').find('.head').remove();
});



// Load Hair
$('div[class^="nav-item hair"]').click(function(){
   var item1 = '<div class="hair drag"><div class="fade"><img src="img/';
   var item2 = '.png"><div class="remove icon-close"></div></div></div>';
   var classname = $(this).attr('class').split(' ')[1];
   $('.face').find('.hair').remove();
   $('.face').append( item1 + classname + item2 );
   $('.drag').TouchBox();
});


// Load Eyes
$('div[class^="nav-item eyes"]').click(function(){
   var item1 = '<div class="eyes drag"><div class="fade"><img src="img/';
   var item2 = '.png"><div class="remove icon-close"></div></div></div>';
   var classname = $(this).attr('class').split(' ')[1];
   $('.face').find('.eyes').remove();
   $('.face').append( item1 + classname + item2 );
   $('.drag').TouchBox();
});


// Load Noses

$('div[class^="nav-item nose"]').click(function(){
   var item1 = '<div class="nose drag"><div class="fade"><img src="img/';
   var item2 = '.png"><div class="remove icon-close"></div></div></div>';
   var classname = $(this).attr('class').split(' ')[1];
   $('.face').find('.nose').remove();
   $('.face').append( item1 + classname + item2 );
   $('.drag').TouchBox();
});


// Load Mouths
$('div[class^="nav-item mouth"]').click(function(){
   var item1 = '<div class="mouth drag"><div class="fade"><img src="img/';
   var item2 = '.png"><div class="remove icon-close"></div></div></div>';
   var classname = $(this).attr('class').split(' ')[1];
   $('.face').find('.mouth').remove();
   $('.face').append( item1 + classname + item2 );
   $('.drag').TouchBox();
});


// Load Assessories
$('div[class^="nav-item ass"]').click(function(){
   var item1 = '<div class="ass drag"><div class="fade"><img src="img/';
   var item2 = '.png"><div class="remove icon-close"></div></div></div>';
   var classname = $(this).attr('class').split(' ')[1];
   $('.face').find('.ass').remove();
   $('.face').append( item1 + classname + item2 );
   $('.drag').TouchBox();
});

// Remove Draggable Item
$('.face').on("click",".remove",function(){
   $(this).closest('.drag').remove();
});






// SAVE

// Save tutorial Step 1 is preloaded

// Save Tutorial Step 2
$('.save-tutorial').click(function(){
   $('.saved-msg').html(
                '<b>Right Click</b> or <b>Tap&Hold</b><br />'+
                'on the thumbnails below to download image.<br /><br />'+
                '<span class="saved-msg-close">Got it!</span>'
   );
   $(this).removeClass('save-tutorial');
});

// Open Save Panel (Left Side)
$('.saved-trigger').click(function(){
   $('.saved').toggleClass('trigger');
});

// Close Message
$('body').on('click','.saved-msg-close', function(){
   $('.saved-msg').slideToggle().remove();
});

// Create Thumbnail
$('.save').on('click', function(e){
   e.preventDefault();
   function convertCanvasToImage(canvas) {
      var image = new Image();
      image.src = canvas.toDataURL("image/png");
      return image;
   }
   html2canvas($('.face'), {
      onrendered: function(canvas){
      $('.saved-thumbs').prepend(convertCanvasToImage(canvas));
      }
   });
});





// HTML5 Local Storage

// Load Stored Data
if (localStorage.length !== 0) {
   // Load Data
   $('.face').html(localStorage.getItem('face'));
   // Reset App
   $('.nav').removeClass('trigger');
   $('.opening').addClass('trigger');
   $('.category').removeClass('trigger');
   $('.saved-trigger').removeClass('hidden');
   $('.saved-msg').remove();
   $('.save-tutorial').removeClass('save-tutorial');
   $('.drag').TouchBox();
} else {
    $('.face').html( 
           '<div class="background"><img src="/face/img/background1a.jpg" class="background-img"></div>'+
           '<div class="head"><img src="img/head1.png"></div>'
    );
}



// Auto Save Data
function saveData(){
    var saveface = $('.face').html();
    localStorage.setItem('face', saveface);
}
// Auto Save Timer     Every 5 Second(s)
window.setInterval(saveData, 5 * 1000);


// Remove Local Storage
$(document).on('click','.remove-storage', function(){
    $('.face').html(localStorage.removeItem('face'));
    $('.face').html(
           '<div class="background"><img src="/face/img/background1a.jpg" class="background-img"></div>'+
           '<div class="head"><img src="img/head1.png"></div>'
    );
});


// Remove Storage Check
$(document).on('click','.reset-check', function(){
    $('body').append(
    '<div class="popup">'+
           '<div class="popup-content">'+
             'Are you Sure?<br />'+
             '<div class="button closepopup">Cancel</div> <div class="button remove-storage">Yes</div>'+
           '</div>'+
           '<div class="popup-fade"></div>'+
      '</div>'
    );
});



//close popup
 $(document).on('click','.popup div', function(){
    $('.popup').remove();
});




    
// User Upload Backup
   
function readURL(input) {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        $(reader).load(function(e) { 
          $('.background-img').attr('src', e.target.result); 
        });
        reader.readAsDataURL(this.files[0]);
    }
}
	
$('#upload-bg').change(readURL);


//END 
});
