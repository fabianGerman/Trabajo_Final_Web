const api = (() =>{
    const baseUrl = 'http//localhost:3000';
    const fetchZombie2 = (param) => {
        const url = `${baseUrl}/zombie2/${param}`;
        return fetch(url)
        .then((result) => result.json())
        .catch(error => {
            console.log("error en api client")
        })
    };
    return { fetchZombie2 };
})();