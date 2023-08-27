import React from "react";
import {useTranslation} from "react-i18next";
import carretDownSource from '@assets/icons/carretDown.svg';
import './CallToScrollLabel.styles.sass'

export const CallToScrollLabel: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className="call-to_scroll-label">
            <h6 className="call-to_scroll-label__text">{t`welcome.scrollDownToProceed`}</h6>
            <img className="icon" src={carretDownSource} alt="carret down"/>
        </div>
    )
}