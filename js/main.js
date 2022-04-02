
document.querySelector('button').addEventListener('click' , getFetch)

function getFetch(){
    const userDate = document.querySelector('input').value
    const url = 'https://api.nasa.gov/planetary/apod?api_key=Kb43M0IbAO1ptgrty7xcAgcPcUeYTX9k3CoteQrL'

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}