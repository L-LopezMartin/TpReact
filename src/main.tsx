// Importación de estilos de react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UnComponente from './components/UnComponente/UnComponente'
import OtroComponente from './components/OtroComponente/OtroComponente'
import { FormComponent } from './components/FormComponent/FormComponent'
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App></App>
    {/* <FormComponent/>
    <OtroComponente/>
    <UnComponente text='Islas Cocos' color='blue'/>
    <UnComponente fontSize={14} text='Las Islas Cocos o Islas Keeling, organizadas administrativamente como el Territorio de las Islas Cocos (Keeling) (en inglés, Territory of Cocos (Keeling) Islands y en malayo de las Islas Cocos, Pulu Cocos [Keeling]), son un territorio externo de Australia en Asia.' color='green'/> */}
  </StrictMode>,
)
