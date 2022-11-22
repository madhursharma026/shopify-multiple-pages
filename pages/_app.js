import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg" style={{ height: "100vh" }}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
