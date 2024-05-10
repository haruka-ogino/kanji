import { useKanjiList } from '../hooks/useKanji'

export default function KanjiList() {
  const { data: kanji, isLoading, isError } = useKanjiList()

  if (isLoading) {
    return <p>is loading...</p>
  }
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (kanji) {
    console.log(kanji)

    return (
      <>
        <p>heyyy</p>
      </>
    )
  }
}
