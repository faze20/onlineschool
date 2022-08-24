import Layout from '../components/Layout'
import Head from 'next/head'
import { ContextProvider  } from '../context'
import '../styles/globals.css'
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/theme/monokai.css';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  ) 
}

export default MyApp
