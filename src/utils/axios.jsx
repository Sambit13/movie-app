import axios from 'axios';

const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2Y2ZTQ1OTFhMzFhYzhjMWVlOGFkNDgwM2U1YzBjNCIsInN1YiI6IjY1ZWI1NmVkMTNhMzg4MDE2MzY5YTFlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.znx4eWBtBYhvI0FeWamoHvU4cka5b5USVqfIhbOa2fE'
    }
    });

export default instance; 