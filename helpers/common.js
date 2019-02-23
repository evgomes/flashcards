export const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0
}

export const buildDeckSubtitle = ({ questions }) => {
    const cardsNumber = questions.length

    if (cardsNumber === 0) {
        return 'no cards'
    }

    return `${cardsNumber} ${cardsNumber === 1 ? 'card' : 'cards'}`
}