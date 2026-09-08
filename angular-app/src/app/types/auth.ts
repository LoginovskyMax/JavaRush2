export interface iUser {
    name: string,
    id: number,
    email: string
}

export interface IRickApi  {
    info: null,
    results: {
        id: number,
        name: string,
        image: string
    }[]
}