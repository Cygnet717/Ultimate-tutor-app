import config from '../config';

const MTGCardSearchService = {
    getSearchResults(parameters) {
        console.log(config.API_SCRYFALL+'cards/search?q='+parameters)
        return fetch(config.API_SCRYFALL+'cards/search?q='+parameters,{
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
    },

    getNextPageResults(uri){
        return fetch(uri,{
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
    },

    getRulings(uri){
        return fetch(uri,{
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
    },

    getNameSearchResults(name) {
        return fetch(config.API_SCRYFALL+'cards/named?fuzzy='+name,{
            method:"GET",
            mode: 'cors',
            handlers: {
                'content-type': 'application/json'
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
};

export default MTGCardSearchService