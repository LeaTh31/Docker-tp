//Note : \r\n compte pour UN SEUL caractère : un retour à la ligne
function ad(x,y) {
	x=parseFloat(x);
	y=parseFloat(y);
	var res=(x+y);
	document.form1.tex.value+=("=\r\n"+res+" "+"\r\n\r\n");
	return(res);
}

function sous(x,y) {
	x=parseFloat(x);
	y=parseFloat(y);
	var res=(x-y);
	document.form1.tex.value+=("=\r\n"+res+" "+"\r\n\r\n");
	return(res);
}

function mult(x,y) {
	x=parseFloat(x);
	y=parseFloat(y);
	var res=(x*y);
	document.form1.tex.value+=("=\r\n"+res+" "+"\r\n\r\n");
	return(res);
}

function divi(x,y) {
	x=parseFloat(x);
	y=parseFloat(y);
	var res=(x/y);
	document.form1.tex.value+=("=\r\n"+res+" "+"\r\n\r\n");
	return(res);
}

function puissance(x,y) {
	x=parseFloat(x);
	y=parseFloat(y);
	var res=1;
	var i=1;
	while (i<=y) {
		res=res*x;
		i++;
	}
	document.form1.tex.value+=("=\r\n"+res+" "+"\r\n\r\n");
	return(res);
}

//ch:chaine de caractères
//o:opérateur
function calc(ch) {
	for (i=0; i<(ch.length); i++) {
		if ((ch.charAt(i)!="0") && (ch.charAt(i)!="1") && (ch.charAt(i)!="2") && 
			(ch.charAt(i)!="3") && (ch.charAt(i)!="4") && (ch.charAt(i)!="5") && 
			(ch.charAt(i)!="6") && (ch.charAt(i)!="7") && (ch.charAt(i)!="8") && 
			(ch.charAt(i)!="9") && (ch.charAt(i)!=".") && (ch.charAt(i)!="(") && 
			(ch.charAt(i)!=")")) {
			var o=ch.charAt(i);
			switch (o) {
				case "+" : ad((ch.substring(0,i)),(ch.substring((i+1),(ch.length))));
				break;
				case "-" : sous((ch.substring(0,i)),(ch.substring((i+1),(ch.length))));
				break;
				case "x" : mult((ch.substring(0,i)),(ch.substring((i+1),(ch.length))));
				break;
				case "/" : divi((ch.substring(0,i)),(ch.substring((i+1),(ch.length))));
				break;
				case "^" : puissance((ch.substring(0,i)),(ch.substring((i+1),(ch.length))));
				break;

				//faire cas sin, cos, tan et pi



				default : alert("Erreur");
			}
		}
	}
}



//Exécute c qu'il y a dans tex
function egal() {
	var res = document.form1.tex.value;
	if (res.indexOf(" ")!=(-1)) {
		var i=(res.lastIndexOf(" "));
		var newres=(res.substr((i+3),((res.length)-i)));
		calc(newres);
	} else {
		calc(res);
	}
}



//c:chiffre ou caractère à écrire
function ecrire(c) {
	document.form1.tex.value+=c;
}

//Supprime tout les caractères
function reset() {
	document.form1.tex.value="";
}

//supprime le dernier caractère
function supp1() {
	var res = document.form1.tex.value;
	document.form1.tex.value=res.substring(0,(res.length-1));
}

//Cache la calculatrice scientifique
function suppScient() {
	var tabScient = document.getElementById("calcScienti");
	tabScient.style.display="none";
	var but = document.getElementById("bouton1");
	but.value="Changement en calculatrice scientifique";
}

//Dévoile la calculatrice scientifique
function addScient() {
	var tabScient = document.getElementById("calcScienti");
	tabScient.style.display="block";
	var but = document.getElementById("bouton1");
	but.value="Changement en calculatrice simple";
}

//Cache ou dévoile la calculatrice Scientifique selon si elle est déjà là ou pas
function science() {
	var titre = document.getElementById("calc");
	if (titre.textContent=="Calculatrice") {
		titre.innerHTML = "Calculatrice Scientifique";
		addScient();
	} else {
		if (titre.textContent=="Calculatrice Scientifique") {
			titre.innerHTML = "Calculatrice";
			suppScient();
		}
	}
}