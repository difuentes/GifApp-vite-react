import { Fragment,useEffect,useState } from "react"
import { getGif } from "../helpers/getGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({categoria}) => {


    const [imagenes, setImagenes] = useState([]);

    //consume de manera asincrona metodo de gif
    const getImages = async() => {
        const images = await getGif(categoria);
        setImagenes(images);
    }
    //permite que no se repita el metodo
    useEffect( () => {
        getImages();
    }, [])
    
    return (
        <Fragment>
            <div  className="card-grid">
                {
                    imagenes.map(({id,title,url}) =>(
                        <GifItem key={id} title={title} url={url}/>
                        
                    ))
                }
            </div>
        </Fragment>
    )
}
