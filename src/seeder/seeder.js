import { faker } from '@faker-js/faker'

faker.locale = 'fr'

export const BookCategory = Object.freeze({
  ROMAN: 'roman',
  POESIE: 'poesie',
  THEATRE: 'theatre',
  ESSAI: 'essai',
  BIOGRAPHIE: 'biographie',
  SCIENCE: 'science',
  HISTOIRE: 'histoire',
})

export default BookCategory

const categories = Object.values(BookCategory)

const filePath = '../../db.json'

const nbOfBookCovers = 45

function createOuvrages(count = 1000) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    titre: faker.lorem.words({ min: 2, max: 4 }),
    categorie: faker.helpers.arrayElement(categories),
    nbPages: faker.number.int({ min: 80, max: 1500 }),
    extrait: faker.lorem.sentence({ min: 15, max: 300 }),
    resume: faker.lorem.sentence(),
    auteur: {
      nom: faker.person.lastName(),
      prenom: faker.person.firstName(),
    },
    editeur: faker.company.name(),
    anneeEdition: faker.number.int({ min: 1750, max: 2024 }),
    imageCouverture: `/book covers/${Math.ceil(Math.random() * nbOfBookCovers)}.jpg`,
  }))
}

function createUsers(count = 1000) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    pseudo: faker.internet.username(),
    dateEntree: faker.date.past({ years: 3 }).toISOString().split('T')[0],
    nbOuvragesProposes: faker.number.int({ min: 0, max: 5 }),
    nbAppreciations: faker.number.int({ min: 0, max: 10 }),
    nbCommentaires: faker.number.int({ min: 0, max: 10 }),
  }))
}

function createAppreciations(ouvrages, users) {
  return ouvrages.map((ouvrage, i) => ({
    id: i + 1,
    ouvrageId: Math.round(ouvrages.length * Math.random()),
    userId: Math.round(users.length * Math.random()),
    note: faker.number.int({ min: 1, max: 5 }),
  }))
}

function createCommentaires(ouvrages, users) {
  return ouvrages.map((ouvrage, i) => ({
    id: i + 1,
    ouvrageId: Math.round(ouvrages.length * Math.random()),
    userId: Math.round(users.length * Math.random()),
    contenu: faker.lorem.sentence(),
    date: faker.date.recent().toISOString().split('T')[0],
  }))
}

async function seed() {
  const ouvrages = createOuvrages(1000)
  const users = createUsers(1000)
  const appreciations = createAppreciations(ouvrages, users)
  const commentaires = createCommentaires(ouvrages, users)

  const db = {
    ouvrages,
    users,
    appreciations,
    commentaires,
  }

  await Bun.write(filePath, JSON.stringify(db, null, 2))
  console.log('db.json seeded.')
}

seed()
