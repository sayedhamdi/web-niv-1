let counter = 0
let time = 1000
/*function unefonction() {
	console.log("bonjour")
}
setTimeout(unefonction, time)*/
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
