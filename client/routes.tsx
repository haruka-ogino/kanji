import { createRoutesFromElements, Route } from 'react-router-dom'
import Home from './components/Home.tsx'
import Layout from './components/Layout.tsx'
import KanjiList from './components/KanjiList.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="kanji" element={<KanjiList />} />
  </Route>,
)
