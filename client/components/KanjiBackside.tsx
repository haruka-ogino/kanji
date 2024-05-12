import { useKanjiInfo } from '../hooks/useKanji'

interface Props {
  kanji: string
  setBack: React.Dispatch<React.SetStateAction<boolean[]>>
}

export default function KanjiBackside({ kanji, setBack }: Props) {
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

    function flipCard() {}
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div className="character" onClick={() => setBack(true)}>
        <h2>{character.kanji}</h2>
        {character.meanings.map((meaning: string, i: number) => (
          <p key={i}>{meaning}</p>
        ))}
      </div>
    )
  }
}
