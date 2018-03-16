import decode from 'jwt-decode';
import { browserHistory } from 'react-router';
import  { Redirect } from 'react-router-dom';
import React, { Component}  from 'react';





export function login(username,password) {
    //check if user exist or not 
    localStorage.setItem("ID_TOKEN_KEY",username+password);
    window.location = "http://localhost:3001/studentApp";

}

export function logout() {
  clearIdToken();
  window.location = "http://localhost:3001/login";
}

export function getIdToken() {
  return localStorage.getItem("ID_TOKEN_KEY");
}


function clearIdToken() {
  localStorage.removeItem("ID_TOKEN_KEY");
}


export function isLoggedIn() {
  const idToken = getIdToken();
  if(idToken)
    return true;
  else
    return false;
}

