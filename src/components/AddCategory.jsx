import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue,setinputValue] = useState('');
    
    const setInput =({target})=>{
        setinputValue(target.value);
    }

    const onsubmit = (event)=>{
        const input = inputValue.trim();
        //evitar recargar pagina
        event.preventDefault();
        //validacion para recibir mas de 1 caracter
        if( input.length <=1)return;
        //llama a metodo de padre para editar state de categorias
        onNewCategory(input)
        //vacia el input de busqueda
        setinputValue('');
    }

    return (
        <form onSubmit={onsubmit}>
            <input
                type="text"
                placeholder="Buscar gif"
                onChange={setInput}
                value={ inputValue}
            />
          
        </form>
    )
}
