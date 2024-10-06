import React from 'react';
import { Container, Grid, Typography, Avatar, Box, List, ListItem, ListItemIcon, ListItemText, LinearProgress } from '@mui/material';
import { Mail, Home, Phone, Web } from '@mui/icons-material';
import { styled } from '@mui/system';
import Layout from '../../components/layout/Layout';
import Typewriter from 'typewriter-effect';


// Styled components
const ProfileSection = styled(Box)(({ theme }) => ({
  padding: '30px 0', // You can use pixel values directly to avoid theme.spacing issues
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  width: "90%",
  margin: "auto"
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 180,
  height: 200,
  margin: 'auto'
}));

const ContactInfo = styled(List)(({ theme }) => ({
  '& .MuiListItem-root': {
    padding: '8px 0',
  },
}));

const SkillProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0', // Use a fallback grey color
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#F48840', // Primary color or any color you want
    },
  }));

const AboutMe = () => {
  return (
    <Layout>
    <ProfileSection>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <StyledAvatar src="assets/images/mypic.jpg" alt="Your Name" />
            <Typography variant="h5" gutterBottom sx={{m:2, fontWeight:500}}>
              SHANI KUMAR
            </Typography>
            <Typography variant="body1">
            I'm Shani Kumar, a Software Engineer with a passion for building user-friendly, scalable applications. Skilled in technologies Python, React, Docker, Kubernetes, I love tackling challenges and learning new things. Let’s connect!
            </Typography>
            <ContactInfo>
              <ListItem>
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText primary="House No: 2, Mumbai, India" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Mail /></ListItemIcon>
                <ListItemText primary="shanikumar@gmail.com" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Phone /></ListItemIcon>
                <ListItemText primary="+910000000" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Web /></ListItemIcon>
                <ListItemText primary="www.elearning.world" />
              </ListItem>
            </ContactInfo>
          </Grid>

          {/* Right Side: Skills */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{fontWeight: 500}}>
              Professional Skills
            </Typography>
            <Box mb={2}>
              <Typography display="flex" justifyContent={"center"} variant="body1" gutterBottom>
                <Typewriter
                    options={{
                        strings:['Web Development', 'HTML, CSS','Javascript, Jquery', 'ReactJs'],
                        autoStart: true,
                        loop: true,
                        delay:5,
                        deleteSpeed: 1
                    }}
                />
              </Typography>
              <SkillProgress variant="determinate" value={80} />
            </Box>
            <Box mb={2}>
              <Typography variant="body1"  display="flex" justifyContent={"center"} gutterBottom>
                <Typewriter
                    options={{
                        strings:["API Development", 'Python- Django, FastAPI, Flask','NodeJs- ExpressJs'],
                        autoStart: true,
                        loop: true,
                        delay:5,
                        deleteSpeed: 1
                    }}
                />
              </Typography>
              <SkillProgress variant="determinate" value={90} />
            </Box>
            <Box mb={2}>
              <Typography display="flex" justifyContent={"center"} variant="body1" gutterBottom>
                <Typewriter
                    options={{
                        strings:['Cloud Deployment', 'Docker- Docker Compose, Docker Swarm', ,'Kubernetes', 'Amazon Web Service', 'Nginx'],
                        autoStart: true,
                        loop: true,
                        delay:6,
                        deleteSpeed: 1
                    }}
                />
              </Typography>
              <SkillProgress variant="determinate" value={80} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ProfileSection>
    </Layout>
  );
};

export default AboutMe;
