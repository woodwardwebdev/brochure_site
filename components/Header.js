import React from 'react';
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {

    return (
        <div className={styles.root}>
            <div className={styles.contact}>
                <span className={styles.contactItem}>
                    email@emailaddress.com
                </span>
                <span className={styles.contactItem}>
                    01110 123456
                </span>
                <span className={styles.contactItem}>
                    My Street, My Town, My County MK5 P05T
                </span>
            </div>

            <div className={styles.navbar}>
                <div className={styles.navbarBrand}>
                    <Link href='/'><img src='/img/croppedLogo.jpg' height='80px' className={styles.imgLink}></img></Link>
                </div>
                <div className={styles.navbarNav}>
                    <nav>
                        <ul className={styles.navbarList}>
                            <div className={styles.dropdownNav}>
                                <li className={styles.navbarItem}>
                                    Business Brokers
                                </li>
                                <div className={styles.dropdownContent}>
                                    <span className={styles.dropdownItem}>
                                        <Link href='/sell-my-business'>
                                            <a>Sell My Business</a>
                                        </Link>
                                    </span>
                                    <span className={styles.dropdownItem}>
                                        <Link href='/sell-a-company'>
                                            <a>Sell a Company</a>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <Link href='/about-sf'>
                                <li className={styles.navbarItem}>
                                    <a>About SF</a>
                                </li>
                            </Link>
                            <Link href='/knowledge-base'>
                                <li className={styles.navbarItem}>
                                    <a>Knowledge Base</a>
                                </li>
                            </Link>
                            <Link href='/blog'>
                                <li className={styles.navbarItem}>
                                    <a>Blog</a>
                                </li>
                            </Link>
                            <Link href='/contact-sf'>
                                <li className={styles.navbarItem}>
                                    <a>Contact</a>
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}


