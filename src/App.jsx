import './styles/App.css'
import Free from './components/free';


// function App({card1}) {

//     console.log(card1);

//     return (
//         <div className="card">
//             <h6>Free</h6>
//             <h1>$0/monthly</h1>
//             <ul>
//                 {
//                     card1.map(card1 =>
//                         <Free key={card1.id} card1={ card1 } />
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }

function App({ card1 }) {
  return (
    <div className="cards-container">
      {card1.map((card) => (
        <div key={card.id} className="card">
          <h6>{card.title}</h6>
          <h1>{`$${card.price}/monthly`}</h1>
          <ul>
            {card.features.map((feature) => (
              <li key={feature.id}>{feature.content}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App