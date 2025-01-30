import { Box, Button, Container, Grid2, Input, List, ListItem, ListItemButton, ListItemText, styled, Typography } from "@mui/material";

const StyledFooter = styled('footer')(({theme}) => ({
    backgroundColor: theme.palette.navyBlue.main,
    color: 'white'
}))

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Grid2 container spacing={4}>
                    <Grid2 size={{xs: 6, md: 4}} justifyContent={'center'} display={'flex'}>
                        <List>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary='Links' sx={{textAlign: 'center'}}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary='Home' sx={{textAlign: 'center'}}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary='Services' sx={{textAlign: 'center'}}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary='Shop' sx={{textAlign: 'center'}}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary='For Sale' sx={{textAlign: 'center'}}/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid2>
                    <Grid2 size={{xs: 6, md: 4}}>
                        <List>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary='Categories' sx={{textAlign: 'center'}}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary='Men' sx={{textAlign: 'center'}}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary='Women' sx={{textAlign: 'center'}}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary='Children' sx={{textAlign: 'center'}}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary='Winter' sx={{textAlign: 'center'}}/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 6, md: 4}} display={'flex'} justifyContent={'center'}>
                        <List>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary='Shop' sx={{textAlign: 'center'}}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary='Contact' sx={{textAlign: 'center'}}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary='Help' sx={{textAlign: 'center'}}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary='Customers' sx={{textAlign: 'center'}}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary='Form' sx={{textAlign: 'center'}}/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid2>
                <Grid2 size={{sm: 6, md: 12}} textAlign={'center'}>
                    <Typography>We are giving regular discount and offer for our
                    customers to get those subscribe now</Typography>
                    <form action="get" >
                        <Box display={'block'} marginBlock={'1rem'}>
                            <Input name="subscribe" sx={{backgroundColor: 'white', borderRadius: '5px'}}/>
                        </Box>
                        <Button variant="contained">Subscribe</Button> 
                    </form>
                    <Box>
                        <Typography>Copyright 2022 Ahmed Mohamed. All Rights Reserved</Typography>
                        <Box>
                            {/* icons facebook, twitter, instagram, linkedin */}
                        </Box>
                        <Typography>Terms & Conditions</Typography>
                        <Typography>Privacy Policy</Typography>
                    </Box>
                </Grid2>
                </Grid2>
            </Container>
        </StyledFooter>
    )
}

export default Footer;
