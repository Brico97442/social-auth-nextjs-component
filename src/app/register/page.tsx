import React from 'react'
import Link from 'next/link'
import RegisterForm from '../../components/RegisterForm'

function RegisterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-20">
    <RegisterForm/>
    <p className="my-5">Vous avez déjà compte ?</p>
    <Link href="/" className="backdrop-blur-sm p-3 rounded-lg bg-white/30 underline">Se connecter</Link>
  </main>
  )
}

export default RegisterPage
