/* eslint-disable no-unused-vars */
import { useState } from 'react'
import useMarvelService from '../../services/MarvelService'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import ErrorMessage from '../errorMessage/ErrorMessage'
import './charSearchForm.scss'

const CharSearchForm = () => {
    const [char, setChar] = useState(null)
    const {getCharacterByName, clearError, process, setProcess} = useMarvelService();
    const { register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
         } = useForm({
            mode:"onBlur"
         });

    const onSubmit = data => {
        clearError();

        getCharacterByName(data.charName)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'))
            .catch()
    };

    const onCharLoaded = (char) => {
        setChar(char);
        reset()
    }
    
    const renderResult = () => {
        if (!char) {
            return null
        }

        if (!char.length) {
            return (
                <div className="char__search-error">
                    The character was not found. Check the name and try again
                </div>
            )
        }

        return (
            <div className="char__search-wrapper">
                <div className="char__search-success">There is! Visit {char[0].name} page?</div>
                <Link to={`/characters/${char[0].id}`} className="button button__secondary">
                    <div className="inner">To page</div>
                </Link>
            </div>
        )
    }

    const errorMessage = process === 'error' ? <div className="char__search-critical-error"><ErrorMessage /></div> : null;

    return (
        <div className='char__search-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='char__search-label'>Or find a character by name:</label>
                <div className="char__search-wrapper">
                    <input placeholder='Enter name' 
                    type="text" 
                    {...register("charName", { 
                        required: "This field is required", 
                        maxLength: {
                            value:40,
                            message: "The characters name must be less than 40 symbols"
                        },
                        minLength: {
                            value:2,
                            message: "The characters name must be longer than 2 symbols"
                        } })}/>
                    
                    <button 
                        type='submit' 
                        className='button button__main'
                        disabled={process === 'loading'}>
                        <div className="inner">find</div>
                    </button>

                </div>
                    {errors?.charName &&<p className='error-message'>{errors?.charName?.message || "Error!"}</p>}
                    {renderResult()}
                    {errorMessage}
            </form>
        </div>
    )
}

export default CharSearchForm