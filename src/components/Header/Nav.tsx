import { useState } from 'react'
import { Button, Dropdown, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Nav = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Навигация
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Разделы</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Dropdown.Item onClick={() => handleClose()} as={Link} to='/'>Списки задач</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleClose()} as={Link} to='/alltask'>Все задачи</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleClose()} as={Link} to='/alldone'>Все выполненные задачи</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleClose()} as={Link} to='/allnotdone'>Все не выполненные задачи</Dropdown.Item>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
