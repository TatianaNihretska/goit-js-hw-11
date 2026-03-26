import axios from 'axios';



 export function getImagesByQuery(query) {
    return axios.get('https://pixabay.com/api/', {
	params: {
        key: '55127817-55120131a00f673dd7cbfbc42',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
}
})
.then(response => response.data);
}