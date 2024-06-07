import React from 'react'
import {doSocialLogin} from '@/src/app/actions'


function LoginSocialForm() {
  return (
    <form className="max-w-400 max-h-80 w-full flex-1 flex-col z-10 max-w-5xl justify-center font-mono text-sm flex gap-2 backdrop-blur-lg rounded-2xl px-10 bg-black/30" action={doSocialLogin}>
      <h1 className='mb-3 text-2xl'>Bienvenue, connectez vous avec votre compte google pour continuer</h1>
      <button className='backdrop-blur-sm p-3 uppercase rounded-lg bg-white/30' type='submit' name='action' value='google'>
        Se connecter avec google
      </button>
    </form>
  )
}

export default LoginSocialForm
