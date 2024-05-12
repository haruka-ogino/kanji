import { useKanjiInfo } from '../hooks/useKanji'

interface Props {
  kanji: string
  setBack: React.Dispatch<React.SetStateAction<boolean[]>>
  i: number
}

export default function KanjiBackside({ kanji, setBack, i }: Props) {
  const { data: character, isLoading, isError } = useKanjiInfo(kanji)

  // To get the first n elements of an array, use

  // const slicedArray = array.slice(0, n);

  function flipCard() {
    setBack((prevBack) => {
      const newBack = [...prevBack]
      newBack[i] = false
      return newBack
    })
  }

  if (isLoading) {
    return <p>is loading...</p>
  }
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (character) {
    console.log(character)

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div className="character" onClick={flipCard}>
        <h2>{character.kanji}</h2>
        {character.meanings.map((meaning: string, i: number) => (
          <p key={i}>{meaning}</p>
        ))}
      </div>
    )
  }
}
