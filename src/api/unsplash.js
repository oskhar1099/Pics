import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 1247ee7dcbe4d05d44e3a0497af29f7f28f666b700df69831bcceb7ac55ac729'                
    }    
});

 