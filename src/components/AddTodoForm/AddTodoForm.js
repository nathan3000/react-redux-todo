import React, { Component } from 'react'
import * as utils from '../../lib/utils'
import './AddTodoForm.css'

const AddTodoForm = ({ handleSubmit, inputRef }) => (
    <form onSubmit={ handleSubmit } className="add-todo-form"> 
            <input ref={ inputRef } className="add-todo-form__input" placeholder='What do you need to get done?' />
            <button type="submit" className="button add-todo-form__button submit">Add a to-do</button>
    </form>
)

export default AddTodoForm