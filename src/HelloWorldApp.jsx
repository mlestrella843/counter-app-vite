

// esta forma es cuando se exporta independientemente

// export function App() {
//     return( <h1>Hola Mundo!</h1> );
// }


//cuando se hace una exportacion por default como

// export function App() {
//     return( <h1>Hola Mundo!???</h1> );
// }

// export default App;



//escribiendo rafc + la tecla tab sale la deficiion del componente listo para exportarlo de forma independiente
// import React from 'react'

export const HelloWorldApp = () => {
  return (
    <div> <h1>Hello World App</h1></div>
  )
}
