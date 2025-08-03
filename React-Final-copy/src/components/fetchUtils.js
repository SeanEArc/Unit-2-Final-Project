
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