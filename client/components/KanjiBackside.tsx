import { useKanjiInfo } from '../hooks/useKanji'

interface Props {
  kanji: string
}

export default function KanjiDisplay({ kanji }: Props) {
  const { data: character, isLoading, isError } = useKanjiInfo(kanji)

  // To get the first n elements of an array, use

  // const slicedArray = array.slice(0, n);

  if (isLoading) {
    return <p>is loading...</p>
  }
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (character) {
    console.log(character)

    return (
      <div className="character">
        <h2>{character}</h2>
      </div>
    )
  }
}
