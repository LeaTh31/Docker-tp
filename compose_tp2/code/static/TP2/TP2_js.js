var fibonacci = function(n) {
	if (n <= 2) {
		return 1;
	} else {
		return this.fibonacci(n-1) + this.fibonacci(n-2);
	}
};

var fibo = function() {
	var nb = window.prompt('Quel rang de la suite de Fibonacci voulez-vous ?','1, 2, 3 ...');
	var result = fibonacci(parseInt(nb));
	var date = new Date;
	var res = result.toString();
	document.write('A '+date.getHours()+' heures '+date.getMinutes()+
		', le '+nb.italics()+'ieme'.sup()+
		' terme de la suite de Fibonnacci est '+res.bold().big().fontsize(20)+' !');
};

var creerTab = function() {
	var tab = Array(10);
	for (var i = 0; i < tab.length; i++) {
		tab[i]=parseInt(Math.floor((99-0)*Math.random())+0);
	}
	return tab;
};

var pluspetitque = function (a,b) {
	if (a<b) {
		return -1
	} else {
		return 1
	}
};

var trierTab = function(tab) {
	tab = tab.sort(pluspetitque);
	return tab;
};

var afficheTab = function(tab) {
	for (var i = 0; i < tab.length; i++) {
		document.write(tab[i]);
		if (i<((tab.length)-1)) {
			document.write(" - ");
		}
	}
};

var afficheImageM = function() {
	document.getElementById('image').src='JS_2012/maite.jpg';
};

var afficheImageA = function() {
	document.getElementById('image').src='JS_2012/amber.jpg';
};

var afficheInfoImg = function(img) {
	window.alert('url=' + img.src + '\n Image Name : ' + img.name + '\n Image Width : ' + img.width + '\n Image Height : ' + img.height);
};