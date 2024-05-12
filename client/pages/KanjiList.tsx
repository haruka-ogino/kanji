import { useKanjiList } from '../hooks/useKanji'
import { useParams } from 'react-router-dom'
import KanjiDisplay from '../components/KanjiDisplay'
import '../styles/character.css'
import { useState } from 'react'
import KanjiBackside from '../components/KanjiBackside'

export default function KanjiList() {
  const { data: kanji, isLoading, isError } = useKanjiList()
  const initialStates = Array.from({ length: 20 }, () => false)
  const [back, setBack] = useState(initialStates)

  const param = useParams()
  const page = Number(param.page)
  console.log(page)

  if (isLoading) {
    return <p>is loading...</p>
  }
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (kanji) {
    const maxKanji = page * 20
    console.log(maxKanji)
    const minKanji = maxKanji - 20
    console.log(minKanji)

    const kanjiArray = kanji.slice(minKanji, maxKanji)
    console.log(kanjiArray)

    if (kanjiArray)
      return (
        <div className="character-list">
          {kanjiArray.map((kanji: string, i: number) =>
            !back ? (
              <KanjiDisplay kanji={kanji} key={i} setBack={setBack} i={i} />
            ) : (
              <KanjiBackside kanji={kanji} key={i} setBack={setBack} i={i} />
            ),
          )}
        </div>
      )
  }
}
