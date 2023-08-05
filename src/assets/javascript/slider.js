$(document).ready(function () {
    var i = 0;
    var slideWidth = 500;
    var maxSlides = $('#slider li').length;
    
    function autoSlide() {
        setInterval(function () {
            $('#gallery').click();
        }, 2000);
    }
    
    autoSlide();
    
    $('#gallery').on('click', function () {
        i++;
        var x = -slideWidth * i;
        
        if (i < maxSlides) {
            $('#slider').animate({ "margin-left": x + "px" });
        } else {
            i = 0;
            x = 0;
            $('#slider').animate({ "margin-left": x + "px" });
        }
    });
});
