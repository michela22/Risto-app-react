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
    {id:3, foodName: "Piatto4", prezzo: 4.99, img: img2},
    {id:4, foodName: "Piatto5", prezzo: 5.99, img: img1},
    {id:5, foodName: "Piatto6", prezzo: 6.99, img: img2},
    {id:6, foodName: "Piatto7", prezzo: 3.99, img: img1},
    {id:7, foodName: "Piatto8", prezzo: 4.99, img: img3},
    {id:8, foodName: "Piatto9", prezzo: 5.99, img: img2},
    {id:9, foodName: "Piatto10", prezzo: 6.99, img: img1}
  ]}

  //funzione per la cancellazione delle cards
  //devo fare in modo che dopo la delete si generi una nuova lista aggiornata quindi
  //creo una costante uguale all lista iniziale ma filtro solo le card con id diverso da cardId
  handleDelete = cardId => {
    const updatedCards = this.state.cards.filter(card => card.id !==cardId);
    //NB quando aggiorni lo stato di un componente react NON si deve fare in modo diretto
    // NO!!! -->(this.state.cards=updatedCards)<--- ma
    //lo state in react si aggiorno SOLO mediante funzione setState
    this.setState({cards: updatedCards})
    /* oppure così:
    const cards = this.state.cards.filter(card => card.id !==cardId);
    this.setState({cards})

    adesso manca solo da dire che, quando da FE clicco Elimina,
    deve essere invocato il metodo handDelete ma io questo metodo ce l'ho nel padre, mentre il bottone
    si trova nel figlio Card--> risolvo ancora con le props
    */


    
  }



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
       {/*prendo lista cars contenuta nello state ( che conserva i dati) del componente attuale
       e per ogni oggetto card creo un componente card e assegno ai suoi prop i relativi valori
       dell'oggetto card */}
     {this.state.cards.map(card => (
       /* posso passare le chiavi e i valori così:
      <Card 
      key={card.id}
      foodName={card.foodName}
      img= {card.img} />
     ))}

     oppure: dichiaro nuova prop card e gli passo ogg card
       */
       <Card
        onDelete = {this.handleDelete} /*definisco prop on delete per eseguire metodo handleDelete:*/
        card={card} /> 
       ))}
       
       {/* e in Card.js scriverò 
       invece di {this .props.img}--{this.props.card.img} ecc*/}

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