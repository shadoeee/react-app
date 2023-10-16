import './styles/App.css'
import Free from './components/free';
import FeaturesList from './components/FeatureList';

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
          <h3 className="centered-text">{card.title}</h3>
          <h1 className="centered-text">{`$${card.price}/monthly`}</h1>
          <ul id='list'>
            {card.features.map((feature) => (
                <FeaturesList key={feature.id} feature={ feature } />
            ))}
              </ul>
              <button>Button</button>
        </div>
      ))}
    </div>
  );
}

export default App