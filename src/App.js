import './App.css';
import ColorRenderer from './components/ColorRenderer';
import Form from './components/Form';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  return (
    <div className="App" darkMode={false}>
      {/* <Header />
      <Meme />
      <Form /> */}
      <ColorRenderer />
    </div>
  );
}

export default App;
