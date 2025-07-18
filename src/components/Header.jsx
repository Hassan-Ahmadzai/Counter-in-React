import React from 'react';
import logoImg from '../assets/logo.png';
import { log } from '../log';


export default function Header() {
    log('<Header /> rendered', 1);

    return (
        <header id="main-header">
            <img src={logoImg} alt="Magnifying glass analyzing a document" />
            <h1>React - Behind The Scenes</h1>
        </header>
    );
};