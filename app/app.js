const bioButtons = document.querySelectorAll('.bios')

const hideBio = (event) => {
    const bioButtonId = event.target.id
    const charArr = bioButtonId.split('-')
    const getBioId = charArr[0] + '-' + charArr[1]
    const getCharCard = document.getElementById(`${charArr[0]}`)
    const getBio = document.getElementById(`${getBioId}`)
    getBio.classList.add('hidden')
    getCharCard.classList.remove('bio-display')
    event.target.addEventListener('click', showBio)
    event.target.removeEventListener('click', hideBio)
}

const showBio = (event) => {
    const bioButtonId = event.target.id
    const charArr = bioButtonId.split('-')
    const getBioId = charArr[0] + '-' + charArr[1]
    const getCharCard = document.getElementById(`${charArr[0]}`)
    const getBio = document.getElementById(`${getBioId}`)
    getBio.classList.remove('hidden')
    getCharCard.classList.add('bio-display')
    event.target.removeEventListener('click', showBio)
    event.target.addEventListener('click', hideBio)
}

bioButtons.forEach(button => {
    button.addEventListener('click', showBio)
})

const statusButtons = document.querySelectorAll('.bios')

const hideBio = (event) => {
    const bioButtonId = event.target.id
    const charArr = bioButtonId.split('-')
    const getBioId = charArr[0] + '-' + charArr[1]
    const getCharCard = document.getElementById(`${charArr[0]}`)
    const getBio = document.getElementById(`${getBioId}`)
    getBio.classList.add('hidden')
    getCharCard.classList.remove('bio-display')
    event.target.addEventListener('click', showBio)
    event.target.removeEventListener('click', hideBio)
}

const showBio = (event) => {
    const bioButtonId = event.target.id
    const charArr = bioButtonId.split('-')
    const getBioId = charArr[0] + '-' + charArr[1]
    const getCharCard = document.getElementById(`${charArr[0]}`)
    const getBio = document.getElementById(`${getBioId}`)
    getBio.classList.remove('hidden')
    getCharCard.classList.add('bio-display')
    event.target.removeEventListener('click', showBio)
    event.target.addEventListener('click', hideBio)
}

bioButtons.forEach(button => {
    button.addEventListener('click', showBio)
})


