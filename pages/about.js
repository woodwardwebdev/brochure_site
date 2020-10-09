import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/About.module.css'

export default function AboutSF() {
    return (
        <div>
            <Header />
            <section className={styles.aboutContainer}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>The Leading Business Solutions Supplier</h1>
                </div>
                <div className={styles.twoCols}>
                    <div className={styles.gridItem}>
                        <h4>Title One</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a pellentesque purus.
                            Sed sollicitudin maximus tempus. Duis in felis vel nisl imperdiet condimentum. Morbi
                            viverra aliquam ullamcorper. Vivamus volutpat commodo leo, a porta nulla eleifend quis.
                            Curabitur ac ante in nulla luctus ornare quis a enim. Suspendisse a sapien vel nibh faucibus
                            tincidunt. Praesent arcu metus, finibus in efficitur in, tempor in diam. Donec mollis urna
                            sed ante egestas imperdiet.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a pellentesque purus.
                            Sed sollicitudin maximus tempus. Duis in felis vel nisl imperdiet condimentum. Morbi
                            viverra aliquam ullamcorper. Vivamus volutpat commodo leo, a porta nulla eleifend quis.
                            Curabitur ac ante in nulla luctus ornare quis a enim. Suspendisse a sapien vel nibh faucibus
                            tincidunt.
                        </p>
                    </div>
                    <div className={styles.gridItem}>
                        <img className={styles.gridImg} src='../img/work2.jpeg'></img>
                    </div>
                </div>
                <div className={styles.spacer} />
                <div className={styles.singleCol}>
                    <div className={styles.gridItem}>
                        <h4>Long Piece of Text</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus pulvinar purus,
                            malesuada mollis arcu euismod porta. Ut convallis, sapien eu dictum molestie, dolor diam
                            efficitur justo, non mattis lorem enim et sem. Maecenas tristique, velit suscipit consequat
                            lacinia, elit enim pharetra tortor, ac consectetur enim ligula a lorem. Ut malesuada, erat
                            non tempor sollicitudin, mauris enim tristique nisi, eget hendrerit tellus nisi nec tellus.
                            Duis eu lectus malesuada, egestas dui vitae, vehicula enim. Curabitur lobortis vel ante eu auctor.
                            Aliquam a scelerisque orci.
                        </p>
                        <p>
                            Ut sed quam ac urna facilisis dapibus. Nulla viverra scelerisque arcu sed imperdiet. Pellentesque
                            volutpat, dui in condimentum aliquet, metus sapien mollis massa, sit amet fermentum dui turpis
                            vitae orci. Maecenas ut felis non felis semper porttitor eget vel sapien. Maecenas lobortis blandit
                            metus, sed interdum felis tincidunt sed. In eros nibh, tincidunt in enim et, imperdiet interdum neque.
                            Pellentesque sit amet lectus vitae est ornare lobortis et ac enim. Donec interdum ligula vitae varius
                            faucibus. Ut ornare, turpis eget interdum hendrerit, velit erat tristique nibh, ac hendrerit turpis sem
                            mollis magna. Praesent a suscipit dui. Cras in nisi lacus. Suspendisse suscipit lacinia bibendum. Donec
                            viverra dapibus dolor nec lobortis. In nunc est, elementum quis velit et, egestas eleifend erat. Cras
                            consectetur libero lectus, a malesuada magna maximus et. Phasellus ullamcorper commodo aliquam.
                        </p>
                    </div>
                </div>
                <div className={styles.spacer2} />
                <div className={styles.threeCols}>
                    <div className={styles.gridItem}>
                        <img className={styles.gridImg} src='../img/work1.jpeg'></img>
                    </div>
                    <div className={styles.gridItem}>
                        <h4>Title Two</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a pellentesque purus.
                            Sed sollicitudin maximus tempus. Duis in felis vel nisl imperdiet condimentum. Morbi
                            viverra aliquam ullamcorper. Vivamus volutpat commodo leo, a porta nulla eleifend quis.
                            Curabitur ac ante in nulla luctus ornare quis a enim. Suspendisse a sapien vel nibh faucibus
                            tincidunt. Praesent arcu metus, finibus in efficitur in, tempor in diam. Donec mollis urna
                            sed ante egestas imperdiet.
                        </p>
                    </div>
                    <div className={styles.gridItem}>
                        <img className={styles.gridImg} src='../img/work3.jpeg'></img>
                    </div>
                </div>
                <div className={styles.spacer3} />

            </section>
            <Footer />
        </div>
    )
}