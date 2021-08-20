import React from 'react';
import css from "./main.module.css";
import Mouse from "../../../assets/img/mouse.svg"
import MapIcon from "../../../assets/img/map_icon.svg"
import PhoneIcon from "../../../assets/img/phone_icon.svg"
import {Footer} from "../../../components/footer/Footer";
import {Flats} from "../../../sections/flats/Flats";
import Header from "../../../components/Header/Header";

function Main() {
    return (
        <div>
            <Header />
            <div className={css.div}>
                <h1 className={css.h1}>Развлечения, Рестораны, Отели <br/>
                    по всему миру</h1>
                <div className={css.mouse}><img src={Mouse} alt=""/></div>
                <div className={css.contacts}>
                    <div className={css.str}>
                        <div><img src={MapIcon} alt=""/></div>
                        <p className={css.phone}>Наш адрес Исанова 105/3, Бишкек</p>
                    </div>
                    <div className={css.str}>
                        <div><img src={PhoneIcon} alt=""/></div>
                        <p className={css.phone}>Наш телефон +996555555555</p>
                    </div>
                </div>
            </div>
            <Flats />
            <Footer />
        </div>
    );
}

export default Main;