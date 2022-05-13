import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
  return (
    <> 

      <Head>
          <title>Blog post| Yongbin Yang</title>
          <meta name="description" content="this is a summary of blog post"></meta>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}