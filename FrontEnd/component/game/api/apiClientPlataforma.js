const api = (() =>{
    const baseUrl = 'http//localhost:3000';
    const fetchPlataforma = (param) => {
        const url = `${baseUrl}/plataforma/${param}`;
        return fetch(url)
        .then((result) => result.json())
        .catch(error => {
            console.log("error en api client")
        })
    };
    return { fetchPlataforma };
})();