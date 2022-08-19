let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let poids = document.getElementById("poids-input").value;
  let taille = document.getElementById("taille-input").value;
  let finalimc = (poids / (taille * taille)) * 10000;

  document.getElementById("imc-output").value = finalimc;
});
