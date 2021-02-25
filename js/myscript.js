var name = prompt("Inserisci il tuo nome");
var surname = prompt("Inserisci il tuo cognome");
var color = prompt("Inserisci il tuo colore preferito");
var securepassword = name + surname + color + 27;

document.getElementById("password").innerHTML = securepassword;
