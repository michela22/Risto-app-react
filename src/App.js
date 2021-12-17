import Navbar from './components/Navbar';
import Card from './components/Card';
//import { Component } from 'react/cjs/react.production.min';
import React, {Component} from 'react';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

class App extends Component {

  //per non scrivere cento volte le card
  state={cards: [
    {id:0, foodName: "Piatto1", prezzo: 1.99, img: img1},
    {id:1, foodName: "Piatto2", prezzo: 2.99, img: img2},
    {id:2, foodName: "Piatto3", prezzo: 3.99, img: img3},
    {id:3, foodName: "Piatto4", prezzo: 4.99, img: img1},
    {id:4, foodName: "Piatto5", prezzo: 5.99, img: img2},
    {id:5, foodName: "Piatto6", prezzo: 6.99, img: img3}
  ]}
// se usi class il return deve stare dentro un metodo detto render
  render(){
  return (
    
    <>
    <Navbar />
    {/* contenitore base di bootstrap così ho contenuti ben dimensionati
     rispetto alla larghezza della pagina web*/}
    <div className='container'>
    {/* react non consente inserimento multiplo, devi mettere un fragment jsx <></> */}
    <h1> Orders </h1>
    <hr/>
    <div className='row'>
      {/*qui conviene usare il component card di bootstrap per 
      mostare foto cibo,nome,prezzo e button */}
     {this.state.cards.map(card => (
      <Card 
      key={card.id}
      foodName={card.foodName}
      img= {card.img} />
     ))}

    </div>
    
    </div>
    </>
  );
}
}
export default App;

//NB: per installare bootstrap: da terminale --> npm install bootstrap
//poi vai su index.js e scrivi import 'bootstrap/dist/css/bootsrap.css';


//fonte: pitone programmatore https://www.youtube.com/watch?v=MNE7hsP3JtY

//con react resto sempre sulla stessa pagina, infatti è basato su Single Page Application
//ovvero un'app web interattiva che funziona rimanendo sempre nella stessa pag
//non fa ogni volta il caricamento di nuove pagine ma solo dei contenuti dinamici