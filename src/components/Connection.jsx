import { Box, Button, Container, Grid2, styled } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react'
import snow1 from '../assets/snow1.avif'
import snow2 from '../assets/snow2.avif'
import snow3 from '../assets/snow3.avif'
import snow4 from '../assets/snow4.avif'
import { StyledHeader } from '../muiTheme/theme';

const Connection = () => {
    const StyledComponent = styled(Box)(({theme}) => ({
        backgroundColor: theme.palette.pink.light
    }))
    const StyledImg = styled(Grid2)(() => ({
        width: '200px',
        height: '200px',
        borderRadius: '200px'
    }) )

    return (
        <StyledComponent component={'section'} paddingBlock={'5rem'}>
            <Container>
                <Box display={'flex'} justifyContent={{xs: 'center', sm: 'space-between'}} alignItems={'center'}>
                    <StyledHeader>Connect With Us</StyledHeader>
                    <Button startIcon={<InstagramIcon />} variant='outlined' color='black' sx={{marginBottom: '3rem', display: {xs: 'none', sm: 'flex'}, borderRadius: '35px'}}>Instagram</Button>
                </Box>
                <Grid2 container textAlign={'center'} spacing={4} justifyContent={'center'}>
                    <StyledImg size={{xs: 12, sm: 6, md: 3}} position={'relative'}>
                        <img src={snow1} alt="girl-in-snow" width={'200px'} height={'200px'} style={{borderRadius: '200px'}}/>
                    </StyledImg>
                    <StyledImg size={{xs: 12, sm: 6, md: 3}}>
                        <img src={snow2} alt="girl-in-snow" width={'200px'} height={'200px'} style={{borderRadius: '200px'}}/>
                    </StyledImg>
                    <StyledImg size={{xs: 12, sm: 6, md: 3}}>
                        <img src={snow3} alt="girl-in-snow" width={'200px'} height={'200px'} style={{borderRadius: '200px'}}/>
                    </StyledImg>
                    <StyledImg size={{xs: 12, sm: 6, md: 3}}>
                        <img src={snow4} alt="girl-in-snow" width={'200px'} height={'200px'} style={{borderRadius: '200px'}}/>
                    </StyledImg>
                </Grid2>
            </Container>
        </StyledComponent>
    )
}

export default Connection;
