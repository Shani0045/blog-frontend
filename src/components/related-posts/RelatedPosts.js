import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';

const RelatedPosts = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Learn ReactJS in 2024',
      description: 'A step-by-step guide on mastering ReactJS.',
    },
    {
      id: 2,
      title: 'Understanding JavaScript Closures',
      description: 'A deep dive into closures and their practical use cases.',
    },
    {
      id: 3,
      title: 'CSS Flexbox vs. Grid: Which One to Use?',
      description: 'Comparing Flexbox and Grid for responsive layouts.',
    },
  ];

  return (
    <Box>
      {/* Related Posts Label */}
      <Typography variant="h6" component="h6" gutterBottom sx={{fontWeight: 500}}>
        Related Posts
      </Typography>

      {/* Grid Layout for Cards */}
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
              sx={{
                height: '100%', // Make all cards have the same height
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover
                '&:hover': {
                  transform: 'scale(1.05)', // Slight scaling effect on hover
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Elevation change on hover
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>
              <Button size="small" href={`/posts/${post.id}`} sx={{color: "#007bff"}}>
                Read More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RelatedPosts;
