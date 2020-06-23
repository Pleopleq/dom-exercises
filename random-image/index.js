const results = document.querySelector('.results')
const newImage = document.querySelector('.newImage')
const imgFragment = document.createDocumentFragment()
const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'method': 'GET',
}

const randomSeed = () => {
    return randomNum = Math.floor(Math.random() * 2000)
}

const showImage = (image) => {
    const imgElem = document.createElement('img')
    imgElem.src = image
    imgFragment.appendChild(imgElem)
    results.appendChild(imgFragment)
}


newImage.addEventListener('click', (e) => {
    e.preventDefault()
    fetch(`https://picsum.photos/seed/${randomSeed()}/320/320`, headers)
    .then(response => {
        showImage(response.url)
    })
    .catch(err => {
        console.error(err);
    });
})


