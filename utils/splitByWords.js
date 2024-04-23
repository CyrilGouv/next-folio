import splitByLetters from "./splitByLetters"


const splitByWords = (text, splitLetters = true) => {
    if(splitLetters) {
        let words = []

        text.split(" ").map(word => {
            const letters = splitByLetters(word)
            return words.push(letters)
        })

        return words
    } else {
        return text.split(" ")
    }
}

export default splitByWords