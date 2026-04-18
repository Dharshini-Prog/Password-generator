let pass1 = ""
let pass2 = ""
let pass1El = document.getElementById("pass1-el")
let pass2El = document.getElementById("pass2-el")
let lengthEL = document.getElementById("length-el")
let slider = document.getElementById("length-slider")
const characters = [
    "A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j",
    "k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z",
    "0","1","2","3","4","5","6","7","8","9",
    "~","`","!","@","#","$","%","^","&","*",
    "(",")","-","_","+","=","{","[","}","]",
    ",","|",":",";","<",">",".","?",
    "/"
]
slider.addEventListener("input", function(){
    let value = slider.value
    lengthEL.textContent = "Password Length: " + value
    
})
function copy(text){
    navigator.clipboard.writeText(text)
}
function copy1(btn){
    copy(pass1El.textContent)
    btn.textContent = "Copied!"

    setTimeout(function(){
        btn.textContent = "Copy"
    }, 2000)
}

function copy2(btn){
    copy(pass2El.textContent)
    btn.textContent = "Copied!"

    setTimeout(function(){
        btn.textContent = "Copy"
    }, 2000)
}

function getchar_random(){
    let random_index = Math.floor(Math.random() * characters.length)
    return characters[random_index]
}
function generate(){
    pass1 = ""
    pass2 = ""
    let length = document.getElementById("length-slider").value
    lengthEL.textContent = "Password Length: " + length
    for(let i = 0; i < length; i++){
        pass1 += getchar_random()
        pass2 += getchar_random()
    }
    pass1El.textContent = pass1
    pass2El.textContent = pass2
}