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