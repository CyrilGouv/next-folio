const splitByLetters = word => {
    let letters = []

    word.split("").forEach( letter => {
        letters.push(letter)
    })

    return letters
}


export default splitByLetters