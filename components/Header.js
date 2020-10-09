import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {

    const [open, setOpen] = React.useState(false)

    const toggleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className={styles.root}>
            <Head>
                <title>Brochure Site Example | Colin Woodward</title>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet"></link>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.contact}>
                <span className={styles.permContactItem}>
                    email@emailaddress.com
                </span>
                <span className={styles.permContactItem}>
                    01110 123456
                </span>
                <span className={styles.contactItem}>
                    My Street, My Town, My County MK5 P05T
                </span>
            </div>

            <div className={styles.navbar}>
                <div className={styles.navbarBrand}>
                    <Link href='/'><div><h3 className={styles.imgLink}>Business Brand</h3></div></Link>
                </div>
                <div className={styles.collapseIcon} onClick={toggleOpen}>
                    &#9776;
                </div>
                <div className={styles.navbarCollapse}>
                    <div className={styles.navbarNav}>
                        <nav>
                            <ul className={styles.navbarList}>
                                <Link href='/about'>
                                    <li className={styles.navbarItem}>
                                        <a>About Us</a>
                                    </li>
                                </Link>
                                <Link href='/blog'>
                                    <li className={styles.navbarItem}>
                                        <a>Blog</a>
                                    </li>
                                </Link>
                                <Link href='/contact'>
                                    <li className={styles.navbarItem}>
                                        <a>Contact</a>
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {open ?
                <div className={styles.navExpanded}>
                    <nav>
                        <ul>
                            <Link href='/about'>
                                <li className={styles.navbarExpandedItem}>
                                    <a>About Us</a>
                                </li>
                            </Link>
                            <Link href='/blog'>
                                <li className={styles.navbarExpandedItem}>
                                    <a>Blog</a>
                                </li>
                            </Link>
                            <Link href='/contact'>
                                <li className={styles.navbarExpandedItem}>
                                    <a>Contact</a>
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                : null}
        </div>
    )
}


