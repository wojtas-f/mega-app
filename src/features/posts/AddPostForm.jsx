import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'; //generate random id
import { Form, Button } from 'react-bootstrap';

import { postAdd } from './postsSlice';

const AddPostForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);

    const onSavePost = () => {
        if (title && content) {
            dispatch(postAdd(title, content));
        }

        setTitle('');
        setContent('');
    };

    return (
        <section>
            <h2>Add a new post</h2>
            <Form>
                <Form.Label htmlFor="postTitle">Post Title</Form.Label>
                <Form.Control
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                />

                <label htmlFor="postContent">Post content</label>
                <Form.Control
                    as="textarea"
                    type="text"
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                />
                <Button onClick={onSavePost} type="button" classList="mt-2">
                    Save post
                </Button>
            </Form>
        </section>
    );
};

export default AddPostForm;
