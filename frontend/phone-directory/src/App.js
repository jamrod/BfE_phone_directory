import './App.css';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main';


function App() {
  //container for basic components, the logic is in the Main component

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer> 
    </div>
  );
}

export default App;
