import {useState, useEffect} from 'react'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

import SideDrawer from "./components/SideDrawer";
import About from './pages/About';
import { Banner } from './pages/Banner';
import Contact from './pages/Contact';
import { Features } from './pages/Features';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import { Payments } from './pages/Payments';
import Services from './pages/Service';
import { SocialMedia } from './pages/SocialMedia';
import Videos from './pages/Videos';
import { Whyus } from './pages/Whyus';

function App() {
  const [sidedrawerOpen, setSidedrawerOpen] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {
    async function fetchData() {
        const response = await fetch("http://python.alphas9.com/get/company/3")
        const payload = await response.json()
        setData(payload)
        console.log(payload)
    }
    fetchData()
  }, [])

  return (
    <Router>
      <main>
        <Navbar show={sidedrawerOpen} drawerClickHandler={setSidedrawerOpen} />
        <div className="app-content">
          <SideDrawer show={sidedrawerOpen} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={() => <About data={data?.About} />} />
            <Route path="/whyus" component={() => <Whyus data={data?.Whyus} />} />
            <Route path="/features" component={() => <Features data={data?.Features} />} />
            <Route path="/services" component={() => <Services data={data?.Services} />} />
            <Route path="/gallery" component={() => <Gallery data={data?.Gallery} />} />
            <Route path="/social" component={() => <SocialMedia data={data?.Socialmedia} />} />
            <Route path="/banner" component={() => <Banner data={data?.Home} />} />
            <Route path="/payments" component={() => <Payments data={data?.Payment} />} />
            <Route path="/videos" component={() => <Videos data={data?.Video} />} />
            <Route path="/contact" component={() => <Contact data={data?.Contact} />} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
