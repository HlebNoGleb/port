document.body.onload = function(){
	function randomInteger(min, max) {
	  var rand = min + Math.random() * (max - min)
	  rand = Math.round(rand);
	  return rand;
	}
/*
	setTimeout(function(){
		var preloader = document.getElementById('pade-preloader');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
		}
	}, 1000);
*/	
	setTimeout(function getRandomArbitrary() {
	 	console.log(randomInteger(100,2000));
	 	// .css("filter", "drop-shadow(0 0 "randomInteger(100,2000)" #edde12)");
	 	$(".my__photo img").css('box-shadow', '10px 10px 10px red'); 
	 	setInterval( getRandomArbitrary,randomInteger(1000,2000) 	);
	}),randomInteger(1000,20000) ;
	// setInterval( getRandomArbitrary, randomInteger(100,2000));
	// setInterval( getRandomArbitrary,randomInteger(100,2000) 	);
	// setTimeout(function run() {  func(i);  setTimeout(run, 100); }, 100);
}









