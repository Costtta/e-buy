import { createTheme, styled, Typography } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#0d6efd'
        },
        warning: {
            main: '#ffc107'
        },
        pink: {
            main: '#9c27b0',
            light: '#FCF8F8'
        },
        navyBlue: {
            main: '#162C43'
        }
    },
    typography: {
        h2: {
            fontSizeHeader: "2rem"
        }
    }
})

export const StyledHeader = styled(Typography)(({theme}) => ({
    fontSize: theme.typography.h2.fontSizeHeader,
    marginBottom: '3rem',
    fontWeight: '500'
}))



export default theme;