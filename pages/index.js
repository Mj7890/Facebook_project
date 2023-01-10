import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Feeds from "../components/Feeds"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo-facebookpng-32204.png" />
      </Head>
      {/* Header */}
      <Header/>
      {/* Feeds */}
      <Feeds/>
    </div>
  )
}
