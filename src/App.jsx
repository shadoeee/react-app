import './styles/App.css'
import FeaturesList from './components/FeatureList';


function App({ card1 }) {
    const cardIdWithCustomButton = 3;
  return (
    <div className="cards-container">
      {card1.map((card) => (
        <div key={card.id} className="card">
          <h3 className="centered-text1">{card.title}</h3>
          <h1 className="centered-text2">{`$${card.price}/month`}</h1>
          <ul id='list'>
            {card.features.map((feature) => (
                <FeaturesList key={feature.id} feature={ feature } />
            ))}
              </ul>
             {card.id === cardIdWithCustomButton ? (
            <button className="custom-button">Button</button>
          ) : (
            <button className="standard-button">Button</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default App
