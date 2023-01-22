import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Auth from './Pages/Home/Auth/Auth'
import Questions from './Pages/Home/Questions/Questions'
import AskQuestion from './Pages/Home/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Home/Questions/DisplayQuestion'
import Tags from './Pages/Home/Tags/Tags'
import Users from './Pages/Home/Users/Users'
import UserProfile from './Pages/Home/UserProfile/UserProfile'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Auth' element={<Auth />}/>
            <Route path='/AskQuestion' element={<AskQuestion />}/>
            <Route path='/Questions' element={<Questions />}/>
            <Route path='/Questions/:id' element={<DisplayQuestion />}/>
            <Route path='/Tags' element={<Tags />} />
            <Route path='/Users' element={<Users />} />
            <Route path='/Users/:id' element={<UserProfile />} />
        </Routes>
    )
}

export default AllRoutes
