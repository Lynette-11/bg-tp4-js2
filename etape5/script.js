//  mode strict - slide 51
"use strict";

//  déclaration d'une fonction avec paramètres - slide 45
function doInsertRowTable(num, nom, prenom, points) {
  //  créer un élément HTML (createElement) - slide 104 ; const - slide 51
  const row = document.createElement("tr");
  //  retrouver un élément par son id (getElementById) - slides 61-64
  const table = document.getElementById("table");
  //  ajouter un élément enfant (appendChild) - slide 103
  table.appendChild(row);
  //  modifier un attribut (setAttribute) - slide 107
  row.setAttribute("class", "row");

  //  créer un élément HTML (createElement) - slide 104
  const col1 = document.createElement("td");
  //  modifier un attribut (setAttribute) - slide 107
  col1.setAttribute("class", "col_number");
  //  ajouter un élément enfant (appendChild) - slide 103
  row.appendChild(col1);

  //  créer un élément HTML (createElement) - slide 104
  const col2 = document.createElement("td");
  //  modifier un attribut (setAttribute) - slide 107
  col2.setAttribute("class", "col_text");
  //  ajouter un élément enfant (appendChild) - slide 103
  row.appendChild(col2);

  //  créer un élément HTML (createElement) - slide 104
  const col3 = document.createElement("td");
  //  modifier un attribut (setAttribute) - slide 107
  col3.setAttribute("class", "col_text");
  //  ajouter un élément enfant (appendChild) - slide 103
  row.appendChild(col3);

  //  créer un élément HTML (createElement) - slide 104
  const col4 = document.createElement("td");
  //  modifier un attribut (setAttribute) - slide 107
  col4.setAttribute("class", "col_number");
  //  ajouter un élément enfant (appendChild) - slide 103
  row.appendChild(col4);

  //  créer un élément HTML (createElement) - slide 104
  const col5 = document.createElement("td");
  //  modifier un attribut (setAttribute) - slide 107
  col5.setAttribute("class", "col_chkbox");
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

//  variables globales déclarées avec let - slides 50-51
let total_points = 0;
let lignes = 0;
//  tableau d'objets (+ let) - slides 39-40 et 51
let persons = [
  { nom: "nom-1", prenom: "prenom-1", points: 5 },
  { nom: "nom-2", prenom: "prenom-2", points: 10 },
  { nom: "nom-3", prenom: "prenom-3", points: 15 },
];
//  appel d'une fonction - slide 45
init();

//  déclaration d'une fonction - slide 45
function init() {
  //  boucle for...of pour parcourir un tableau - slide 44
  for (const p of persons) {
    //  accès aux propriétés d'un objet (p.nom) - slide 39
    doInsert(p.nom, p.prenom, p.points);
  }
}

//  déclaration d'une fonction avec paramètres - slide 45
function doInsert(nom, prenom, points) {
  //  opérateur d'incrémentation (++) - slide 41
  lignes++;
  //  constante (const) - slide 51
  const num = lignes;
  //  opérateur combiné (+=) - slide 41
  total_points += points;
  doInsertRowTable(num, nom, prenom, points);
  //  appel d'une fonction - slide 45
  update_summary();
}

//  déclaration d'une fonction - slide 45
function update_summary() {
  //  getElementById (slides 61-64) + innerText (slide 91) + concaténation avec + (slide 41)
  document.getElementById("p1").innerText = lignes + " ligne(s)";
  document.getElementById("p3").innerText = "Total point(s)= " + total_points;
}

//  déclaration d'une fonction - slide 45
function consoleTableau() {
  //  affichage dans la console (console.log) - slide 33
  console.log(persons);
}

//  déclaration d'une fonction appelée par un événement onclick - slides 45 et 127-133
function doNewData() {
  //  retrouver un élément par son id (getElementById) - slides 61-64
  const elt_nom = document.getElementById("form_nom");
  const elt_prenom = document.getElementById("form_prenom");
  const elt_points = document.getElementById("form_points");

  //  lire l'attribut value d'un élément directement par son nom - slide 93
  const nom = elt_nom.value.trim();
  const prenom = elt_prenom.value.trim();
  //  conversion texte -> entier (parseInt) - énoncé du TP, hors slides du cours
  const points = parseInt(elt_points.value);

  //  condition if...else - slide 42
  //  opérateurs logiques (||) et de comparaison (==) - slide 41
  if (nom=="" || prenom=="" || isNaN(points)) {
    //  pop-up alert de l'objet window (BOM) - slide 116
    alert("Veuillez remplir tous les champs correctement.");
  }
  else {
    //  appel d'une fonction - slide 45
    doInsert(nom, prenom, points);
    //  ajouter un objet à un tableau (push) - slides 38-40
    persons.push({ nom: nom, prenom: prenom, points: points });
    //  modifier l'attribut value pour vider les champs - slide 93
    elt_nom.value = "";
    elt_prenom.value = "";
    elt_points.value = "";
  }
}