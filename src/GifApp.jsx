import { useState,Fragment } from "react"
import { AddCategory,GifGrid } from "./components";


export const GifApp = () => {

    const [categories, setCategories] = useState(['squirtle']);
   
    const onAddCategory = (newCategoria) =>{
        if(categories.includes(newCategoria))return;
        setCategories([newCategoria,...categories]);
    }

    return (
        <Fragment>
            {/*Titulo */}
            <h1>Demilio GIF</h1>
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
         
        </Fragment>
    )
}
