import { createRoutesFromElements, Route } from 'react-router-dom'
import Home from './components/Home.tsx'
import Layout from './components/Layout.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    {/* <Route path="films" element={<Films />} /> */}
  </Route>,
)
