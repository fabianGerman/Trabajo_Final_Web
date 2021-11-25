const api = (() =>{
    const baseUrl = 'http//localhost:3000';
    const fetchNivel = (param) => {
        const url = `${baseUrl}/nivel/${param}`;
        return fetch(url)
        .then((result) => result.json())
        .catch(error => {
            console.log("error en api client")
        })
    };
    return { fetchNivel };
})();