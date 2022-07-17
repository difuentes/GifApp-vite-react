import { Fragment,useEffect,useState } from "react"
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({categoria}) => {

    const {imagenes,isLoading} = useFetchGif(categoria);
  
    return (
        <>
            {
                isLoading && (<h2>Cargando...</h2>)
                
            }

            <div  className="card-grid">
                {
                    imagenes.map((img) =>(
                      
                        <GifItem 
                            key={img.id} 
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
