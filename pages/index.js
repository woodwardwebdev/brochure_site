import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>

        {/* Hero Image Section */}

        <section className={styles.heroImage}>
          <div className={styles.splashContent}>
            <h1 className={styles.mainHeader}>Business Brochure Site</h1>
            <h5>Snappy Business Subtitle</h5>
            <p>
              Tagline to explain what our business does best
            </p>
            <button className={styles.ctaBtn}>Make an Enquiry</button>
          </div>
        </section>

        {/* 2 Column Intro Section */}

        <section className={styles.twoColLayout}>

          <div className={styles.section2Col1}>
            <h2>Expert Business Brochure</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
              neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
              eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
              semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
              neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
              eget magna semper euismod eget in ipsum. Donec a dolor erat.
            </p>
            <button className={styles.ctaBtn} >CLICK ME</button>
          </div>
          <div className={styles.section2Col1}>
            <img src='/img/businessmen.jpeg' alt='business men' className={styles.stackedImg} />
          </div>
        </section>

        {/* Why Choose Us section */}
        <section className={styles.whyChooseSection}>
          <div className={styles.chooseHeader}>
            <h2>LOREM IPSUM</h2>
          </div>
          <div className={styles.threeColGrid}>
            <div className={`${styles.whiteBgCol} ${styles.whyChooseCol1} ${styles.blueTop}`}>
              <h3>CONSECTETUR</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
                semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
             </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
                semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
             </p>
              <button className={styles.ctaBtn} style={{ marginTop: 'auto' }}>Click Me</button>
            </div>
            <div className={`${styles.whiteBgCol} ${styles.whyChooseCol2} ${styles.blueTop}`}>
              <h3>MAGNA ALIQUET LACUS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                eget magna semper euismod eget in ipsum. Donec a dolor erat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
                semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
              </p>
              <button className={styles.ctaBtn} style={{ marginTop: 'auto' }}>Click Me</button>
            </div>
            <div className={`${styles.whiteBgCol} ${styles.whyChooseCol3} ${styles.blueTop}`}>
              <h3>MAGNA SEMPER</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                eget magna semper euismod eget in ipsum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
                semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
              </p>
              <button className={styles.ctaBtn} style={{ marginTop: 'auto' }}>CLICK ME</button>
            </div>
          </div>
        </section>

        {/* Sell Your Business With Brokers You Can Rely On Section */}

        <section className={styles.sellInfoSection}>
          <div className={styles.sellInfoText}>
            <h2>Descriptive Large Headline</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
              neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
              eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
              semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
        </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
              neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
              eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
              semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
        </p>

          </div>

          <div className={styles.colsContain}>
            <h2>Three Columns Of Interest</h2>
            <div className={styles.threeColGrid}>
              <div className={styles.whiteBgCol}>
                <h5>BACON</h5>
                <p>
                  Bacon is one of the greatest things known to humankind. It has a place on many tables, with many people
                  swearing by it's healing properties.
              </p>
              </div>
              <div className={styles.whiteBgCol}>
                <h5>CHORIZO</h5>
                <p>
                  Rich in paprika and health benefits, chorizo can be eaten for every single meal without any sort
                  of adverse effect. This has not been verified with a medial professional though.
              </p>
              </div>
              <div className={styles.whiteBgCol}>
                <h5>YORKSHIRE</h5>
                <p>
                  The perfect blend of crispy and mushy, with a delicious taste, yorkshires go with any roasted
                  meal. Anyone that disagrees is clearly lacking in the taste department.
              </p>
              </div>
            </div>
          </div>
          <div>
            <button className={styles.ctaBtn} >Click Me</button>
          </div>
        </section>

        {/* Big Image Break Section */}

        <section className={styles.imgBreakSection} />

        {/* Buy a Business Section */}

        <section className={styles.buyBusinessSection}>
          <div className={styles.paddedContainer}>
            <div className={styles.twoColLayout}>
              <div className={styles.col1}>
                <h3>Column One</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                  neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                  eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
                  semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
              </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                  neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                  eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
                  semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
              </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                  neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                  eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
                  semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
              </p>
              </div>
              <div className={styles.col2}>
                <h3>Column Two</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                  neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                  eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
                  semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
              </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                  neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                  eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
                  semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
              </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                  neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                  eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
                  semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
              </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values and Goals Section */}

        <section className={styles.valuesSection}>
          <div className={styles.sixtyContainer}>
            <h2>More Descriptive Text</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
              neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
              eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
              semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
        </p>
            <p>
              Proin sit amet diam sed risus consequat semper. Aliquam faucibus metus a blandit imperdiet.
              Sed malesuada ipsum ac dolor tristique hendrerit.
        </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
              neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
              eget magna semper euismod eget in ipsum.
        </p>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className={styles.ourApproachSection}>
          <div className={styles.sixtyContainer}>
            <div className={styles.approachIntroText}>
              <h2>Intro to Services</h2>
              <p>
                Proin sit amet diam sed risus consequat semper. Aliquam faucibus metus a blandit imperdiet.
                Sed malesuada ipsum ac dolor tristique hendrerit.
          </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                eget magna semper euismod eget in ipsum.
          </p>
              <p>
                Proin sit amet diam sed risus consequat semper.
              </p>
            </div>
            <div className={styles.fourByTwoCol}>
              <div className={styles.approachCol}>
                <h5>Lorem</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                  neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                  eget magna semper euismod eget in ipsum. Donec a dolor erat.
                </p>
              </div>
              <div className={styles.approachCol}>
                <h5>Ipsum</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                  neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                  eget magna semper euismod eget in ipsum. Donec a dolor erat.
                </p>
              </div>
              <div className={styles.approachCol}>
                <h5>Dolor</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                  neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                  eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
                  semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
                </p>
              </div>
              <div className={styles.approachCol}>
                <h5>Sit Amet</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et magna libero. Ut egestas,
                  neque nec vehicula fringilla, est magna aliquet lacus, ut tempor tellus urna vel ante. Duis sit amet est
                  eget magna semper euismod eget in ipsum. Donec a dolor erat. Proin sit amet diam sed risus consequat
                  semper. Aliquam faucibus metus a blandit imperdiet. Sed malesuada ipsum ac dolor tristique hendrerit.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div >
  )
}
