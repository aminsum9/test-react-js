import React from 'react';
import './App.css';

function App() {

  const [state, setState] = React.useState({
    cartA: [
      "apel",
      "nanas",
      "pisang"
    ],
    cartB: [
      "jeruk",
      "manggis",
      "strawberi"
    ]
  })


  const handleMoveFruit = async (item, cart) => {
    if (cart == 'a') {
      //
      var newCartA = await state.cartA.filter((e) => {
        return e != item
      })

      var newCartB = [...state.cartB, item];

      setState(prevState => ({ ...prevState, cartA: newCartA, cartB: newCartB }));

    } else if (cart == 'b') {

      var newCartB = await state.cartB.filter((e) => {
        return e != item
      })

      var newCartA = [...state.cartA, item];

      setState(prevState => ({ ...prevState, cartA: newCartA, cartB: newCartB }));

    }
  }

  return (
    <div className="App">
      <div className="cart-a">
        {state.cartA.map((item, index) => {
          return (
            <div style={{color: index % 2 ? "#fff" : "#000"}} onClick={() => handleMoveFruit(item, 'a')}>
              <h3>{item}</h3>
            </div>
          )
        })}
      </div>
      <div className="cart-b">
        {state.cartB.map((item, index) => {
          return (
            <div style={{color: index % 2 ? "#fff" : "#000"}}  onClick={() => handleMoveFruit(item, 'b')}>
              <h3>{item}</h3>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
