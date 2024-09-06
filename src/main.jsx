{import('tailwindcss').defineConfig}
import ReactDom from 'react-dom/client'
// import "bootstrap/dist/css/bootstrap.min.css"
import Root from './router/index.jsx'
import './index.css'


ReactDom.createRoot(document.getElementById('root')).render(
  <Root />
)
