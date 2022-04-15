import React from 'react'
import { Form, Button } from 'react-bootstrap'

function MainForm() {
    return (
        <div className='Form_container'>
            <h2>ДАВАЙТЕ СТРОИТЬ ВМЕСТЕ!</h2>
            <p className='text '>Начать сотрудничать с нами очень просто. Оставьте письмо на эл.почту, и наши специалисты оперативно откликнуться на Вашу заявку. Обратившись в "ДАНИНВЕСТ", Вы убедитесь, что короткие сроки строительства это реально, положительно оцените качество выполненных работ и будете довольны нашими ценами.</p>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="Username" placeholder="Имя" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="phone" placeholder="Телефон" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control className='text_area' as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Подтвердить
                </Button>
            </Form>
        </div>
    )
}

export default MainForm
