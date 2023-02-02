import './style.css';
import NavBar from './components/header/NavBar';
import { BrowserRouter} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
  );
}

export default App;
