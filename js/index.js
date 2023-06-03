let calcul= document.getElementById('zone_calcul')
let reponse= document.getElementById('zone_reponse')
let testBtn = document.getElementById('butonTest')

let operations = new Array()
let elements   = new Array()
let level      = 1
let current_op = "additionner"
let elmnt = 0

function additionner(val) {
    elmnt = elmnt + val
}

function substracter(val) {
    elmnt = elmnt - val
}

function multiplier(val) {
    elmnt = elmnt * val
}

function divider(val) {
    elmnt = elmnt / val
}

// let operation = 0;
/* test des event listeners
    let testBtn = document.getElementById('butonTest')
    testBtn.addEventListener('click', function(e) {
        console.log('je suis dessus')
    })
    testBtn.addEventListener('mouseover', function(e) {
        console.log('je suis par là!')
    })
*/

// Prend une valeur enn paramètre et l'ajoute dans la zone de calcul
function afficheValeur(value){
    // récupérer le contenu de la zone de calcul
    // ajouter la value à ce contenu
    calcul.innerHTML = calcul.innerHTML + value
}

function applyOperation(value){
    elmnt = window[current_op]( parseInt(value))
    console.log(window[current_op](value))
}

function setOperation(value){
    current_op = value
}










testBtn.addEventListener('click', function(e) {
    calcul.innerHTML = ''
})

function parent_1() {
    afficheValeur('(')
}

function parent_2() {
    afficheValeur(')')
}

function supp() {
    calcul.innerHTML = calcul.innerHTML.slice(0, -1)    
}

function zero() {
    applyOperation(0)
    afficheValeur(0)
}

function un() {
    console.log(current_op)
    let elmnt = window[current_op](1)
    console.log(elmnt)
    afficheValeur(1)
}

function deux() {
    console.log(window[current_op](2))
    afficheValeur(2)
}

function trois() {
    applyOperation(3)
    afficheValeur(3)
}

function quatre() {
    applyOperation(4)
    afficheValeur(4)
}

function cinq() {
    applyOperation(5)
    afficheValeur(5)
}

function six() {
    applyOperation(6)
    afficheValeur(6)
}

function sept() {
    applyOperation(7)
    afficheValeur(7)
}

function huit() {
    applyOperation(8)
    afficheValeur(8)
}

function neuf() {
    applyOperation(9)
    afficheValeur(9)
}

function moin() {
    afficheValeur('-')
    setOperation("substracter")
}

function plus() {
    afficheValeur('+')
    setOperation("additionner")
}

function etoile() {
    afficheValeur('*')
    setOperation("multiplier")
}

function slash() {
    afficheValeur('/')
    setOperation("divider")
}

function virgule() {
    afficheValeur('.')   
}


function affiche(value){
    console.log(value)
}


let func = "affiche"
let msg  = 'welcome'
function egal() {
    window[func](msg)
    // let func = 'affiche'
    // eval(func + "()")
    // let test = Number(calcul.innerHTML);
    reponse.innerHTML = elmnt
}


