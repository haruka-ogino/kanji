interface Props {
  kanji: string
  setBack: React.Dispatch<React.SetStateAction<boolean>>
}

export default function KanjiDisplay({ kanji, setBack }: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="character" onClick={() => setBack(true)}>
      <h2>{kanji}</h2>
    </div>
  )
}
