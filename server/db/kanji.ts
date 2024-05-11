import connection from './connection.ts'

export async function getAllKanji(db = connection) {
  return db('kanji').select()
}
