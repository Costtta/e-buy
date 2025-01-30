import { Avatar, Box, Container, Divider, Grid2, Typography } from "@mui/material";
import team1 from '../assets/teams 1.avif'
import team2 from '../assets/teams 2.avif'
import team3 from '../assets/teams 3.avif'
import team4 from '../assets/teams 4.avif'
import { StyledHeader } from "../muiTheme/theme";



const Feedback = () => {

    return (
        <Box component={'section'} marginBlock={'10rem'}>
            <Container>
                <StyledHeader>What Our Clients Say</StyledHeader>
                <Grid2 container justifyContent={'space-between'} textAlign={'center'} spacing={4}>
                    <Grid2 display={'flex'} alignItems={'center'} size={{xs: 12, sm: 6, md: 3}} justifyContent={'center'}>
                            <Avatar src={team1} alt="formal-man" sx={{marginRight: '1rem'}}/>
                        <Box>
                            <Typography variant="h6">Cody Fisher</Typography>
                            <Typography>President of Sales</Typography>
                        </Box>
                    </Grid2>
                    <Grid2 display={'flex'} alignItems={'center'} size={{xs: 12, sm: 6, md: 3}} justifyContent={'center'}>
                            <Avatar src={team2} alt="formal-man" sx={{marginRight: '1rem'}}/>
                        <Box>
                            <Typography variant="h6">John Cooper</Typography>
                            <Typography>Medical Assistant</Typography>
                        </Box>
                    </Grid2>
                    <Grid2 display={'flex'} alignItems={'center'} size={{xs: 12, sm: 6, md: 3}} justifyContent={'center'}>
                            <Avatar src={team3} alt="formal-women" sx={{marginRight: '1rem'}}/>
                        <Box>
                            <Typography variant="h6">Thara Hassan</Typography>
                            <Typography>web Designer</Typography>
                        </Box>
                    </Grid2>
                    <Grid2 display={'flex'} alignItems={'center'} size={{xs: 12, sm: 6, md: 3}} justifyContent={'center'}>
                            <Avatar src={team4} alt="formal-women" sx={{marginRight: '1rem'}}/>
                        <Box>
                            <Typography variant="h6">Jeon Se-Ri</Typography>
                            <Typography>Nursing Assistant</Typography>
                        </Box>
                    </Grid2>
                </Grid2>
                <Divider sx={{marginBlock: '1rem'}}/>
                <Box textAlign={'center'} width={'75%'} margin={'auto'}>
                    <Typography>
                        <q>My husband and I went for dinner in restaurant X and really enjoyg the atmosphere. The food was fresh and delicious and the best part was that the chef sent us a dessert they created that day. We were delighted</q>
                    </Typography>
                    <Typography textAlign={'center'} marginBlock={'2rem'}>to be the part of their business</Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Feedback;
