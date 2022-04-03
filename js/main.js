












document.getElementById('btn1').addEventListener('click' , searchPage)
document.getElementById('btn2').addEventListener('click' , searchResult)
document.getElementById('btn3').addEventListener('click' , searchAgain)

function searchPage(){
    document.getElementById('home').classList.add('hidden')
    document.getElementById('middle').classList.toggle('hidden')
}

function searchResult(){
    document.getElementById('middle').classList.add('hidden')
    document.getElementById('searchRes').classList.toggle('hidden')
}

function searchAgain(){
    document.getElementById('searchRes').classList.add('hidden')
    document.getElementById('middle').classList.toggle('hidden')
}