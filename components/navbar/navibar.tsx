'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './navibar.module.css';
import Image from "next/image";

function Navitem(props) {
    const path = usePathname();
    return(
        <div className={styles.navitem}>
            {path === props.path ? "🔥" : ""}<Link href={props.path} className={styles.navitemLink}>{props.text}</Link>                 
        </div>
    )
}

export default function Navigation() {
    const path = usePathname();

    return(
        <nav className={styles.navbar}>
            <div>
                <Image src="/npe-new-logo.ico" 
                alt="로고" width={50} height={50} className={styles.navLogo}/>
            </div>
            <Navitem path="/" text="Home" />
            <Navitem path="/about-us" text="About us" />
            <Navitem path="/mv/recom" text="Movie" />
        </nav>
    )
}