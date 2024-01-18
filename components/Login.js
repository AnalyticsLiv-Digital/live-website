import React from 'react'
import {GoogleLogin} from '@leecheuk/react-google-login'

import { useState, useEffect } from 'react';

const client_id = "216399000123-hf2ggflv2l0kll58a0nm57ipoq1eas1b.apps.googleusercontent.com"
const client_secret = "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";



const Login = () => {


    const onSuccess = (response) => {
        console.log(response.profileObj);
      }

      const onFailure = (response) => {
        console.log(response);
      }  
  return (
    <div><GoogleLogin
    clientId={client_id}
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn = {true}
  /></div>
  )
}

export default Login