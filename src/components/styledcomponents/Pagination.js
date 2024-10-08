import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useDispatch } from "react-redux";
import { allBlogRequest } from "../../redux/actions/blogs/allBlogAction";
import { commentsRequest } from '../../redux/actions/blogs/commentsAction';


export function BlogPagination({count}) {
    const dispatch  = useDispatch();

    const handlePageChange = (event, value) => {
        dispatch(allBlogRequest({"page": value}));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Stack spacing={2} my={2}>
        <Pagination 
            count={count}
            shape="rounded"
            onChange={handlePageChange}
            />
        </Stack>
    );
}


export function CommentPagination({count}) {
    const dispatch  = useDispatch();

    const handlePageChange = (event, value) => {
        dispatch(commentsRequest({"page": value}));
    };

    return (
        <Stack spacing={2} my={2}>
        <Pagination 
            count={count}
            shape="rounded"
            onChange={handlePageChange}
            />
        </Stack>
    );
}