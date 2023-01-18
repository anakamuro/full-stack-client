import {indexCharacter, createCharacter} from "./api.js"
import { onCreateCharacterSuccess, onIndexCharacterSuccess, onFailure, showCharacter, onShowCharacterSuccess } from "./ui.js"

const createCharacterForm = document.querySelector('#create-character-form')

const indexCharacterContainer  = document.querySelector('#index-character-container')

indexCharacter()
.then(res =>res.json())
.then(res => {
    console.log(res)
    onIndexCharacterSuccess(res.characters)
})
.then(console.log)
.catch(console.error)

createCharacterForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const characterData = {
        character: {
             firstName: event.target['firstName'].value,
             lastName: event.target['lastName'].value,
             class: event.target['class'].value,
             strength:event.target['strength'].value
        }
    }
    createCharacter(characterData)
    .then(onCreateCharacterSuccess)
    .catch(onFailure)
})

indexCharacterContainer.addEventListener('click', (event) => {
   const id = event.target.getAttribute('data-id')
   //console.log(id)
   showCharacter(id)
   .then((res) => onShowCharacterSuccess(res.character))
   .catch(console.error)
})