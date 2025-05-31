"use client"; 

import { useEffect, useRef } from 'react';
import styles from "./greeting.module.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Greeting() {

    return (
        <div className={styles.container}>
            <h1 className={styles.greet}>Hello, Jorge 👋🏼</h1>
        </div>
    )
} 
