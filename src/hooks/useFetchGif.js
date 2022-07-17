import { useEffect, useState } from "react";
import {getGif} from '../helpers/getGif';

export const useFetchGif = ({categoria}) => {

    const [imagenes, setImagenes] = useState([]);
    const [isLoading,setIsLoading]= useState(true);
    //consume de manera asincrona metodo de gif
    const getImages = async() => {
        const images = await getGif(categoria);
        setImagenes(images);
        setIsLoading(false);
    }
    //permite que no se repita el metodo
    useEffect( () => {
        getImages();
    }, [])

  return{
    imagenes:imagenes,
    isLoading:isLoading
  }
}
