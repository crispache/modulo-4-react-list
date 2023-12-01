import { createTheme, Theme } from "@mui/material";



export const RickMortyPaletteTheme: Theme = createTheme({
    palette: {
        primary: {
            main: '#121238',
            light: '#03AEC7',
            dark: '#166678',
            contrastText: '#ffff',
        },
        secondary: {
            main: '#53ffa4',
            light: '#F2DD72',
        },
    }
})