//  mode strict - slide 51
"use strict";

//  déclaration d'une fonction avec paramètres - slide 45
function doInsertRowTable(num , nom, prenom, points) {

  //  créer un élément HTML (createElement) - slide 104 ; const - slide 51
  const row = document.createElement("tr");
  //  retrouver un élément par son id (getElementById) - slides 61-64
  const table = document.getElementById("table");
  //  ajouter un élément enfant (appendChild) - slide 103
  table.appendChild(row);
  //  modifier un attribut (setAttribute) - slide 107
  row.setAttribute("class","row");

  //  créer un élément HTML (createElement) - slide 104
  const col1 = document.createElement("td");
  //  modifier un attribut (setAttribute) - slide 107
  col1.setAttribute("class","col_number");
  //  ajouter un élément enfant (appendChild) - slide 103
  row.appendChild(col1);

  //  créer un élément HTML (createElement) - slide 104
  const col2 = document.createElement("td");
  //  modifier un attribut (setAttribute) - slide 107
  col2.setAttribute("class","col_text");
  //  ajouter un élément enfant (appendChild) - slide 103
  row.appendChild(col2);

  //  créer un élément HTML (createElement) - slide 104
  const col3 = document.createElement("td");
  //  modifier un attribut (setAttribute) - slide 107
  col3.setAttribute("class","col_text");
  //  ajouter un élément enfant (appendChild) - slide 103
  row.appendChild(col3);

  //  créer un élément HTML (createElement) - slide 104
  const col4 = document.createElement("td");
  //  modifier un attribut (setAttribute) - slide 107
  col4.setAttribute("class","col_number");
  //  ajouter un élément enfant (appendChild) - slide 103
  row.appendChild(col4);

  //  créer un élément HTML (createElement) - slide 104
  const col5 = document.createElement("td");
  //  modifier un attribut (setAttribute) - slide 107
  col5.setAttribute("class","col_chkbox");
  //  ajouter un élément enfant (appendChild) - slide 103
  row.appendChild(col5);

  //  créer un élément HTML (createElement) - slide 104
  const checkbox = document.createElement("input"); 
  //  modifier un attribut (setAttribute) - slide 107
  checkbox.setAttribute("type", "checkbox");
  //  ajouter un élément enfant (appendChild) - slide 103
  col5.appendChild(checkbox);

  //  modifier le contenu texte d'un élément (innerText) - slide 91
  col1.innerText = num;                                 
  col2.innerText = nom;
  col3.innerText = prenom;
  col4.innerText = points;

}

//  variable globale déclarée avec let - slides 50-51
let lignes = 0;
//  tableau d'objets (+ let) - slides 39-40 et 51
let persons = [
 { nom: "nom-1", prenom: "prenom-1", points: 5 },
 { nom: "nom-2", prenom: "prenom-2", points: 10 },
 { nom: "nom-3", prenom: "prenom-3", points: 15 }
];
//  appel d'une fonction - slide 45
init();

//  déclaration d'une fonction - slide 45
function init () {
  //  boucle for...of pour parcourir un tableau - slide 44
  for (const p of persons) {
    //  accès aux propriétés d'un objet (p.nom) - slide 39
    doInsert(p.nom, p.prenom, p.points);
  }
}

//  déclaration d'une fonction avec paramètres - slide 45
function doInsert( nom, prenom, points) {
  //  opérateur d'incrémentation (++) - slide 41
  lignes++;
  //  constante (const) - slide 51
  const num = lignes;
  doInsertRowTable( num, nom, prenom, points);
}

//  déclaration d'une fonction - slide 45
function consoleTableau() {
    //  affichage dans la console (console.log) - slide 33
    console.log(persons);
}

