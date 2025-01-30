import { Box, Button, Container, Grid2, styled, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { StyledHeader } from "../muiTheme/theme";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Electronics = () => {
    const electronicsState = useSelector(state => state.men.electronics)
    const StyledSection = styled(Box)(({theme}) => ({
        backgroundColor: theme.palette.pink.light
    }))
    return (
        <StyledSection component={'section'} paddingBlock={'5rem'}>
            <Container>
                <Box display={'flex'} alignItems={'center'} justifyContent={{xs: 'center', sm: 'space-between'}}>
                    <StyledHeader>Most Popular Picks</StyledHeader>
                    <Box display={'flex'} marginBottom={'3rem'} alignItems={'center'}>
                        <Box marginRight={'1rem'} display={{xs: 'none', sm:'block'}}>
                            <KeyboardArrowLeftIcon sx={{backgroundColor: 'transparent', color: '#0d6efd', border: '1px solid #0d6efd', borderRadius: '35px', cursor: 'pointer'}}/>
                            <KeyboardArrowRightIcon sx={{backgroundColor: '#0d6efd', color: 'white', border: '1px solid transperant', borderRadius: '35px', cursor: 'pointer'}}/>
                        </Box>
                        <Button variant="contained" sx={{display: {xs: 'none', sm: 'block'}}}>View All</Button>
                    </Box>
                </Box>
                <Grid2 container spacing={8} textAlign={'center'}>
                    {electronicsState.map((index) => {
                        return(
                            <Grid2 key={index.id} size={{xs:12, sm: 6, md: 4}}>
                                <img src={index.image} alt={index.title} width={'200px'} height={'200px'}/>
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

export default Electronics;
