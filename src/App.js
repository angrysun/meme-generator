import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  return (
    <div className="App" darkMode={false}>
      <Header />
      <Meme />
      <Form />
    </div>
  );
}

export default App;
