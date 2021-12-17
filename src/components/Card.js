import React, {Component} from 'react';

class Card extends Component{
    render(){
    return(
        /*apro contenitore bootsrap colonna e tale contenitore, insieme
        a quello riga già presente in app.js , garantisce una disposizione ottimale 
        della card nella pag web */
        <div className='col'>
            {/* NB la prop style in react causa problemi perchè è diversa da quella html
             non si aspetta una stringa ma un oggetto js con chiave- valore
             {} servono per passare il codice js le altre{} per passare un oggetto js inoltre
             non scriverò text-align come in html ma textAling
             
             nNB non devi scrivere  <img src={img1} perchè se no fai diventare tutto statico e non puoi far variare l'immagine
             e tu devi garantire riusabilità quindi devi definire tutti gli elementi in modo dinamico
             ovver con variabile che puoi valorizzare a piacere
             Voglio che il componente padre App passi diversi attributi al compoenente figlio Card
             per far ciò è meglio usare Class Component in App.js*/}
            <div className="card" style={{width: '18rem', textAlign: 'center'}}>
            <img src={this.props.img} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title"> {this.props.foodName}</h5>
                    <p className="card-text">${this.props.prezzo}</p>
                    <button  className="btn btn-outline-danger">Elimina</button>
                </div>
             </div>
        </div>
    );
}
}
export default Card;