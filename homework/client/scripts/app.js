import { indexProfile, createProfile, showProfile } from './api.js'
import {
	onIndexProfileSuccess,
	onFailure,
	onCreateProfileSuccess,
	onShowProfileSuccess,
} from './ui.js'

const createProfileForm = document.querySelector('#create-profile-form')
const indexProfileContainer = document.querySelector('#index-profile-container')

indexProfile()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexProfileSuccess(res.profiles)
    })
    .catch(onFailure)


createProfileForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const profileData = {
			profile: {
				firstName: event.target['firstName'].value,
				lastName: event.target['lastName'].value,
				school: event.target['school'].value,
				health: event.target['health'].value,
			},
		}

    // console.log(characterData)
    createProfile(profileData)
			.then(onCreateProfileSuccess)
			.catch(onFailure)
})

indexProfileContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    // console.log(id)

    showProfile(id)
			.then((res) => res.json())
			.then((res) => onShowProfileSuccess(res.profile))
			.catch(onFailure)
})