import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <Nayok name={'jasim'}></Nayok>
     <Nayok name={'kasim'}></Nayok>
     <Nayok name={'lasim'}></Nayok>
     <Nayok name={'casim'}></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function  Nayok(props) {
  const nayokStyle={border:'1px solid blue',
                    margin:'10px' ,
                  backgroundColor:'cyan'                   }
    return <div style={nayokStyle}>
      <h1>ami nayok -{props.name}</h1>
    </div>
  
}

export default App;
