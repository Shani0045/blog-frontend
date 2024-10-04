import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export function SkeltonPost() {
  return (
        <Stack spacing={2}>
          <Skeleton variant="rounded" width={600} height={200} />
          <Skeleton variant="rounded" width={600} height={200} />
        </Stack>
      );
}

export function SkeltonCategory() {
    return (
      <Box sx={{ width:250 }}>
        <Skeleton />
        <Skeleton animation="wave"/>
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  }
  
export function SkeltonBlogDetails() {
    return (
        <Box sx={{ mt:2}}>
          <Stack spacing={1}>
            <Skeleton variant="rounded" width={920} height={400} />
          </Stack>
        </Box>
        );
  }