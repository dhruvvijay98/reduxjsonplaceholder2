import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import {Routes,Route} from 'react-router-dom'


function App() {
  const container={
    backgroundImage: `url("https://media.istockphoto.com/id/1370346385/photo/amazing-mountain-ridge-view-from-the-mannlichen-station-grindelwald-switzerland.jpg?s=612x612&w=0&k=20&c=GUD6Lf3JeHR_u-2lxlyr665iig91ZsMJOqgAJR6WNn8=")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: ' no-repeat',
    height: 'auto',                  
    minHeight: '100vh',                   
    backgroundAttachment: 'fixed'
  }
  return (
    <div className="App" style={container}>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
