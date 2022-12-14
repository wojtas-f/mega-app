import { Route, Routes, Link } from "react-router-dom"
import { Container, Nav } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Counter from './features/counter/Counter'
import PostsList from './features/posts/PostsList'




function App() {
  return (
    <Container fluid className="p-0">

      <Nav
        className="bg-dark"
        activeKey="/home"
      >
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"><Link to="/counter">Counter</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"><Link to="/posts">Posts</Link></Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/posts" element={<PostsList />} />
      </Routes>

    </Container >
  )
}

export default App
