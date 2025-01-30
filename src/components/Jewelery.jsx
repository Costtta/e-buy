import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { StyledHeader } from "../muiTheme/theme";


const Jewelery = () => {
    const jeweleryState = useSelector(state => state.men)
    return (
        <Box component={'section'} marginBlock={'10rem'}>
            <Container>
                <StyledHeader display={'flex'} justifyContent={{xs: 'center', sm: 'space-between'}} alignItems={'center'}>New Collections</StyledHeader>
                <Grid2 container textAlign={'center'} spacing={6}>
                    {jeweleryState.jewelery.map((index) => {
                        return(
                            <Grid2 key={index.id} size={{xs:12, sm: 6, md: 3}}>
                                <img src={index.image} alt={index.title} width={'150px'} height={'150px'}/>
                                <Typography fontWeight={'bold'}>{index.title}</Typography>
                                <Typography>Price: ${index.price}</Typography>
                                <Typography>Rating: {index.rating.rate}</Typography>
                                <Button variant="contained">View All</Button>
                            </Grid2>
                        )
                    })}
                </Grid2>
            </Container>
        </Box>
    )
}

export default Jewelery;
