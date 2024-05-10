import { createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Layout from './pages/Layout.tsx'
import KanjiList from './pages/KanjiList.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="kanji" element={<KanjiList />} />
  </Route>,
)
