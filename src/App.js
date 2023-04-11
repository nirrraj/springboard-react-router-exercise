import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Cookies from './Cookies';
import SourPatchKids from './SourPatchKids';
import CocaCola from './CocaCola';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/snack1">
          <Cookies />
        </Route>
        <Route exact path="/snack2">
          <SourPatchKids />
        </Route>
        <Route exact path="/snack3">
          <CocaCola />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
