console.log("Bonjour yemchi el js")
function add(x,y){
	return x+y;

}
add(5,6)
function pow(x,y){
	console.log(x**y)
}

pow(3,3)


let resultat = document.querySelector("#resultat")
function afficherAdd(){
	let valeurX = Number(document.querySelector("#x").value)
	let valeurY = Number(document.querySelector("#y").value)

	console.log("yekhdem")
	let result = add(valeurX,valeurY)
	resultat.innerHTML=result
}
console.log(add(5,2))
