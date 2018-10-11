var imgAleatoire = function () {
	var n = Math.floor((Math.random() *5));
	switch(n) {
		case 0 : 
			document.getElementById('image').src='JS_2012/planetes/mars.jpeg';
			break;
		case 1 :
			document.getElementById('image').src='JS_2012/planetes/neptune.jpeg';
			break;
		case 2 : 
			document.getElementById('image').src='JS_2012/planetes/saturne.jpeg';
			break;
		case 3 : 
			document.getElementById('image').src='JS_2012/planetes/terre.jpeg';
			break;
		case 4 :
			document.getElementById('image').src='JS_2012/planetes/uranus.jpeg';
			break;
		default :
			document.getElementById('image').src='JS_2012/planetes/fond0.png';
	};
};

var afficheInfoImg = function(img) {
	window.alert('url=' + img.src + '\n Image Name : ' + img.name + '\n Image Width : ' + img.width + '\n Image Height : ' + img.height);
};