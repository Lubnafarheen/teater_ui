import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Stack } from '@mui/material';
import NavBar from './components/NavBar';
import Footer from './components/Footer';




const MemberProfile = () => {
    return (
        <Box>
            <NavBar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar/>
            <Feed />
            <Rightbar />
            </Stack>
            <Footer/>
        </Box>
    );
};

export default MemberProfile;