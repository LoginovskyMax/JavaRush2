import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICharactersState {
    characters: Array<{image: string, name: string, id: number}>,
    isLoading: boolean,
    currentPage: number,
    totalPages: number
}

const initialState:ICharactersState = {
    characters: [],
    isLoading: false,
    currentPage: 1,
    totalPages: 0
}

export const fetchCharacters = createAsyncThunk(
    'fetchCharacters',
    async (pageNumber: number | undefined = 1) => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      const data = await response.json()

      await new Promise((res) => {
        setTimeout(() => res(true), 2000)
      })

      return data
    }
)

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
      setCurrentPage: (state, action: PayloadAction<number>) => {
        state.currentPage = action.payload
      }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
          state.characters = action.payload.results
          state.isLoading = false
          state.totalPages = action.payload.info.pages
        })
    }
})

export const { setCurrentPage } = charactersSlice.actions

export default charactersSlice.reducer

