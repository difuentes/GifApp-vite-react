import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {

    const [categories, setCategories] = useState(['jigglypuff']);
   
    const onAddCategory = (newCategoria) =>{
        if(categories.includes(newCategoria))return;
        setCategories([newCategoria,...categories]);
    }

    return (
        <>
            {/*Titulo */}
            <h1>Demilio Gif</h1>
            {/*Search */}
            <AddCategory
                onNewCategory={ onAddCategory } 
            />

            {
                categories.map(categoria => (
                    (
                        <GifGrid 
                            key={categoria} 
                            categoria={categoria}
                        /> 
                    )
                ))
            }
         
        </>
    )
}
