import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { headerNav }  from './constants/constantHeaderNav';
function App() {
  return (
    <div className="App">
      <Header headerNav={headerNav}/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
