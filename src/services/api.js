export const fetchPosts = async ( page = 1, limit = 10 ) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);   
    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }


    const data = await response.json();    
    return data;
}