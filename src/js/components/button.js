const button = function(content, id, type){

    // backticks `` admettent d'insérer dans la chaîne de caractères des variables
    // interpolation : lorsque vous voyez qqch mais que c'est autre chose qui à termes prendra sa place dans la chaîne de caractères 
    return(
        `
            <button id="${id}" type="${type}">${content}</button>
        `
    )

}

export default button