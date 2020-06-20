// Can only import global styles from this _app.js file
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}