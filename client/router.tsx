import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import App from './components/App'
import SpecialThanks from './components/SpecialThanks'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Layout />} />
    <Route path="about" element={<About />} />
    <Route path="special-thanks" element={<SpecialThanks />} />
  </Route>,
)
