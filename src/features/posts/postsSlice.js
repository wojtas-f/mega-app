import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Learning redux', content: 'Lorem ipsum' },
    { id: '2', title: 'Learning redux', content: 'Lorem ipsum' },
];

const postsSlice = createSlice({ name: 'posts', initialState, reducers: {} })

export default postsSlice.reducer