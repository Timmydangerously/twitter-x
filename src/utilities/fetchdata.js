const BASE_URL='https://twitter241.p.rapidapi.com'

export const fetchdata = async (params) => {
    const result = await fetch(`${BASE_URL}/search?type=Top&count=20&query=${params}`, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bb65b5652fmsh0f7f08d5012eca5p155fa6jsn4eb15004d303',
		'x-rapidapi-host': 'twitter241.p.rapidapi.com'

        }      
    })
    console.log(result); //promise+
    const data = await result.json();
    console.log(data)//json object
    return data;
}
//export const fetchwork = async () => {
    //const data = await fetch('https://fakestoreapi.com/products', {method: 'GET'})
    //const work = await data.json();
    //console.log(work)
    //return work;}

    export const fetchTweet = async () => {
        const result = await fetch(`${BASE_URL}/retweets?pid=1552735248026411010&count=40`, {
            method: 'GET', 
            headers: {
                'x-rapidapi-key': '64a4596b67msh9ce0ab93fa99e67p1db0fbjsn9f18d2ae00ee',
                'x-rapidapi-host': 'twitter241.p.rapidapi.com'
            }
        })       
     
        console.log(result);
        
        const data = await result.json();
        console.log(data) 
        return data; 
    }