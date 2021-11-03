import React from 'react';
import Header from '../components/home-components/Header';
import '../css/home.css';
import SocialMedia from '../components/home-components/SocialMedia';
import InfoCard from '../components/home-components/InfoCard';
import inf_f from '../images/inf-p-0.jpg';
import inf_s from '../images/inf-p-1.jpg';
import inf_t from '../images/inf-p-2.jpg';
import inf_fo from '../images/inf-p-3.png';
import inf_bx from '../images/box.png';
import pack from '../images/box1.png';
import us from '../images/us.png';

import PromotionLayout from '../components/home-components/PromtionLayout';
import Characteristics from '../components/home-components/Characteristics';
import SvgAnimated from '../components/SvgAnimated';
import ContentGrid from '../components/home-components/ContentGrid';
import ContentCard from '../components/home-components/ContentCard';
import ContactForm from '../components/home-components/ContactForm';


const images = [inf_f, inf_s, inf_t, inf_fo, inf_bx, pack];


const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <SocialMedia />
            <div className="home-body">
                <InfoCard direction="" imgs={images[4]}>
                    <p>
                        Buscando una alternativa para ayudar a las personas con sus dolencias
                        hemos creado los <b>parches de salvia VERAR</b>. La base de este es la planta de salvia,
                        la cual desde hace siglos se usa como planta medicinal por sus múltiples propiedades
                        y como ingrediente de muchos remedios caseros
                    </p>
                </InfoCard>
                <Characteristics />
                <div className="divider">
                    <SvgAnimated />
                </div>
                <div className="content-div">
                    <ContentGrid>
                        <div className="grid__item">
                            <img src={us} alt="us-image" />
                        </div>
                        <ContentCard title="Nosotros">
                            <p>Nuestra empresa esta específicamente pensada para proporcionar productos totalmente naturales, pero con un respaldo netamente científico</p>
                            <a href="/aboutus">Leer mas..</a>
                        </ContentCard>
                    </ContentGrid>

                    <ContentGrid>
                        <ContentCard title="Parches VERAR">
                            <p>Nuestro producto está pensado para todas aquellas personas que buscan alternativas naturales a sus dolencias. <br /><br /> Los parches VERAR pueden ser usado por toda la familia por sus componentes naturales y no perjudiciales a corto o largo plazo hacia la salud y medio ambiente</p>
                            <a href="/products">Ver mas..</a>
                        </ContentCard>
                        <div className="grid__item">
                            <img src={pack} alt="us-image" />
                        </div>
                    </ContentGrid>

                    <div className="promo-divider"> <h2>Promoción de Ventas</h2> </div>
                    <PromotionLayout />

                    <div className="divider-bot d-rotate">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#91c145"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#91c145"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#91c145"></path>
                        </svg>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Home;