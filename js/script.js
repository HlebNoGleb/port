$('.c-hero-flex__item.elitehouse').click(function(){
	$('.site__popup').removeClass("henes teacher sba church");
	$('.site__popup').addClass("elitehouse");
	
		
});
$('.c-hero-flex__item.henes').click(function(){
	$('.site__popup').removeClass("elitehouse teacher sba church");
	$('.site__popup').addClass("henes");
});
$('.c-hero-flex__item.teacher').click(function(){
	$('.site__popup').removeClass("henes elitehouse sba church");
	$('.site__popup').addClass("teacher ");

});
$('.c-hero-flex__item.sba').click(function(){
	$('.site__popup').removeClass("henes teacher elitehouse church");
	$('.site__popup').addClass("sba");
});
$('.c-hero-flex__item.church').click(function(){
	$('.site__popup').removeClass("henes teacher sba elitehouse");
	$('.site__popup').addClass("church");
});

