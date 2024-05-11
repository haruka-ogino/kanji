import request from 'superagent'

const rootUrl = 'https://kanjiapi.dev/v1/kanji'

export async function getKanjiList() {
  try {
    const res = await request.get(rootUrl + `/joyo`)

    return res.body
  } catch (error) {
    console.error('Error fetching kanji list')
    throw new Error('Failed to fetch kanji list. Please try again.')
  }
}

export async function getKanjiInfo(character: string) {
  try {
    const res = await request.get(rootUrl + `/${character}`)

    return res.body
  } catch (error) {
    console.error('Error fetching kanji')
    throw new Error('Failed to fetch kanji. Please try again.')
  }
}

const myRootUrl = '/api/v1'
export async function getMyKanji() {
  try {
    const res = await request.get(myRootUrl + `/kanji`)

    return res.body
  } catch (error) {
    console.error('Error fetching your kanji')
    throw new Error('Failed to fetch your kanji. Please try again.')
  }
}
