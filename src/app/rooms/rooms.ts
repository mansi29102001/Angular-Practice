export interface Rooms  {
    totalRooms: number,
    availableRooms: number,
    bookedRooms: number
}

export interface RoomList {
    roomNumber?: string;
    roomType: string;
    amenities: string;
    price: number;
    checkinTime: Date;
    checkoutTime: Date;
}