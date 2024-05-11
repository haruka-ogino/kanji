interface Props {
  kanji: string
  setBack: React.Dispatch<React.SetStateAction<boolean>>
}

export default function KanjiDisplay({ kanji, setBack }: Props) {
  return (
    <div className="character" onClick={setBack(true)}>
      <h2>{kanji}</h2>
    </div>
  )
}
