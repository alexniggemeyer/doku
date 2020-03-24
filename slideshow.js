var pos = 0;
var ItemCount = 0;
var itemsWidth = 0;



$(document).ready(function () {





    var dir = "IMG/Wireframe_Slideshow/"
    var ImgLinks = new Array();
    
    


    $.get( dir, function (data){                        //looking through folder
        $(data).find('a').each(function(){
            if(checkImg($(this).attr('href'))){
               ImgLinks.push($(this).attr('href'));   
            }
        });

        $.each(ImgLinks, function(i){                   //adding Path to Img-Tag
            $('<li class="item"></li>').html("<img class='slider_img' src='" + ImgLinks[i] + "'>").appendTo('.items');
        });

        ItemCount = $('.item').length;
        
    }); 
    
    function checkImg(file){                                            // looking for IMG
        var extension = file.substr( (file.lastIndexOf('.') +1) );
        switch(extension) {
            case 'jpg':
            case 'png':
                return true;
                break;
            default:
                return false;
        }

    };
});


// Moving IMGs

function setTransform() {
    itemsWidth = $('.items').width();
    $('.items').attr('style', 'transform: translate(' + (-pos * itemsWidth) + 'px)');
    console.log(itemsWidth);
  }

function next(){
    pos = Math.min(pos + 1, ItemCount - 1);
    setTransform();
    console.log(pos);

}

function prev(){
    pos = Math.max(pos - 1, 0);
    setTransform();
    console.log(pos);

}

window.addEventListener('resize', setTransform);

