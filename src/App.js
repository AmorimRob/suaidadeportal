import React, { useState } from "react";
import "./App.css";
import { HubConnectionBuilder } from "@aspnet/signalr";

function App() {
  const [idade, setIdade] = useState("?");

  let connection = new HubConnectionBuilder()
    .withUrl("https://suaidadeserver.azurewebsites.net/faceHub")
    .build();

  connection.on("IdentificarIdade", idade => {
    console.log(idade);
    setIdade(idade);
  });

  try {
    connection.start();
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://media.giphy.com/media/XujzWKelSd5S/giphy.gif"
          alt="gif"
          width="600"
          height="300"
        />
        <p>Sua idade...</p>
        <p className="App-idade">{idade}</p>
        <p>¯\_(ツ)_/¯</p>
      </header>
    </div>
  );
}

export default App;
