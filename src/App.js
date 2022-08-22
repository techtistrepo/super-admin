import './App.css';
import '../src/super-admin/css/style.css'
import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from './approutes/routes';

function App() {
  return (
    <div className="App">
      <Router>
          <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
