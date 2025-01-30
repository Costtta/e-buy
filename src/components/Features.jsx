import { Box, Button, Container, Grid2, styled, Typography } from "@mui/material";
import choose1 from '../assets/choose1.avif'
import choose2 from '../assets/choose2.avif'
import choose3 from '../assets/choose3.avif'
import choose4 from '../assets/choose4.avif'
import { StyledHeader } from "../muiTheme/theme";


const Features = () => {
    const StyledSection = styled(Box)(({theme}) => ({
        backgroundColor: theme.palette.pink.light
    }))
    return (
        <StyledSection component={'section'} paddingBlock={'5rem'}>
            <Container>
                <Box display={'flex'} justifyContent={{xs: 'center', sm: 'space-between'}} alignItems={'center'}>
                    <StyledHeader>Why Choose Us</StyledHeader>
                        <Button variant="contained" sx={{display: {xs: 'none', sm: 'block'}, marginBottom: '3rem'}}>View All</Button>
                    </Box>
                <Grid2 container spacing={6}>
                <Grid2 size={{xs: 12, sm: 6, md: 3}} textAlign={'center'}>
                <img src={choose1} alt="train-avatar" width={'100px'} height={'100px'} style={{borderRadius: '50px'}}/>
                        <Typography variant="h5" component={'h3'}>First Delivery</Typography>
                        <Typography>We take care of the set-up process aggregating all existing online.</Typography>
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 6, md: 3}} textAlign={'center'}>
                        <img src={choose2} alt="women-customer-service" width={'100px'} height={'100px'} style={{borderRadius: '50px'}}/>
                        <Typography variant="h5" component={'h3'}>24/7 Online Support</Typography>
                        <Typography>Respond and resolve your customer queries instantly by implementing live char.</Typography>
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 6, md: 3}} textAlign={'center'}>
                        <img src={choose3} alt="start" width={'100px'} height={'100px'} style={{borderRadius: '50px'}}/>
                        <Typography variant="h5" component={'h3'}>4.9 Ratings</Typography>
                        <Typography>Here's to the people who leave online reviews! So you can take your decision</Typography>
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 6, md: 3}} textAlign={'center'}>
                        <img src={choose4} alt="trophy" width={'100px'} height={'100px'} style={{borderRadius: '50px'}}/>
                        <Typography variant="h5" component={'h3'}>10 Years Services</Typography>
                        <Typography>Check out our years of service awards, program tips and strategies to celebrate</Typography>
                    </Grid2>
                </Grid2>
            </Container>
        </StyledSection>
    )
}

export default Features;
