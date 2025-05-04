export const getDate = (date?: Date) => {
    if(!date) return [0, 0]
    return [date.getMonth(), date.getFullYear()]
}