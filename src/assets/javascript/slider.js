/*$(document).ready(function () {
    var galW = $('#gallery').width(); 
    var liN = $('#slider li').length; 
    $("#slider").width((galW / 6) * liN);
    function auto()
    {
    	setInterval(function(){$('#gallery').click()},4000);
    }
    auto();
    $('#gallery').click(function(){
        var first = $("#slider li").first();
        var last = $("#slider li").last();
        var defaultMarginLeft = first.css("margin-left");
        first.animate({marginLeft: (-1*first.width())}, 2000, function () {
        first.detach().insertAfter(last).css('marginLeft', defaultMarginLeft);
        });        
    });
    
});
*/
$(document).ready(function(){
	var i = 1;
	function auto()
    {
    	setInterval(function(){$('#gallery').click()},2000);
    }
    auto();
	$('#gallery').on('click',function(){
		var x = -500*i;
		if(x >= -1000){
			$('#slider').animate({"margin-left":+x+"px"});
			i++;
		} else {
			i = 1;
			x = 0;
			$('#slider').animate({"margin-left":+x+"px"});
		}
	});
});