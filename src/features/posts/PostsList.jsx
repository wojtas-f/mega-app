import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import { Container, Row, Col } from 'react-bootstrap';

import AddPostForm from './AddPostForm';

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map((post) => (
        <article key={post.id} className="border-bottom">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    ));

    return (
        <Container className="pt-5">
            <Row>
                <Col xs="4">
                    <AddPostForm />
                </Col>
                <Col xs="8">
                    <section>
                        <h2>Posts</h2>
                        {renderedPosts}
                    </section>
                </Col>
            </Row>
        </Container>
    );
};

export default PostsList;
