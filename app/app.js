const bioButtons = document.querySelectorAll('.bios')
const statusButtons = document.querySelectorAll('.statuses')

const hideBio = (event) => {
    // Get id of button
    const bioButtonId = event.target.id
    // Split ID into an array separated by -
    const charArr = bioButtonId.split('-')
    // Combine to match the Id of the character card
    const getBioId = charArr[0] + '-' + charArr[1]
    // Access the HTML elements of the character card & bio article
    const getCharCard = document.getElementById(`${charArr[0]}`)
    const getBio = document.getElementById(`${getBioId}`)
    // Adjust the display to hide the bio
    getBio.classList.add('hidden')
    getCharCard.classList.remove('bio-display')
    // Add event listener
    event.target.addEventListener('click', showBio)
    event.target.removeEventListener('click', hideBio)
}

const showBio = (event) => {
    // Get id of button
    const bioButtonId = event.target.id
    // Split ID into an array separated by -
    const charArr = bioButtonId.split('-')
    // Combine to match the Id of the character card
    const getBioId = charArr[0] + '-' + charArr[1]
    // Access the HTML elements of the character card & bio article
    const getCharCard = document.getElementById(`${charArr[0]}`)
    const getBio = document.getElementById(`${getBioId}`)
    // Adjust the display to show the bio using CSS
    getBio.classList.remove('hidden')
    getCharCard.classList.add('bio-display')
    // Add event listener
    event.target.removeEventListener('click', showBio)
    event.target.addEventListener('click', hideBio)
}

bioButtons.forEach(button => {
    button.addEventListener('click', showBio)
})

const hideStatus = (event) => {
    const statusButtonId = event.target.id
    const charArr = statusButtonId.split('-')
    const getStatusId = charArr[0] + '-' + charArr[1]
    const getCharCard = document.getElementById(`${charArr[0]}`)
    const getStatus = document.getElementById(`${getStatusId}`)
    getStatus.classList.add('hidden')
    getCharCard.classList.remove('status-display')
    event.target.addEventListener('click', showStatus)
    event.target.removeEventListener('click', hideStatus)
}

const showStatus = (event) => {
    const statusButtonId = event.target.id
    const charArr = statusButtonId.split('-')
    const getStatusId = charArr[0] + '-' + charArr[1]
    const getCharCard = document.getElementById(`${charArr[0]}`)
    const getStatus = document.getElementById(`${getStatusId}`)
    getStatus.classList.remove('hidden')
    getCharCard.classList.add('status-display')
    event.target.removeEventListener('click', showStatus)
    event.target.addEventListener('click', hideStatus)
}

statusButtons.forEach(button => {
    button.addEventListener('click', showStatus)
})


