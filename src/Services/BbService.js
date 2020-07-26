import axios from 'axios';

const ENDPOINT = 'https://www.breakingbadapi.com/api/';

const api = {
    list(){
        return axios.get(ENDPOINT + 'character/random?limit=9');
    },
    getCharacter(id){
        return axios.get(ENDPOINT + 'characters/' + id);
    },
    getCharacterByName(name){
        return axios.get(ENDPOINT + 'characters?name=' + name);
    },
    list2(){// characters you may know
        return axios.get(ENDPOINT + 'character/random?limit=4')
    }
}

export default api;