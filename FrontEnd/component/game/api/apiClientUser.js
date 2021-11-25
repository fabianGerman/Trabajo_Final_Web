const api = (() =>{
    const baseUrl = 'http//localhost:3000';
    const fetchUsuario = (param) => {
        const url = `${baseUrl}/usuario/${param}`;
        return fetch(url)
        .then((result) => result.json())
        .catch(error => {
            console.log("error en api client")
        })
    };
    return { fetchUsuario };
})();