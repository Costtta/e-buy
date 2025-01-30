import { Box, Container, Grid2, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { StyledHeader } from "../muiTheme/theme";

const Women = () => {
    const womenState = (useSelector(state => state.men.women))
    return (
        <Box component={'section'} marginBlock={'10rem'}>
            <Container>
                <StyledHeader justifyContent={{xs: 'center', sm: 'start'}} display={'flex'}>Our Best Offer For Today</StyledHeader>
                <Grid2 container spacing={6} textAlign={'center'}>
                    {womenState.map((index) => {
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
        </Box>
    )
}

export default Women;
