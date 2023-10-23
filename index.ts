
const validLetters = 'abcdefgh'
const validNumbers = '12345678'


export function calculateKnightMoves(start: string, end: string): number{
    if(start === end){
        return 0
    }

    let targets = [start]
    for(let moves = 1 ;; moves++){
        targets = targets.flatMap(target => calculateAdjacentKnightTargets(target))
        if(targets.includes(end)){
            return moves        
        }
    }
}

export function calculateAdjacentKnightTargets(start: string): string[] {
    const [letter, number] = start;

    const letterIndex = validLetters.indexOf(letter)
    const numberIndex = validNumbers.indexOf(number)

    const possibleTargetIndices = [
        [letterIndex+1, numberIndex+2],
        [letterIndex+2, numberIndex+1],

        [letterIndex+2, numberIndex-1],
        [letterIndex+1, numberIndex-2],

        [letterIndex-1, numberIndex-2],
        [letterIndex-2, numberIndex-1],

        [letterIndex-2, numberIndex+1],
        [letterIndex-1, numberIndex+2],
    ]

    const possibleTargets = possibleTargetIndices
    .map(([letterIndex, numberIndex]) => [validLetters[letterIndex], validNumbers[numberIndex]])
    .filter(([letter, number]) => number !== undefined && letter !== undefined)
    .map(([letter, number]) => `${letter}${number}`)

    return possibleTargets
}

export function isValidChessField(field: string): boolean {
    if(field.length != 2){
        return false;
    }
    const [letter, number] = field.split('')
    
    
    const isLetterValid = validLetters.includes(letter)
    const isNumberValid = validNumbers.includes(number)

    return isLetterValid && isNumberValid;
}