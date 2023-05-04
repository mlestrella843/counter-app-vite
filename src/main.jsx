import React from 'react';
import  ReactDOM  from 'react-dom/client';

//Esta es la forma para la exportacion independiente, se extrae como la desestructuracion.
// import { App } from './HelloWorldApp'

//Aqui la forma global, usada en la essportacion por default
// import  App  from './HelloWorldApp'

import { HelloWorldApp } from './HelloWorldApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* //cuando llamamos el componente App  */}
        {/* <App /> */}

        <HelloWorldApp />

    </React.StrictMode>
);