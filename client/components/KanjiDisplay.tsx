interface Props {
  kanji: string
}

export default function KanjiDisplay({ kanji }: Props) {
  return (
    <>
      <p>{kanji}</p>
    </>
  )
}
