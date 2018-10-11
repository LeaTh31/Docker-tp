var remplirTab = function() {
	var tab = new Array();
	for (var i=0; i<3; i++) {
		tab[i] = new Array();
	}
	for (i=0; i<3; i++) {
		for (j=0; j<3; j++) {
			tab[i][j]="_";
		}
	}
	return tab;
}; 


var tab=remplirTab();

var p = false; //De base, le joueur joue avec l'IA

var b = 0;


var rempli = function (tab,b) {
	for (i=0; i<3; i++) {
		for (j=0; j<3; j++) {
			if (tab[i][j]=="_") {
				(b++); //Compte le nombres de cases vide
			}
		}
	}
	if (b!=0) {
		return false; //Il y a encore des cases non vide
	} else {
		return true; //Tout le tableau est rempli
	}
};


var gagne = function(tab) {
	if ((tab[0][0]==tab[0][1]) & (tab[0][0]==tab[0][2]) & (tab[0][1]==tab[0][2]) & (tab[0][0]!="_"))		{
		return true;
	} else {
		if ((tab[1][0]==tab[1][1]) & (tab[1][0]==tab[1][2]) & (tab[1][1]==tab[1][2]) & (tab[1][0]!="_"))		{
			return true;
		} else {
			if ((tab[2][0]==tab[2][1]) & (tab[2][0]==tab[2][2]) & (tab[2][1]==tab[2][2]) & (tab[2][0]!="_"))		{
				return true;
			} else {
				if ((tab[0][0]==tab[1][0]) & (tab[0][0]==tab[2][0]) & (tab[1][0]==tab[2][0]) & (tab[0][0]!="_"))		{
					return true;
				} else {
					if ((tab[0][1]==tab[1][1]) & (tab[0][1]==tab[2][1]) & (tab[1][1]==tab[2][1]) & (tab[0][1]!="_"))		{
						return true;
					} else {
						if ((tab[0][2]==tab[1][2]) & (tab[0][2]==tab[2][2]) & (tab[1][2]==tab[2][2]) & (tab[0][2]!="_"))		{
							return true;
						} else {
							if ((tab[0][0]==tab[1][1]) & (tab[0][0]==tab[2][2]) & (tab[1][1]==tab[2][2]) & (tab[0][0]!="_"))		{
								return true;
							} else {
								if ((tab[0][2]==tab[1][1]) & (tab[0][2]==tab[2][0]) & (tab[1][1]==tab[2][0]) & (tab[0][2]!="_"))		{
									return true;
								} else {
									return false;
								}
							}
						}
					}
				}
			}
		}
	}

};



var nbclic=0;




var jouer = function(nbclic,img,i,j,tab) {
	if (nbclic%2!=0) { //Si nbclic est impair : 1er joueur
		img.src='JS_2012/cartes/Ps3_croix.png';
		img.name="croix";
		tab[i][j]="X";
		if (gagne(tab)) {
			window.alert("Bravo ! Le joueur qui joue les " + img.name + " a gagné ! Si vous voulez rejouer, cliquez sur le bouton \"rejouer\".");
		} else {
			if (rempli(tab,0)) {
				window.alert("Egalité ! Si vous voulez rejouer, cliquez sur le bouton \"rejouer\".");
			}
		}
	} else { //Si nbclic est pair : 2eme joueur
		img.src='JS_2012/cartes/Ps3_rond.png';
		img.name="ronds";
		tab[i][j]="O";
		if (gagne(tab)) {
			window.alert("Bravo ! Le joueur qui joue les " + img.name + " a gagné ! Si vous voulez rejouer, cliquez sur le bouton \"rejouer\".");
		} else {
			if (rempli(tab,0)) {
				window.alert("Egalité ! Si vous voulez rejouer, cliquez sur le bouton \"rejouer\".");
			}
		}
	}
	nbclic++;
};


var tourJoueur = function(img,i,j,tab) {
	img.src='JS_2012/cartes/Ps3_croix.png';
	img.name="croix";
	tab[i][j]="X";
	if (gagne(tab)) {
		window.alert("Bravo ! Le joueur qui joue les " + img.name + " a gagné ! Si vous voulez rejouer, cliquez sur le bouton \"rejouer\".");
	}
};





var assos = function(i,j) {
	var s = 0;
	var test = i+","+j;
	switch (test) {
		case "0,0" : (s=0);
		break;
		case "0,1" : (s=1);
		break;
		case "0,2" : (s=2);
		break;
		case "1,0" : (s=3);
		break;
		case "1,1" : (s=4);
		break;
		case "1,2" : (s=5);
		break;
		case "2,0" : (s=6);
		break;
		case "2,1" : (s=7);
		break;
		case "2,2" : (s=8);
		break;
		default : (s=0);
	};
	return s;
};


/*
var assos = function(i,j) {
	var s = 0;
	if ((i==0) & (j==0)) {
		s=0;
	} else {
		if ((i==0) & (j==1)) {
			s=1;
		} else {
			if ((i==0) & (j==2)) {
				s=2;
			} else {
				if ((i==1) & (j==0)) {
					s=3;
				} else {
					if ((i==1) & (j==1)) {
						s=4;
					} else {
						if ((i==1) & (j==2)) {
							s=5;
						} else {
							if ((i==2) & (j==0)) {
								s=6;
							} else {
								if ((i==2) & (j==1)) {
									s=7;
								} else {
									if ((i==2) & (j==2)) {
										s=8;
									}
								}
								
							}
							
						}
						
					}
					
				}
				
			}
			
		}
		
	}
	return s;
};
*/


var ia = function(tab) {
	var str = "_";
		if ((tab[0][0]==tab[0][1]) & (tab[0][0]!="_") & (tab[0][2]=="_")) {
			str="0 2";
		} else {
			if ((tab[0][2]==tab[0][1]) & (tab[0][2]!="_") & (tab[0][0]=="_")) {
				str="0 0";
			} else {
				if ((tab[1][0]==tab[1][1]) & (tab[1][0]!="_") & (tab[1][2]=="_")) {
					str="1 2";
				} else {
					if ((tab[1][2]==tab[1][1]) & (tab[1][2]!="_") & (tab[1][0]=="_")) {
						str="1 0";
					} else {
						if ((tab[2][0]==tab[2][1]) & (tab[2][0]!="_") & (tab[2][2]=="_")) {
							str="2 2";
						} else {
							if ((tab[2][2]==tab[2][1]) & (tab[2][2]!="_") & (tab[2][0]=="_")) {
								str="2 0";
							} else {
								if ((tab[0][0]==tab[1][0]) & (tab[0][0]!="_") & (tab[2][0]=="_")) {
									str="2 0";
								} else {
									if ((tab[2][0]==tab[1][0]) & (tab[2][0]!="_") & (tab[0][0]=="_")) {
										str="0 0";
									} else {
										if ((tab[0][1]==tab[1][1]) & (tab[0][1]!="_") & (tab[2][1]=="_")) {
											str="2 1";
										} else {
											if ((tab[2][1]==tab[1][1]) & (tab[2][1]!="_") & (tab[0][1]=="_")) {
												str="0 1";
											} else {
												if ((tab[0][2]==tab[1][2]) & (tab[0][2]!="_") & (tab[2][2]=="_")) {
													str="2 2";
												} else {
													if ((tab[2][2]==tab[1][2]) & (tab[2][2]!="_") & (tab[0][2]=="_")) {
														str="0 2";
													} else {
														if ((tab[0][0]==tab[1][1]) & (tab[0][0]!="_") & (tab[2][2]=="_")) {
															str="2 2";
														} else {
															if ((tab[2][2]==tab[1][1]) & (tab[2][2]!="_") & (tab[0][0]=="_")) {
																str="0 0";
															} else {
																if ((tab[0][2]==tab[1][1]) & (tab[0][2]!="_") & (tab[2][0]=="_")) {
																	str="2 0";
																} else {
																	if ((tab[2][0]==tab[1][1]) & (tab[2][0]!="_") & (tab[0][2]=="_")) {
																		str="0 2";
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	return str;
};


var tourOrdi = function (tab) {
	var l = (ia(tab));
	if (l!="_") {
		var i = (parseInt(l.substring(0,1)));
		var j = (parseInt(l.substring(2,3)));
	} else {
		var i = (Math.floor(Math.random() * (3)));
		var j = (Math.floor(Math.random() * (3)));
	}
	var s = (assos(i,j));
	var img = (document.images[s]);
	if (tab[i][j]!="_") {
		if (rempli(tab,0)) {
			window.alert("Egalité ! Si vous voulez rejouer, cliquez sur le bouton \"rejouer\".");
		} else {
			tourOrdi(tab);
		}
	} else {
		img.src=('JS_2012/cartes/Ps3_rond.png');
		img.name=("ronds");
		tab[i][j]=("O");
	}
	if (gagne(tab)) {
		window.alert("L'ordi a gagné ! Si vous voulez rejouer, cliquez sur le bouton \"rejouer\".");
	}
};

var verif = function(img,i,j,tab,p) {
//fonction qui rentre dans la boucle
if ((gagne(tab)) | (rempli(tab,0))) {
	window.alert("Le jeu est finit ! Si vous voulez rejouez, cliquez sur \"rejouer\".");
} else {
	if (tab[i][j]!="_") {
		window.alert("Ce déplacement n'est pas valide !");		
	} else {
		if (p) {
			jouer((nbclic++),img,i,j,tab);	
		} else {
			tourJoueur(img,i,j,tab);
				if (!gagne(tab)) { 
					tourOrdi (tab);
				}
			}
		}
	}
};
