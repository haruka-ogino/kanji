interface Props {
  kanji: string
  setBack: React.Dispatch<React.SetStateAction<boolean[]>>
  i: number
}

export default function KanjiDisplay({ kanji, setBack, i }: Props) {
  function flipCard() {
    setBack((prevBack) => {
      const newBack = [...prevBack]
      newBack[i] = true
      return newBack
    })
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="character" onClick={flipCard}>
      <h2 className="front">{kanji}</h2>
    </div>
  )
}
