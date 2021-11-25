 const api =(() =>{
    const baseUrl = 'http://localhost:3000';
    const fetchObstacles = (levelId) => {  
        const url = `${baseUrl}/plataforma/${levelId}`; 
        return fetch(url) 
        .then((result) => result.json())
        .catch(error =>{ 
            console.log("Error en api client")
        })
    };
    return {fetchObstacles};
})(); 
