
/**
 * 
 * @param {Array<String>} deck es un arreglo de string
 * @returns carta
 */

// Esta función me permite tomar una carta

export const pedirCarta = (deck = []) => {
    
    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
        
    } else{
        const carta = deck.pop();
        return carta;
    }
}