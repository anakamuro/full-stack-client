export const indexProfile = () => {
    return fetch(`http://localhost:8001/profiles`)
}

export const createProfile = (data) => {
    return fetch(`http://localhost:8001/profiles`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showProfile = (id) => {
    return fetch(`http://localhost:8001/profiles/${id}`)
}

export const updateProfile = (data, id) => {
    return fetch(`http://localhost:8001/profiles/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deleteProfile = (id) => {
    return fetch(`http://localhost:8001/profiles/${id}`, {
        method: 'DELETE'
    })
}