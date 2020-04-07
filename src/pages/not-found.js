import React from 'react';
import {ButtonBackToHome} from "../components/button-back-to-home";

export const NotFound = () => (
    <div className="details">
        <ButtonBackToHome/>
        <div className="container card-details-container">
            <h1 className="title">404!</h1>
            <p className="subtitle">Page not found</p>
        </div>
    </div>
)