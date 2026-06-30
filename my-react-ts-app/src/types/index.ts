
export interface ICharacter {
    id: number;
    image: string;
    name: string;
}

export interface IResponseInfo {
count: number;
next: string | null;
pages: number;
prev : string | null;
}

export interface ICharacterResponse {
    results: [ICharacter];
    info: IResponseInfo;
}

export interface IGQLCharacterResponse {
    characters: ICharacterResponse
}

export interface IUser {
  id: string;
  email: string;
  name: string;
}

export const TOKEN = 'auth_token'

export type CityType = {
    name: string,
    code: string
}

export type TrainInfo = {
    departure:{
        day: string,
        time: string,
        city: string
    },
    arrival: {
        day: string,
        time: string,
        city: string
    },
}

export type TrainType = {
    id: number,
    name: string,
    info: TrainInfo,
    railcars: RailcarType[]
}

export type RailcarType = {
    available: number,
    reserved:boolean,
    name: string,
    price: number,
    tarife: string
}

export type PassengerType = {
    name: string,
    email: string,
    phone: string,
    dateBirth: string
}

export type FoodType = {
    id: number,
    name: string,
    price: number,
    counter: number,
}

export type TicketTrainType = {
    id: number,
    name: string,
    info: TrainInfo,
    railcar: RailcarType
}

export type TicketType = {
    passengers: number,
    departureCity: CityType,
    arrivalCity: CityType,
    depatureDay: string,
    arrivalDay: string,
    train?: TicketTrainType,
    passengersData?: PassengerType[]
    food?: FoodType[]
    extraBaggage?: boolean,
    promoCode?: number
}

// export type TicketValue =  typeof TicketType[keyof typeof TicketType]