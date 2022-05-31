import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-teal-100 py-2">
      Hackman ke liye kuch toh karna hai bhaii
      <hr></hr>
      Tailwind mai design karna hai toh <a href="https://tailwindcss.com/docs/installation">https://tailwindcss.com/docs/installation</a>
      <hr></hr>
      Warna aramse CSS karo


      <hr></hr>
      To start app: npm run dev
    </div>
  )
}

export default Home
