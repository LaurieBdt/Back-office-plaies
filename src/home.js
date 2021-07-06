const fleche = document.getElementById("card-1-fleche");
const contenu = document.getElementById("card-1-content");

fleche.addEventListener("click", (event) => {
	const estMasque = contenu.style.display === "none"
	if (estMasque) {
		contenu.style.display = ""
	} else {
		contenu.style.display = "none"
	}
})