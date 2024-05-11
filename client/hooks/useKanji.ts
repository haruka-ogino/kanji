import { useQuery } from '@tanstack/react-query'
import { getKanjiInfo, getKanjiList, getMyKanji } from '../apis/kanji.ts'

export function useKanjiList() {
  const query = useQuery({ queryKey: ['kanji'], queryFn: getKanjiList })
  return {
    ...query,
  }
}

export function useKanjiInfo(character: string) {
  const query = useQuery({
    queryKey: ['kanji', character],
    queryFn: () => getKanjiInfo(character),
  })
  return {
    ...query,
  }
}

export function useMyKanji() {
  const query = useQuery({ queryKey: ['kanji'], queryFn: getMyKanji })
  return {
    ...query,
  }
}
