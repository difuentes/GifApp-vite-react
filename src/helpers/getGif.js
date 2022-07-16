 export const getGif = async(categoria) =>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=wt3KOb2J6RjPZBg7QtH8xyvAb1ocjh1M&q=${categoria}&limit=10`;
    const res = await fetch(url);
    const {data =[]} = await res.json();

    //Objeto de consulta
    const gifs = data.map((img) =>({
        id: img.id,
        title:img.title,
        url: img.images.downsized_medium.url
    }) )
  
    return gifs;
}