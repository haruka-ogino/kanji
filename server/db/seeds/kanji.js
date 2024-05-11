export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('kanji').del()

  // Inserts seed entries
  await knex('kanji').insert([
    { id: 1, character: '机' },
    { id: 2, character: '持' },
    { id: 3, character: '観' },
  ])
}
