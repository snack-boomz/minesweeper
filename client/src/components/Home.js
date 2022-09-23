import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';
import { Board } from "./Board";

export const Home = () => {
    return (
        <section id="wrapper" className="h-screen">
            <Board/>
        </section>
    )
}
