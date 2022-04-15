import React from 'react';
import step1 from "../../image/steps/step1.png";
import step2 from "../../image/steps/step2.png";
import step3 from "../../image/steps/step3.png";
import step4 from "../../image/steps/step4.png";



const Cooperate = () => {
    return (
        <div className='cooperate'>
            <h2>Сотрудничать с нами удобно</h2>
            <p className='text '>Мы работаем с проектами любой сложности в соответствии с требованиями клиентов. Быстро и качественно изготовим необходимый домокомплект нужной комплектации.</p>
            <div className="cooperate_cell px-4">
                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3">
                            <h3>Связываемся</h3>
                            <div className='cooperate_img'>
                                <img
                                className='cooperate_img-inner'
                                src={step1}
                                alt="step"
                                />
                            </div>
                            <p className='text '>Связываемся с Вами любым удобным для Вас способом. Уточняем и согласовываем все необходимые детали.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h3>Рассчитываем</h3>
                            <div className='cooperate_img'>
                            <img
                                className='step_img'
                                src={step2}
                                alt="step"
                                />
                            </div>
                            <p className='text '>Связываемся с Вами любым удобным для Вас способом. Уточняем и согласовываем все необходимые детали.</p>

                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h3>Договариваемся</h3>
                            <div className='cooperate_img'>
                            <img
                                src={step3}
                                alt="step"
                                />
                            </div>
                            <p className='text '>Связываемся с Вами любым удобным для Вас способом. Уточняем и согласовываем все необходимые детали.</p>

                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h3>Изготавливаем</h3>
                            <div className='cooperate_img'>
                            <img
                                src={step4}
                                alt="step"
                                />
                            </div>
                            <p className='text '>Связываемся с Вами любым удобным для Вас способом. Уточняем и согласовываем все необходимые детали.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cooperate