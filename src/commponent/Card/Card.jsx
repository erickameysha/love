import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cardIMG from '../../images/header/card.png'
import s from './Card.module.css'
const Card = () => {

    const cardArray = [
        {
            id: 1,
            images: cardIMG,
            button: 'kfkkfmfkmkmr'
        },
        {
            id: 2,
            images: cardIMG,
            button: 'kfeeeeekmkmr'
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };
    return (
        <div className={'card'}>
            <div className={s.container}>
                <Slider {...settings}>
                    {cardArray.map(el => {
                        return (<div className={s.cardWrap} key={el.id}>
                                <div className={s.cardTop}>
                                    <img src={el.images} alt=""/>
                                </div>
                                <div className="card-bottom">
                                    <button>{el.button}</button>
                                </div>
                            </div>

                        )
                    })}
                </Slider>
            </div>



        </div>
    );
};

export default Card;