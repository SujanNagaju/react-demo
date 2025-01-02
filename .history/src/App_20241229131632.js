// logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      
      {/* <Navbar title="TextUtils..." aboutText="About"/> */}
      <Navbar title="TextUtils..."/>
      <div classsname="container">
        <TextForm heading="Enter your text to analyze"/>
      </div>
    </>
  );
}

export default App;
