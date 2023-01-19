const indexProfileContainer = document.querySelector('#index-profile-container')
const messageContainer = document.querySelector('#message-container')
const showProfileContainer = document.querySelector('#show-profile-container')

export const onIndexProfileSuccess = (profiles) => {
    profiles.forEach(profile => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${profile.firstName}  ${profile.lastName}</h3>
            <button data-id="${profile._id}" >Show Profile</button>
        `

        indexProfileContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've got an error! :(</h3>
        <p>${error}</p>
    `
}

export const onCreateProfileSuccess = () => {
    messageContainer.innerText = 'You have created a character!! :)'
}

export const onShowProfileSuccess = (profile) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${profile.firstName}  ${profile.lastName}</h3>
        <p>${profile.class}</p>
        <p>${profile.strength}</p>
        <p>${profile._id}</p>
    `
    showProfileContainer.appendChild(div)
}