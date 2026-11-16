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
  showMoyenne();
}

//  déclaration d'une fonction - slide 45
function consoleTableau() {
  //  affichage dans la console (console.log) - slide 33
  console.log(persons);
}

//  fonction appelée par un événement onclick - slides 45 et 127-133
function doNewData() {
  //  retrouver un élément par son id (getElementById) - slides 61-64
  const elt_nom = document.getElementById("form_nom");
  const elt_prenom = document.getElementById("form_prenom");
  const elt_points = document.getElementById("form_points");

  //  lire l'attribut value d'un élément - slide 93
  const nom = elt_nom.value.trim();
  const prenom = elt_prenom.value.trim();
  //  conversion texte -> entier (parseInt) - énoncé du TP, hors slides du cours
  const points = parseInt(elt_points.value);

  //  condition if...else - slide 42 ; opérateurs logiques || et == - slide 41
  if (nom == "" || prenom == "" || isNaN(points)) {
    //  pop-up alert de l'objet window (BOM) - slide 116
    alert("Veuillez remplir tous les champs correctement.");
  } else {
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

//  fonction appelée par un événement onclick - slides 45 et 127-133
function deleteRow() {
  // Étape 1 : Vérifier si le tableau est vide
  //  condition if (slide 42) ; comparaison == (slide 41)
  if (lignes == 0) {
    //  pop-up alert (BOM) - slide 116
    alert("Le tableau est vide !");
    //  return pour sortir de la fonction - slide 45
    return;
  }

  // Étape 2 : Récupérer le tableau et les checkbox
  //  querySelector (retourne le 1er élément du sélecteur CSS) - slides 76-78
  const table = document.querySelector("table");

  //  querySelectorAll (retourne une collection) - slides 76-78
  const checkboxes = table.querySelectorAll(".col_chkbox input");

  // Étape 3 : Vérifier si aucune checkbox n'est cochée
  //  variable let (slide 51)
  let selection = false;

  //  boucle for...of - slide 44
  for (let checkbox of checkboxes) {
    //  propriété checked d'un élément (accès direct à l'attribut) - slide 93
    if (checkbox.checked) {
      selection = true;
      //  break pour interrompre une boucle - slide 44
      break;
    }
  }

  //  opérateur logique NON (!) - slide 41
  if (!selection) {
    alert("Sélectionnez au moins une ligne !");
    return;
  }

  // Étape 4 : Demander une confirmation
  //  pop-up confirm de l'objet window (comme alert) - slide 116
  let confirmation = confirm(
    "Voulez-vous vraiment supprimer les lignes sélectionnées ?",
  );

  if (!confirmation) {
    return;
  }

  // Étape 5 : Récupérer toutes les lignes du tableau
  //  querySelectorAll - slides 76-78
  const rows = table.querySelectorAll("tr");

  // Étape 6 : Parcourir les lignes en sens inverse
  //  boucle for avec décrémentation (i--) - slides 41 et 44
  for (let i = rows.length - 1; i >= 1; i--) {
    //  querySelector sur un élément (cherche dans cette ligne) - slides 76-78
    const checkbox = rows[i].querySelector(".col_chkbox input");

    if (checkbox.checked) {
      //  accès à une cellule (cells[3], cf. children - slide 89) + innerText (slide 91)
      //  parseInt - énoncé du TP, hors slides du cours
      let points = parseInt(rows[i].cells[3].innerText);

      //  opérateur combiné (-=) - slide 41
      total_points -= points;

      //  opérateur de décrémentation (--) - slide 41
      lignes--;

      //  supprimer un élément du DOM (remove) - slide 100
      rows[i].remove();

      //  splice (supprime un élément d'un tableau) - hors slides du cours
      persons.splice(i - 1, 1);
    }
  }

  // Étape 7 : Afficher un message de succès
  alert("Suppression effectuée avec succès !");

  // Actualiser le résumé
  //  appel d'une fonction - slide 45
  update_summary();
}

 function highlightRow() {
  const table = document.querySelector("table");
  if (!table) return;

  const checkboxes = table.querySelectorAll(".col_chkbox input");
  table.addEventListener("click", function (event) {
    if (!event.target.matches(".col_chkbox input ")) return;
    const row = event.target.closest("tr");
    row.style.backgroundColor = event.target.checked ? "lightblue" : "";
})
}
highlightRow();

function calculeMoyenne() {
  const table = document.getElementById("table");
  const rows = table.querySelectorAll("tr");
  const moyenne = total_points /rows.length - 1;
  console.log("Moyenne des points : " + moyenne.toFixed(2));

}

function addFilterOption() {
    const table = document.querySelector("table");
    if (!table) return;

    // Ajout d'un style CSS simple pour le filtre
    const style = document.createElement('style');
    style.textContent = `
      .filter-container {
        margin-top: 2px;
        margin-bottom: 2px;
        padding: 8px 12px;
        background: #f5f7fa;
        border-radius: 6px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-family: Arial, sans-serif;
      }
      .filter-container label {
        font-weight: bold;
        color: #333;
      }
      .filter-container input[type="search"] {
        padding: 4px 8px;
        border: 1px solid #bbb;
        border-radius: 4px;
        font-size: 1em;
      }
    `;
    document.head.appendChild(style);

    const container = document.createElement("div");
    container.className = "filter-container";
    const label = document.createElement("label");
    label.htmlFor = "filter_persons";
    label.innerText = "Filtrer les personnes : ";

    const input = document.createElement("input");
    input.id = "filter_persons";
    input.type = "search";
    input.placeholder = "Nom, prénom ou points";
    input.setAttribute("aria-label", "Filtrer les personnes");

    input.addEventListener("input", function() {
      const filter = input.value.trim().toLocaleLowerCase();
      for (const row of table.querySelectorAll("tr.row")) {
        row.style.display = row.innerText.toLocaleLowerCase().includes(filter) ? "" : "none";
      }
    });

    container.append(label, input);
    table.parentNode.insertBefore(container, table);
}
  addFilterOption();

// Affiche la moyenne des points dans l'espace résumé (élément p2)
function showMoyenne() {
    // Récupérer l'élément id = p2
    const element_moyenne = document.getElementById("p2");

    // Si le tableau est vide, on évite la division par zéro
    if (lignes === 0) {
        element_moyenne.innerText = "Moyenne= 0";
    } else {
        // Moyenne = total des points / nombre de lignes
        const moyenne = total_points / lignes;
        // toFixed(2) garde 2 chiffres après la virgule
        element_moyenne.innerText = "Moyenne= " + moyenne.toFixed(2);
    }
}
