import React from 'react'
import { useHeroes } from '../../hooks/useHeroes'
import { Formik, Form, Field } from 'formik';
import { HeroCard } from './HeroCard';
import { Link } from 'react-router-dom';

export const SearchScreen = () => {

    const {heroes, getHeroesByName, load} = useHeroes();
    
    const handleSubmit = (values) => {
        getHeroesByName(values.search)
    }

    const valiidatesField = (values) => {
        const errors = {}
        if(!values.search){
            errors.search = "The field cannot be empty"
        }
        return errors
    }

    return (
        <div className="search_screen">
            <div className="search-title-form">
                <h1>Search <span className="fw-400">Hero</span></h1>
                <Formik initialValues={{search: ''}} onSubmit={handleSubmit} validate={valiidatesField}>
                    {(formik) => (
                    <Form className="search-form">
                        <Field className="form-control" placeholder="Batman" name="search" autoComplete="off"/>
                        <button className="btn-primary" type="submit" disabled={!formik.isValid}>Search</button>
                    </Form>
                    )}
                </Formik>
            </div>
            <div className="search_grid">
                {
                    load ?
                    <div className='spinner' />
                    :
                    heroes ? heroes.slice(0,15).map( hero => (
                        !(hero.powerstats.intelligence === "null") && <HeroCard key={hero.id} hero={hero} />
                    ))
                    : <p>No results found.</p>
                }
            </div>
            <button className="btn-primary search-back-btn">
                <Link to="/">Back to my team</Link>
            </button>
        </div>
    )
}
