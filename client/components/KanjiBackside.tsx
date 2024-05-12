import { useKanjiInfo } from '../hooks/useKanji'

interface Props {
  kanji: string
  setBack: React.Dispatch<React.SetStateAction<boolean[]>>
  i: number
}

export default function KanjiBackside({ kanji, setBack, i }: Props) {
  const { data: character, isLoading, isError } = useKanjiInfo(kanji)

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
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div className="character back" onClick={flipCard}>
        <h2>{character.kanji}</h2>
        <div className="meanings-container">
          {/* <h3>meanings:</h3> */}
          {character.meanings.map((meaning: string, i: number, array: []) => (
            <>
              <p key={`meaning-${i}`} className="meaning-item">
                {meaning}
              </p>
              {i !== array.length - 1 && <p>/</p>}
            </>
          ))}
        </div>
        <div className="char-readings">
          <div className="reading">
            <h3>kun readings</h3>
            {character.kun_readings.map((meaning: string, i: number) => (
              <p key={`kun-${i}`}>{meaning}</p>
            ))}
          </div>
          <div className="reading">
            <h3>on readings</h3>
            {character.kun_readings.map((meaning: string, i: number) => (
              <p key={`on-${i}`}>{meaning}</p>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
