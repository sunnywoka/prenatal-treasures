import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'

export const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index element={<Layout />} />
    {/* <Route path="/:param" element={<Layout />} /> */}
  </Route>,
)
