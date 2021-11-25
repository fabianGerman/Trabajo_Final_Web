const api = (() =>{
    const baseUrl = 'http//localhost:3000';
    const fetchCofre = (param) => {
        const url = `${baseUrl}/cofre/${param}`;
        return fetch(url)
        .then((result) => result.json())
        .catch(error => {
            console.log("error en api client")
        })
    };
    return { fetchCofre };
})();