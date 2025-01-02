import logo from './logo.svg';
import './App.css';

let name="Hary";
function App() {
  return (
    <>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <div className="container">
      <h1>Hello {name} </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra efficitur neque rhoncus feugiat. Aenean suscipit dictum tristique. Nullam ullamcorper eu augue pretium dapibus. Duis eget ultricies ligula. Nam id nibh erat. Vestibulum sodales ligula lacus, quis varius odio euismod a. Aliquam laoreet cursus turpis non pellentesque. Cras mattis ante quis tincidunt commodo. Etiam pretium diam eu nulla faucibus, nec dictum tortor venenatis. Curabitur gravida eu dui eu aliquam. Aliquam commodo iaculis felis sagittis vehicula. In nec suscipit nibh. Maecenas eleifend hendrerit orci, eu scelerisque neque suscipit vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    </div>
    </>
  );
}

export default App;
