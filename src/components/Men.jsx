import { Box, Button, Container, Grid2, styled, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { StyledHeader } from "../muiTheme/theme";

const Men = () => {
    const menState = useSelector(state => state.men.men)
    const StyledSection = styled(Box)(({theme}) => ({
        backgroundColor: theme.palette.pink.light
    }))

    return (
        <StyledSection paddingBlock={'5rem'}>
            <Container>
                <Box display={'flex'} justifyContent={{xs: 'center', sm: 'space-between'}} alignItems={'center'}>
                    <StyledHeader>Best seller for Men today</StyledHeader>
                        <Button variant="contained" sx={{display: {xs: 'none', sm: 'block'}, marginBottom: '3rem'}}>View All</Button>
                    </Box>
                <Grid2 container spacing={6} textAlign={'center'}>
                    {menState.map((index) => {
                        return(
                            <Grid2 size={{xs: 12, sm: 6, md: 3}} key={index.id}>
                                <img src={index.image} alt={index.title} width={'200px'} height={'200px'}style={{borderRadius: '200px'}}/>
                                <Typography fontWeight={'bold'}>{index.title}</Typography>
                                <Typography>Price: ${index.price}</Typography>
                                <Typography>Rating: {index.rating.rate}</Typography>
                            </Grid2>
                        )
                    })}
                </Grid2>
            </Container>
        </StyledSection>
    )
}

export default Men;
