import { Box, Button, Container, Grid2, styled } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react'
import snow1 from '../assets/snow1.avif'
import snow2 from '../assets/snow2.avif'
import snow3 from '../assets/snow3.avif'
import snow4 from '../assets/snow4.avif'
import { StyledHeader } from '../muiTheme/theme';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Connection = () => {
    const StyledComponent = styled(Box)(({theme}) => ({
        backgroundColor: theme.palette.pink.light
    }))
    const StyledImg = styled(Grid2)(() => ({
        width: '200px',
        height: '200px',
        borderRadius: '200px',
        transition: '0.3s',
        position: 'relative',
        '&:hover::before': {
            content: '""',
            position: 'absolute',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgb(0,0,0, 60%)'
        },
        '&::before': {
            content: '""',
            transition: '0.4s',
            borderRadius: '100%'
        },
        '&:hover .icon': {
            display: 'inline-block'
        }
    }) )

    const StyledFace = styled(FacebookIcon)(() => ({
        position: 'absolute',
        left: '50%',
        top: '50%',
        translate: '-50%',
        transition: '0.4s',
        display: 'none',
        color: 'white'
    }))

    const StyledTwitter = styled(TwitterIcon)(() => ({
        position: 'absolute',
        left: '50%',
        top: '50%',
        translate: '-50%',
        transition: '0.4s',
        display: 'none',
        color: 'white'
    }))

    const StyledInsta = styled(InstagramIcon)(() => ({
        position: 'absolute',
        left: '50%',
        top: '50%',
        translate: '-50%',
        transition: '0.4s',
        display: 'none',
        color: 'white'
    }))

    const StyledLinked = styled(LinkedInIcon)(() => ({
        position: 'absolute',
        left: '50%',
        top: '50%',
        translate: '-50%',
        transition: '0.4s',
        display: 'none',
        color: 'white'
    }))
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
                        <StyledFace className='icon'/>
                    </StyledImg>
                    <StyledImg size={{xs: 12, sm: 6, md: 3}}>
                        <img src={snow2} alt="girl-in-snow" width={'200px'} height={'200px'} style={{borderRadius: '200px'}}/>
                        <StyledTwitter className='icon' />
                    </StyledImg>
                    <StyledImg size={{xs: 12, sm: 6, md: 3}}>
                        <img src={snow3} alt="girl-in-snow" width={'200px'} height={'200px'} style={{borderRadius: '200px'}}/>
                        <StyledInsta className='icon' />
                    </StyledImg>
                    <StyledImg size={{xs: 12, sm: 6, md: 3}}>
                        <img src={snow4} alt="girl-in-snow" width={'200px'} height={'200px'} style={{borderRadius: '200px'}}/>
                        <StyledLinked className='icon' />
                    </StyledImg>
                </Grid2>
            </Container>
        </StyledComponent>
    )
}

export default Connection;
