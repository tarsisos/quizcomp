import Head from 'next/head'
import db from '../db.json'

function ogImage() {
  return (
    <div>
      <Head>
        <meta property="og:title" content={db.bg} key="title" />
      </Head>
    </div>
  )
}

export default ogImage;