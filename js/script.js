function gradient() {
	if ($('.site__popup').hasClass("gradient")) {
				$('.site__popup').removeClass("gradient");
				$('.site__popup').addClass("gradient1");
	} else {
				$('.site__popup').removeClass("gradient1");
				$('.site__popup').addClass("gradient");
	
	}
}
$('.c-hero-flex__item.elitehouse').click(function(){
	$('.site__popup').removeClass("henes teacher sba church");
	$('.site__popup').addClass("elitehouse");
	gradient();
		
});
$('.c-hero-flex__item.henes').click(function(){
	$('.site__popup').removeClass("elitehouse teacher sba church");
	$('.site__popup').addClass("henes");
	gradient();
});
$('.c-hero-flex__item.teacher').click(function(){
	$('.site__popup').removeClass("henes elitehouse sba church");
	$('.site__popup').addClass("teacher ");
	gradient();

});
$('.c-hero-flex__item.sba').click(function(){
	$('.site__popup').removeClass("henes teacher elitehouse church");
	$('.site__popup').addClass("sba");
	gradient();
});
$('.c-hero-flex__item.church').click(function(){
	$('.site__popup').removeClass("henes teacher sba elitehouse");
	$('.site__popup').addClass("church");
	gradient();
});

