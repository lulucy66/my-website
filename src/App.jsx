import React from 'react';
import './App.css';
import { RouterProvider, useRouter } from './router.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Resume from './pages/Resume.jsx';
import Projects from './pages/Projects.jsx';
import Comments from './pages/Comments.jsx';
import ActiveLife from './pages/ActiveLife.jsx';
import Contacts from './pages/Contacts.jsx';

const ROUTES = {
  '/': Home,
  '/resume': Resume,
  '/projects': Projects,
  '/comments': Comments,
  '/active-life': ActiveLife,
  '/contacts': Contacts,
};

function NotFound() {
  const { navigate } = useRouter();
  return (
    <div className="page">
      <h1>404</h1>
      <p className="page-intro">That page doesn't exist.</p>
      <button className="btn btn-primary" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
    </div>
  );
}

function Routes() {
  const { path } = useRouter();
  const Page = ROUTES[path] || NotFound;
  return <Page />;
}

function Shell() {
  return (
    <div className="app-shell">
      <Nav />
      <main className="app-main">
        <Routes />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  );
}
