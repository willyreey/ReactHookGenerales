import PropTypes from 'prop-types'
import { useState } from 'react'

export const GetInput = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        if(inputValue.trim().length <= 1) return
        // setCategories(categories => [inputValue,...categories])

        onNewCategory( inputValue.trim() )
        setInputValue('')
    }

  return (
    <form onSubmit={ onSubmit } aria-label="form">
        <input
        className='mt-2'
            type='text'
            placeholder='Buscar Gif'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}

GetInput.propTypes = {
   
    onNewCategory: PropTypes.func.isRequired,

}
