type positionsListReferenceType = {
    [key: number]: string
}
export const ultraPositionHelper = (ultraPosition: number): string => {
    const positionsListReference: positionsListReferenceType = {
        10: "Gardien - G",
        20: "Defenseur - D",
        21: "Lateral - L",
        30: "Milieu défensir - MD",
        40: "Attaquant - A"
    }
    return positionsListReference[ultraPosition] ? positionsListReference[ultraPosition] : "NA"
}