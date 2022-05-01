"use strict";

var prideti = document.getElementById("prideti");
var istrintiPirma = document.getElementById("istrintiPirma");
var istrintiPaskutini = document.getElementById("istrintiPaskutini");
var forma = document.querySelector("form");
var tbodyEl = document.querySelector("tbody");
var vardas = document.getElementById("names");
var pavarde = document.getElementById("lastnames");
var amzius = document.getElementById("age");

prideti.addEventListener("click", function (e) {
  e.preventDefault();

  if (vardas.value && pavarde.value && amzius.value && amzius.value > 0) {
    var newRow = document.createElement("tr");
    tbodyEl.append(newRow);
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");

    cell1.innerText = vardas.value;
    cell2.innerText = pavarde.value;
    cell3.innerText = amzius.value;
    newRow.append(cell1, cell2, cell3);
  } else {
    alert("Įveskite duomenis");
    return;
  }

  vardas.value = "";
  pavarde.value = "";
  amzius.value = "";
});

istrintiPirma.addEventListener("click", function (e) {
  e.preventDefault();

  var tbodyEl = document.querySelector("tbody");
  var rowCount = tbodyEl.rows.length;
  var row = tbodyEl.deleteRow(0);
});

istrintiPaskutini.addEventListener("click", function (e) {
  e.preventDefault();

  var tbodyEl = document.querySelector("tbody");
  var rowCount = tbodyEl.rows.length;
  var row = tbodyEl.deleteRow(rowCount - 1);
});
