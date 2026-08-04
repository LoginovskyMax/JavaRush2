
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

export interface Iproduct {
        id: number, 
        name: string,
        price: number,
        shortDescription: string,
        image :string,
        description: string
}

export type IBarleysResponse = Iproduct[]


