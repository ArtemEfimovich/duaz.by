import {Carousel} from 'react-bootstrap'
import s from '../Body/Body.module.css'
import {CatalogCarousel} from "./BodyContained/Carousel";


export const Body = () => {
        return (
            <div>
                <div className={s.imgLink}>
                    <a href="">
                        <h5>Аренда\Прокат</h5>
                        <img src='https://greekroman.ru/wp-content/uploads/2019/07/-e1562591374486.jpg'
                             className={s.image}/>
                    </a>

                    <a href="">
                        <img
                            src='https://3dnews.ru/assets/external/illustrations/2014/05/05/819698/f66a09f769cd69d3816829cf2ca00518.jpg'
                            className={s.image}/>
                    </a>
                </div>
                <div className={s.imgLink}>
                    <a href="">
                        <h6> Услуги</h6>
                        <img
                            src="https://lh3.googleusercontent.com/proxy/iRxHN1PIPn8j54Pb53Mh5cRlkvYpQuwSvJ9vN3aHvLhLBJ1bkv-4iodFer2q_2ZpPdfnAa8v0gv-sX0mJf68Jgf0WFdWoD2xEJUm5r4uoIWvTpnGY894K5lRV2rrANkl6d71bJwOhY4bEXft"
                            alt="Service"
                            className={s.image}/>
                    </a>
                </div>
                <div>
                   <CatalogCarousel/>
                </div>

            </div>

        )
}