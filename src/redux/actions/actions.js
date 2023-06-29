export const actionsType = {
    DELETE_CARD: 'DELETE_CARD'
}
export const cardAction = id => {
    return {
        id,
        type: actionsType.DELETE_CARD
    }
}