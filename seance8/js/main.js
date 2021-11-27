let counter = 0
let time = 1000
/*function unefonction() {
	console.log("bonjour")
}
setTimeout(unefonction, time)*/
/*
function unefonction1() {
	console.log('bonjour marat okhrin')
}
function increment() {
	counter++
	console.log("counter : " + counter)
}

window.onload = function () {
	setInterval(increment, time)

}

window.onbeforeunload = function () {

	localStorage.setItem("counter", counter)
}
*/
let textarea = document.querySelector("textarea")
let boldButton = document.querySelector(".bold")
let italicButton = document.querySelector(".italic")
let underlineButton = document.querySelector(".underline")
function bold(){
	
	if (textarea.style.fontWeight ==""){

		boldButton.style.background="black"
		boldButton.style.color="white"
		textarea.style.fontWeight="bold"
	}
	else if (textarea.style.fontWeight=="bold"){
		textarea.style.fontWeight =""
		boldButton.style.background="white"
		boldButton.style.color="black"
	}
}
function italic(){
	console.log(textarea.style.fontStyle)
	if (textarea.style.fontStyle ==""){

		italicButton.style.background="black"
		italicButton.style.color="white"
		textarea.style.fontStyle="italic"
	}
	else if (textarea.style.fontStyle=="italic"){
		textarea.style.fontStyle =""
		italicButton.style.background="white"
		italicButton.style.color="black"
	}
}
function underline (){
	if (textarea.style.textDecoration ==""){

		underlineButton.style.background="black"
		underlineButton.style.color="white"
		textarea.style.textDecoration="underline"
	}
	else if (textarea.style.textDecoration=="underline"){
		textarea.style.textDecoration=""
		underlineButton.style.background="white"
		underlineButton.style.color="black"
	}
}

function fontSize(){
	console.log("changed");
	let pixel = document.querySelector("#font-size").value
	console.log(pixel)
	textarea.style.fontSize=pixel

}

function fontFamily(){
	let fontfamily = document.querySelector("#font-family").value
	console.log(fontfamily)
	textarea.style.fontFamily=fontfamily
}
function color(){
	let color = document.querySelector("#color").value
	console.log(color)
	textarea.style.color=color
}