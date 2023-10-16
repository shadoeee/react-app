import './styles/App.css'

function App({card1}) {

    console.log(card1);

    return (
        <div className="card">
            <h1>Price Card Task</h1>
            <ul>
                {
                    card1.map(card1 =>
                        <li key={card1.id}>{ card1.content }</li>)
                }
            </ul>
        </div>
    )
}

export default App