import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import BackgroundWaves from './components/BackgroundWaves/BackgroundWaves.jsx'

function App() {
  return (
    <BrowserRouter>
      <BackgroundWaves />
      <Router />
    </BrowserRouter>
  );
}

export default App
