

// Fetch all data.
export async function fetchGetData(url) {

        const response = await fetch(url, {
            method: 'GET',
            headers:  {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        return data;
}

// Post new user
export async function postUserData(url, name, username, password){
    
    const response = await fetch(url, {
        method: 'POST',
        headers : { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ 
            name : name, 
            username : username, 
            password : password }),
    });

    const data = await response.json();
    return data;

}

// Call user by id
export async function getUserByID(userId) {

    const response = await fetch(`http://localhost:8080/users/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
        }
    })

    const userData = await response.json();

    return userData;

}


// Create Logged-Food Item
export async function createNewFoodId(date, user) {
    const postResponse = await fetch('http://localhost:8080/logged-foods/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            date: date, 
            user: {id: user }, 
            loggedFoodItems: [] }),
    });

}

