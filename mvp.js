let url = "https://librivox.org/api/feed/audiobooks/id/52"

let data = [];
let extras = [];
fetch(url, { method: "GET" })
    .then(response => {
        return response.json();
    })
    .then((response) => {
        console.log(response)
    });

/*
    let url = `${BASE_URL}/${chamber}/${state}/current.json`;
    let data = null;
    await fetch(url, {
        method: "GET",
        headers: {
            'X-API-KEY': api_key,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then((response) => {
        // Data contained in results
        data = response.results;
    });

    return data;
*/