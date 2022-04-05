






document.getElementById('btn1').addEventListener('click' , searchPage)
document.getElementById('btn2').addEventListener('click' , searchResult , getFetch)
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


document.getElementById('btn2').addEventListener('click' , getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=Wt6Op6e4Xz0u5iwpEUbTXeh6xdEQR6SofQ08LR5q&date=${choice}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            if(data.media_type === 'image'){
                document.querySelector('iframe').classList.add('hidden')
                document.querySelector('.imageResult').classList.toggle('hidden')
                document.querySelector('.imageResult').src = data.hdurl
            } else if(data.media_type === 'video'){
                document.querySelector('.imageResult').classList.add('hidden')
                document.querySelector('iframe').classList.toggle('hidden')
                document.querySelector('iframe').src = data.url
            }



            // document.querySelector('.imageResult').src = data.hdurl
            document.querySelector('.explanation').innerText = data.explanation

        })
        .catch(err =>{
            console.log(`error ${err}`)
        });





}