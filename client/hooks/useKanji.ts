import { useQuery } from '@tanstack/react-query'
import { getKanjiList } from '../apis/kanji.ts'

export function useKanjiList() {
  const query = useQuery({ queryKey: ['kanji'], queryFn: getKanjiList })
  return {
    ...query,
  }
}
