//https://openclassrooms.com/courses/dynamisez-vos-sites-web-avec-javascript/manipuler-le-code-html-partie-2-2



//Q0: Au chargement de la page, associe la fonction déplacer à l'attribut onclick de chaque image
function ajouterOnClick() {
  for (i=0; i<5; i++) {
   document.images[i].onclick=deplacer;
  }
}

function deplacer() {
  // On repère l'image depuis laquelle la fonction clic s'est deplace
  var elementImg = this;
  var noeudTexte;
  // On récupère les deux parties à traiter
  var elementSrc = document.getElementById("source");
  var elementDest = document.getElementById("destination");
  var nbIMG = 0; //nb d'images en destination

  //selon la position de l'image dans la page : 
  if(elementImg.parentNode.id=="source"){ // si elle est dans source alors : 
    try{
  //Q1: ajouter elementImg à elementDest
    elementDest.appendChild(elementImg);

  //Q2: créer un nouvel objet de type balise span  
    var sp = document.createElement("span");

  //Q3: creer un nouvel objet de type texte pour indiquer
  // le titre de l'album ("Album : ...")
    var title = document.createTextNode(elementImg.alt);


  //Q4: ajouter ce texte à l'objet span
    sp.appendChild(title);

  //Q5: ajouter le span juste avant elementIMG
    elementDest.insertBefore(sp,elementImg);


    }catch(excep){
	//afficher un message d'erreur 
    alert("Oups ! Erreur lors de la sélection de l'article.");
    }
  }else{ // sinon, elle est dans destination : 
  //Q6: deplacer elementImg vers elementSrc
    avt = elementImg.previousSibling;
    elementSrc.appendChild(elementImg);
    elementDest.removeChild(avt);

  }
  //Q7 mettre la valeur du panier à jour
     //compter le nombre d'images de la destination destination
     //mettre à jour le panier

     nbIMG = (((document.getElementById('destination').childNodes.length)-3)/2);
     var p = document.getElementById('panier');
     p.innerHTML = ((nbIMG*7.50) + (" €"));

}


function style1 () {
  var des = document.getElementById('source');
  des.style.backgroundColor = '#003300';
  des.style.borderColor = 'red';
  des.style.color = 'black';

}

function style2 () {
  var des = document.getElementById('source');
  des.style.backgroundColor = '#000000';
  des.style.borderColor = '#D2CB44';
  des.style.color = '#5E1FAD';

}

function style3 () {
  var des = document.getElementById('source');
  des.style.backgroundColor = '#AA3090';
  des.style.borderColor = '#30AA9E';
  des.style.color = '#2B0F0D';

}


function rouge () {
  var des = document.getElementById('destination');
  des.style.backgroundColor = '#AC1721';
  des.style.borderColor = '#003300';
  des.style.color = 'black';

}

function bleu () {
  var des = document.getElementById('destination');
  des.style.backgroundColor = '#649FE6';
  des.style.borderColor = '#38004B';
  des.style.color = '#820065';

}

function vert () {
  var des = document.getElementById('destination');
  des.style.backgroundColor = '#3DE455';
  des.style.borderColor = '#E4B63D';
  des.style.color = '#E43D48';

}
