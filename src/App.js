import React, {useState, useEffect, Suspense} from 'react'

import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import SideDrawer from "./components/SideDrawer";

const About = React.lazy(() => import('./pages/About'));
const Banner = React.lazy(() => import('./pages/Banner'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Features = React.lazy(() => import('./pages/Features'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Payments = React.lazy(() => import('./pages/Payments'));
const Services = React.lazy(() => import('./pages/Service'));
const SocialMedia = React.lazy(() => import('./pages/SocialMedia'));
const Videos = React.lazy(() => import('./pages/Videos'));
const Whyus = React.lazy(() => import('./pages/Whyus'));

function App() {
  const [sidedrawerOpen, setSidedrawerOpen] = useState(true)
  const [data, setData] = useState()
  const [companyID, setCompanyID] = useState(0)

  useEffect(() => {
    async function fetchData() {
        let comID = window.location.pathname.split("/")
        setCompanyID(comID[1])
        try {
          const response = await fetch(`http://python.alphas9.com/get/company/${comID[1]}`)
          const payload = await response.json()
          if(Object.keys(payload).length) {
            setData(payload)
            console.log(payload)
          } else {
            window.location.href ="/company"
          }

        } catch(err) {
          alert("Something went wrong")
        }
    }
    fetchData()
  }, [])

  return (
    <Router>
      <main>
        <Suspense fallback={null}>
          <Navbar show={sidedrawerOpen} drawerClickHandler={setSidedrawerOpen} />
          <div className="app-content">
            <SideDrawer companyID={companyID} show={sidedrawerOpen} />
            <Switch>
              {/* <ProtectedRoute exact path="/admin" component={() => <About data={data?.About} />} /> */}
              <ProtectedRoute path="/:id/admin/about" component={() => <About data={data?.About} />} />
              <ProtectedRoute path="/:id/admin/whyus" component={() => <Whyus data={data?.Whyus} />} />
              <ProtectedRoute path="/:id/admin/features" component={() => <Features data={data?.Features} />} />
              <ProtectedRoute path="/:id/admin/services" component={() => <Services data={data?.Services} />} />
              <ProtectedRoute path="/:id/admin/gallery" component={() => <Gallery data={data?.Gallery} />} />
              <ProtectedRoute path="/:id/admin/social" component={() => <SocialMedia data={data?.Socialmedia} />} />
              <ProtectedRoute path="/:id/admin/banner" component={() => <Banner data={data?.Home} />} />
              <ProtectedRoute path="/:id/admin/payments" component={() => <Payments data={data?.Payment} />} />
              <ProtectedRoute path="/:id/admin/videos" component={() => <Videos data={data?.Video} />} />
              <ProtectedRoute path="/:id/admin/contact" component={() => <Contact data={data?.Contact} />} />
            </Switch>
          </div>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
