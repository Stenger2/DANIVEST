import React from 'react'
import { Button } from 'react-bootstrap';
import AboutImg from "../../image/poisan6-300x175.jpg";


const about = () => {
    return (
        <div>
            <div class="row g-0 position-relative">
                <div class="col-md-6 mb-md-0 p-md-4">
                    <img className='about_img' src={AboutImg} alt="..." />
                </div>
                <div class="col-md-6 p-4 ps-md-0">
                    <h5 className='title text'>КОМПАНИЯ, С КОТОРОЙ ЛЕГКО РАБОТАТЬ И БЫСТРО СТРОИТЬ!</h5>
                    <div className='text'>
                        <p>ДАНИНВЕСТ - это относительно молодое, но динамично развивающееся предприятие. Услуги нашей компании будут полезны для каждого, кто ищет надёжного партнёра в сфере каркасного домостроения. Высоко технологическое оборудование и большой опыт персонала, позволяет решать нам самые сложные производственные задачи. Ведь далеко не каждое предприятие аналогичного профиля, имеет у себя в арсенале одновременно весь комплекс оборудования для деревообработки и домостроения.</p>
                        <Button href='/aboutus'  variant="primary">О компании</Button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
