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
        <p>${profile.school}</p>
        <p>${profile.health}</p>
        <p>${profile._id}</p>

        <form data-id="${profile._id}">
        <input type="text" name="firstName" value="${profile.firstName}" />
        <input type="text" name="lastName" value="${profile.lastName}" />
        <input type="text" name="school" value="${profile.school}" />
        <input type="number" name="health" value="${profile.health}" />
        <input type="submit" value="Update Profile" />
    </form>

    <button type="button" data-id="${profile._id}">Delete Profile</button>
`
    showProfileContainer.appendChild(div)
}

export const onUpdateProfileSuccess = () => {
    messageContainer.innerText = 'Update was successful :)'
}

export const onDeleteProfileSuccess = () => {
    messageContainer.innerText = 'Delete was successful :)'
}