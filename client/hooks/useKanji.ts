import { useQuery } from '@tanstack/react-query'
import { getKanjiList, getMyKanji } from '../apis/kanji.ts'

export function useKanjiList() {
  const query = useQuery({ queryKey: ['kanji'], queryFn: getKanjiList })
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
