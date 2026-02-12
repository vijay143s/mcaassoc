import React, { useEffect, useRef, useState } from 'react';
import { Route, useLocation, useHistory, Switch } from "react-router-dom";
import '../assets/css/login.css';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify'; // toast
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../assets/css/developerstyles.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/style4.css';
import '../assets/css/gridstack.min.css'
import Dashboard from '../components/accountAdmin/Dashboard';
export const App = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const pathname = location.pathname;
  const actionKey = '';
  const timeout = { enter: 800, exit: 400 };

  let isAuthenticated = true;

  useEffect(() => {
    //this block of code will be executed, when redux data removed. It depends on 2 scenarios
    //if user refreshes page
   
      //history.push(pathname);
  }, []);

  return (

    <>
      
          
             

             

             <Route exact path="/" component={Dashboard}></Route>
          


      <ToastContainer closeButton={false} hideProgressBar={true} position="bottom-right" />

    </>
  );
}
