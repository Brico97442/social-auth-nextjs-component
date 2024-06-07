import React from 'react'

function RegisterForm() {
  async function handleSubmit() {}
  return (
    <form className="max-w-400 max-h-80 w-full flex-1 flex-col z-10 max-w-5xl justify-center font-mono text-sm flex gap-2 backdrop-blur-lg rounded-2xl px-10 bg-black/40">
      <h1 className='mb-3 text-2xl'>Veuillez enregistrer vos informations, pour vous inscrire</h1>
      <input className="p-3 text-black rounded-lg" type="text" name='name' id='name' placeholder='Nom' />
      <input className="p-3 text-black rounded-lg" type="email" name="email" placeholder='Email' />
      <input className="p-3 text-black rounded-lg" type="password" name="password" placeholder='Mot de passe' />
      <button className='backdrop-blur-sm p-3 underline rounded-lg bg-black/30'>
        S&apos;inscrire
      </button>
    </form>
  )
}

export default RegisterForm
