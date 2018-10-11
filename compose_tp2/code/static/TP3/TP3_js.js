var b1 = function () {
	var nom = prompt('Entrez un nom');
	var nbDiv = document.getElementsByTagName("div");
	var d = document.createElement("div");
	d.style.backgroundColor = "grey";
	d.style.borderStyle = "dashed";
	d.style.borderColor = "black";
	d.style.color = "green";	
	d.style.marginTop="10px";

	d.innerHTML += ("<b>Bonjour</b> <i>" + nom + "</i><b> !" + 
		"<br />Vous êtes élève en CPI2 à l'EISTI. " + 
		"<br /> Votre navigateur est : </b><i>" + navigator.appCodeName + ". " +
		"</i><br /> <b>Votre système d'exploitation est : </b><i>" + navigator.platform + "</i><b>. </b><br/>");

	nbDiv[0].appendChild(d);

};

//Supprime le dernier noeud
var b2 = function () {
	var nbDiv=document.getElementsByTagName("div");
	var last = nbDiv[0].lastChild;
	nbDiv[0].removeChild(last);
};

var b3 = function () {
	var nbDiv=document.getElementsByTagName("div");	
	while (nbDiv[0].hasChildNodes()==true) {
		b2();
	}
};