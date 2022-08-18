import Core from "../src/pages/_app";
import '../src/styles/tailwind.css'


export default function App({ Component, pageProps }) {
  return (<Core Component={Component} pageProps={pageProps}/>)
}