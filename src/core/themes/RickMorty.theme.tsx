import React from "react"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { RickMortyPaletteTheme } from "./RickMorty.palette"

interface Props {
  children: React.ReactNode
}

export const RickMortyTheme: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={ RickMortyPaletteTheme }>
      <CssBaseline />
        { children }
    </ThemeProvider>
  )
}
