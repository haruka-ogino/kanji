interface Props {
  kanji: string
}

export default function KanjiDisplay({ kanji }: Props) {
  return (
    <div className="character">
      <h2>{kanji}</h2>
    </div>
  )
}
