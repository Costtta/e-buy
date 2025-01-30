import { Box, Button, Container, Grid2, Typography } from "@mui/material";

const Hero = () => {
    return (
        <Box component={'section'} marginBlock={'10rem'}>
            <Container>
                <Grid2 container>
                    <Grid2 size={{xs: 12, md: 6}} marginBottom={{xs: '5rem', md: '0rem'}}>
                        <Typography variant="h2" fontWeight={'bold'}>You can feel <Typography variant="h2" component={'span'} fontWeight={'bold'} color="warning">Fashion</Typography> sense</Typography>
                    </Grid2>
                    <Grid2 size={{xs: 12, md: 6}}>
                        <Typography color="#777">E.buy is the right place for you to buy your fashion clothes, Jewelery and Electronics with reasonable price and trust.</Typography>
                        <Box marginBlock={4}>
                            <Button variant="contained" sx={{borderRadius: '20px', fontWeight: 'bold', marginRight: '0.5rem'}} >Shop Now</Button>
                            <Button variant="outlined" color="black" sx={{borderRadius: '20px', fontWeight: 'bold'}}>Learn More</Button>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default Hero;
