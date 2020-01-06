import config from '../config'

const MTGCardSearchService = {
    getSearchResults(parameters) {
        return fetch(config.API_MTGCards+'cards?'+parameters,{
            method: "GET",
            mode: 'cors',
            handlers: {
                'content-type':'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
              throw new Error(res.status)
            }
            return res.json()
            })
        .catch(error => console.log({error}))
    }
}

export default MTGCardSearchService