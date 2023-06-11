// Constantes pour les informations attendues
const expectedName = "wolf";
const expectedPwd = "wolf18";

// Fonction de vérification et redirection
function verifyAndRedirect() {
  // Récupérer les valeurs des champs de saisie
  var nameInput = document.getElementById("name").value;
  var pwdInput = document.getElementById("pwd").value;

  // Vérifier si les informations correspondent aux constantes
  if (nameInput === expectedName && pwdInput === expectedPwd) {
    // Rediriger vers une autre page HTML
    window.location.href = "admin.html";
  } else {
    // Afficher un message d'erreur ou prendre d'autres actions si nécessaire
    alert("Les informations d'identification sont incorrectes !");
  }
}

// Ajouter un événement de clic sur le bouton submit
document.getElementById("submitButton").addEventListener("click", verifyAndRedirect);
