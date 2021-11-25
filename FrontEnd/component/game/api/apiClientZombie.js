const api = (() =>{
    const baseUrl = 'http//localhost:3000';
    const fetchZombie = (param) => {
        const url = `${baseUrl}/zombie/${param}`;
        return fetch(url)
        .then((result) => result.json())
        .catch(error => {
            console.log("error en api client")
        })
    };
    return { fetchZombie };
})();