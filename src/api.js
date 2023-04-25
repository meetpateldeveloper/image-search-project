import axios from "axios";

const getPictureApi = async (term)=>{
const response = await axios.get('https://api.unsplash.com/search/photos',{
    headers: {
        Authorization: 'Client-ID OTTgtkYRXfnyz7WjbU2-g5vshe9Q0j2irEKLrOIQCj0'
    },
    params:{
       query: term,
    }
});

return response.data.results;
};

export default getPictureApi;
