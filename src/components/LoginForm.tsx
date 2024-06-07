import React from 'react'

function LoginForm() {
  return (
    <form className="max-w-400 max-h-80 w-full flex-1 flex-col z-10 max-w-5xl justify-center font-mono text-sm flex gap-2 backdrop-blur-lg rounded-2xl px-10 bg-black/30">
      <h1 className='mb-3 text-2xl'>Bienvenue,<br/>entrez vos informations pour vous connecter</h1>
      <input className="p-3 text-black rounded-lg" type="email" name='email'placeholder='Email' />
      <input className="p-3 text-black rounded-lg" type="password" name="password" placeholder='Mot de passe ' />
      <button className='backdrop-blur-sm p-3 uppercase rounded-lg bg-white/30'>
        Se connecter
      </button>
    </form>
  )
}

export default LoginForm
