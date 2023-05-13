import logo from './logo.svg';
import './App.css';
import ComponenteA from './component/pure/componenteA';
import ListaContactos from './component/pure/ListaContactos';
import Caja from './component/pure/Caja';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<ComponenteA></ComponenteA>*/}
        {/*<ListaContactos></ListaContactos>*/}
        <Caja></Caja>       
      </header>
    </div>
  );
}

export default App;
