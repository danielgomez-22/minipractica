import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponents from './HomeComponents'
import DoctoresEspecialidad from './DoctoresEspecialidad'

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<HomeComponents/>}/>
            <Route path='/doct' element={<DoctoresEspecialidad/>}/>
            </Routes>
        </BrowserRouter>
    )
  }
}
