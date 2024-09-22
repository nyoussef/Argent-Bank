import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'
import Home from '../pages/home/Home'
import Error404 from '../pages/error-404/Error404'
import User from '../pages/user/User'
import SignIn from '../pages/sign-in/SignIn'
import SignUp from '../pages/sign-up/SignUp'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../redux/action'

const Navigation = () => {
  const { token } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (tokenFromStorage) {
      getUser(tokenFromStorage, dispatch);      
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-in" element={token ? <Navigate replace to='/' /> : <SignIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/user" element={token ? <User /> : <Navigate replace to='/sign-in' />} />
          <Route exact path="/error-404" element={<Error404 />} />
          <Route exact path="/*" element={<Navigate replace to="/error-404" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default Navigation