boolCache = true;

// ex 1
function liens(){
	var liens = document.anchors; //tableaux de balises a
	var i,str;
	str="Ensemble des valeurs name des balises <a>\n";
	for (i = 0; i < liens.length; i++){ //pour chaque balise
		if(liens[i].name != "") //si le nom est defini
			str += liens[i].name + "\n";
	}
	alert(str);
}
// ex 2
function menu(){
	var menu = document.getElementById("menu-fixe");
	alert("Infos de la balise dont l'id est \"menu-fixe\" :\nnom : " + menu.nodeName + "\n id : " +  menu.id + "\n type : " + menu.nodeType + "\n valeur : " + menu.value);
}
//ex 3
function chgStyle(){
	alert("Attention!!, je vais changer les cadres en vert et la police en gras, italique et de taille 8");
	var par = document.getElementsByTagName("div"); // recuperation des objets div
	/*
	 * on aurait pu utiliser : 
	 * par = document.getElementsByClassName("p1")
	 * puis par = document.getElementsByClassName("p2")
	*/
	var i,str,menu;
	str="";
	for (i = 0; i < par.length; i++){
		if(par[i].className != "") {//si la balise class est definie
			par[i].style.backgroundColor = "green";
			par[i].style.fontWeight = "bold";
			par[i].style.fontStyle = "italic";
			par[i].style.fontSize = "8pt";
		}
	}
	
	alert("Et maintenant, le menu ne sera plus fixe...");
	menu = document.getElementById("menu-fixe");
	menu.style.position="relative";
	
	alert("Enfin, on enleve les puces!");
	document.styleSheets[0].deleteRule(6);	
}


function cacheMenu(){
	if(boolCache){
		document.getElementById("cacheMenu").style.display = "none";
		boolCache = false;
	}
	else{
		document.getElementById("cacheMenu").style.display = "inline";
		boolCache = true;
	}
}

//ex 4
function inner(){
	var lien = document.getElementById("inner"); // recuperation des objets div
	lien.innerHTML = "innerHTML, ca marche... et bien!!";
}
function inner2(){
	var lien = document.getElementById("inner2"); // recuperation des objets div
	lien.innerHTML = "So sexy ! <img id=\"maite\" src=\"maite.jpg\" alt=\"maite!\" />";
}


// ex 5
function insert(){
	var divInsert = document.getElementById("insert");
	var image = document.createElement("img");
	image.src="maite.jpg";
	image.alt="maite";
	divInsert.appendChild(image);
}

function suppr(){
	var divInsert = document.getElementById("insert");
	if(divInsert.childNodes.length>0)
		divInsert.removeChild(divInsert.firstChild);
}

