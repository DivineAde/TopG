import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" index element={<About />} />
          <Route path="/portfolio" index element={<Portfolio />} />
          <Route path="/contact" index element={<Contact />} />
          <Route path='/skills' index elelment={<Skills />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
