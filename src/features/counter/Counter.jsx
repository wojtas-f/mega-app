import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    };
    return (
        <Container>
            <section className="d-flex flex-column justify-content-center align-items-center">
                <Row className="p-2"><p className="fs-2 text">{count}</p></Row>
                <Row className="p-2">
                    <Col className="justify-content-center align-items-center"><Button variant="success" onClick={() => dispatch(increment())}>+</Button></Col>
                    <Col className="justify-content-center align-items-center"><Button variant="warning" onClick={() => resetAll()}>Reset</Button></Col>
                    <Col className="justify-content-center align-items-center"><Button variant="danger" onClick={() => dispatch(decrement())}>-</Button></Col>
                </Row>
                <Row className="p-2">
                    <Col>
                        <Form className="d-flex">
                            <Button variant="success"
                                className="h-100 align-self-end"
                                onClick={() => {
                                    dispatch(incrementByAmount(addValue));
                                }}
                            >Add amount</Button>
                            <Form.Group className="text-center p-2 pb-0">
                                <Form.Label>Enter modifier value</Form.Label>
                                <Form.Control type="number"
                                    value={incrementAmount}
                                    onChange={(e) => setIncrementAmount(e.target.value)} />
                            </Form.Group>
                            <Button variant="danger" className="h-100 align-self-end"
                                onClick={() => {
                                    dispatch(decrementByAmount(addValue));
                                }}
                            >Subtract amount</Button>
                        </Form>
                    </Col>


                </Row>



            </section>
        </Container >

    );
};

export default Counter;
