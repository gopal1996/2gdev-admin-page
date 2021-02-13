import {useState} from 'react'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

import SideDrawer from "./components/SideDrawer";
import About from './pages/About';
import { Banner } from './pages/Banner';
import { Features } from './pages/Features';
import Home from './pages/Home';
import { Payments } from './pages/Payments';
import { SocialMedia } from './pages/SocialMedia';
import { Whyus } from './pages/Whyus';

function App() {
  const [sidedrawerOpen, setSidedrawerOpen] = useState(true)


  return (
    <Router>
      <main>
        <Navbar show={sidedrawerOpen} drawerClickHandler={setSidedrawerOpen} />
        <div className="app-content">
          <SideDrawer show={sidedrawerOpen} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/whyus" component={Whyus} />
            <Route path="/features" component={Features} />
            <Route path="/social" component={SocialMedia} />
            <Route path="/banner" component={Banner} />
            <Route path="/payments" component={Payments} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
