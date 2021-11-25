const api = (() =>{
    const baseUrl = 'http//localhost:3000';
    const fetchCuenta = (param) => {
        const url = `${baseUrl}/cuenta/${param}`;
        return fetch(url)
        .then((result) => result.json())
        .catch(error => {
            console.log("error en api client")
        })
    };
    return { fetchCuenta };
})();