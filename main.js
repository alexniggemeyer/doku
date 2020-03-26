$(document).ready(function(){

})
$(window).scroll(function(){
  if ($(window).scrollTop() >= $('.cover').height()) {
      $('.header').addClass('fixed-header');
  }
  else {
      $('.header').removeClass('fixed-header');
  }
});


function openNav(){
    document.getElementById("sidebar").style.width = "25%";
};
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
  };


function left() {
    document.getElementById('ablauf').scrollLeft += 540;
  };
function right() {
      document.getElementById('ablauf').scrollLeft -= 540;
  };

  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function readmore(no) {
    console.log(no);

    var moreText = document.querySelectorAll(".more");
    var btnText = document.querySelectorAll(".ReadMore");
  
    if (moreText[no].style.display === "inline") {
      btnText[no].innerHTML = "Mehr lesen";
      moreText[no].style.display = "none";
    } else {
      btnText[no].innerHTML = "Weniger lesen";
      moreText[no].style.display = "inline";
    }
  }

  
  $(document).ready(function() {
    
    var heading = $('.heading');
    var scrollLink = $('.scroll');

    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000 );
        
    });



    
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        
        scrollLink.each(function() {
          
          var sectionOffset = $(this.hash).offset().top - 60;
          
          if ( sectionOffset <= scrollbarLocation ) {
            $('.top').text($(this.hash).attr('id'));
            $('.subsection').text('');
          }

          $(this.hash).children('h2').each(function(){

            if( $(this).offset().top <= scrollbarLocation){
                $(".subsection").text( " > " + $(this).text());
            }
              
          })
          
          
        })
    })

})


