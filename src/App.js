import './App.css';
import ColorRenderer from './components/ColorRenderer';
import DarkMode from './components/DarkMode';
import Form from './components/Form';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  return (
    <div className="App" darkMode={false}>
      {/* <Header />
      <Meme />
      <Form />
      <ColorRenderer /> */}
      <DarkMode />
    </div>
  );
}

export default App;
