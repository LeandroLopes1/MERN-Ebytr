import './App.css';
import Header from './components/Header';
import ListaTarefas from './components/ListaTarefas'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ListaTarefas />
      <Footer />
    </div>
  );
}

export default App;
