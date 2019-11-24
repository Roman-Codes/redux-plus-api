import jsonPlaaceholder from '../apis/jsonPlaceholder';


export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response })
};