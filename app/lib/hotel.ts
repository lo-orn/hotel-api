export const findHotelById = (hotels: any[], id: number) => {
    return hotels.find((h) => h.data.id === id)
}