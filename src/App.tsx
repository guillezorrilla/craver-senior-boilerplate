import { Route, Routes } from 'react-router-dom';
import Home from './routes/home';
import Checkout from './routes/checkout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
