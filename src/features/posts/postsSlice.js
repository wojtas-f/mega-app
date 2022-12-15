import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', title: 'Learning redux', content: 'Lorem ipsum' },
    { id: '2', title: 'Learning redux', content: 'Lorem ipsum' },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdd: {
            reducer(state, action) {
                state.push(action.payload); // uses immerjs to modify state so it's not direct modification of the state, works only in slices
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                    },
                };
            },
        },
    },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdd } = postsSlice.actions;

export default postsSlice.reducer;
