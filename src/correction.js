function findFleche(card) {
	const header = Array.from(card.childNodes).find(node => node.classList !== undefined && node.classList.contains("card-header"))
	if (header !== undefined) {
		const fleche = Array.from(header.childNodes).find(node => node.classList !== undefined && node.classList.contains("fleche-information-suplementaire"))
		return fleche
	}
	console.error('La carte ' + card + ' n\'a pas de flèche')
	return undefined
}
​
function findContent(card) {
	return Array.from(card.childNodes).find(node => node.classList !== undefined && node.classList.contains("card-content"))
}
​
function findParentCard(node) {
	if (node.classList.contains("card")) {
		return node
	} else {
		return findParentCard(node.parentNode)
	}
}
​
const cards = document.getElementsByClassName("card")
​
for (const card of cards) {
	const fleche = findFleche(card)
	fleche.addEventListener("click", () => {
		const card = findParentCard(fleche)
		const content = findContent(card)
		const isOpen = content.style.display === ""
		if (isOpen) {
			content.style.display = "none"
		} else {
			content.style.display = ""
		}
	})
}