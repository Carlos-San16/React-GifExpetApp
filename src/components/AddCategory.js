import React, { useState } from 'react'
import Proptypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    //este componente es para hacer una busqueda 

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length > 0){
          setCategories(cats => [inputValue,...cats])
          setInputValue('');
        }
    }

  return (
        <form onSubmit={handSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
  )

}

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
  }
