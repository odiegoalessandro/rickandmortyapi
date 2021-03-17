import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from '../src/components/Head'

const GlobalStyle = createGlobalStyle`
  *, input, button {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  body{
    background: #24282F;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rick And Morty Wiki</title>
        <link 
          rel="icon"
          href="https://rickandmortyapi.com/favicon-32x32.png?v=1538abef51e33ef514e8fe1ab9aeab4"
          type="image/png"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
