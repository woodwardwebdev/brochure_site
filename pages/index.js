import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UK Business Brokers | Buy & Sell Your Business | Stone Fairview</title>
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>

        {/* Hero Image Section */}

        <section className={styles.heroImage}>
          <div className={styles.splashContent}>
            <h1 className={styles.mainHeader}>UK BUSINESS BROKERS</h1>
            <h5>Discover The Future Of Business Sales</h5>
            <p>
              If you want to sell your business, then you can trust Stone Fairview to help
              As an award winning agent, we combine cutting-edge technology with decades of experience
              to find the perfect buyer for your business
            </p>
            <button className={styles.ctaBtn}>Make an Enquiry</button>
          </div>
        </section>

        {/* 2 Column Intro Section */}

        <section className={styles.twoColLayout}>

          <div className={styles.section2Col1}>
            <h2>Expert Business Brokers That You Can Trust</h2>
            <p>
              Drawing on Years of Experience, the professionals at Stone Fairview stand ready to guide you
              through the process of selling your company or business - no matter what stage you are at.
              With our state-of-the-art technology and traditional values, you can be sure that your sale will be a success.
            </p>
            <p>
              From Large corporate structures to family firms that are years in the making, we know that building a
              business is hard work - so let us help you to achieve the best possible outcome from your exit strategy
            </p>
            <button className={styles.ctaBtn} >Sell Your Business</button>
          </div>
          <div className={styles.section2Col1}>
            <div className={styles.stackedImgDiv}>
              <img src='/img/businessmen.jpg' alt='business men' className={styles.stackedImg} />
            </div>
          </div>
        </section>

        {/* Why Choose Stone Fairview section */}
        <section className={styles.whyChooseSection}>
          <div className={styles.chooseHeader}>
            <h2>Why Choose Stone Fairview?</h2>
          </div>
          <div className={styles.threeColGrid}>
            <div className={`${styles.whiteBgCol} ${styles.whyChooseCol1} ${styles.blueTop}`}>
              <h3>SELL A COMPANY</h3>
              <p>We understand that selling a company can prove challenging even to the most seasoned commercial professionals.
              That’s why Stone Fairview’s team of company sale specialists are constantly improving their knowledge of the
              corporate market whilst expanding their network of potential buyers across international borders.
             </p>
              <p>
                From complex company structures to expansive corporations, we keep ourselves in the detail and are proud of our
                thorough due diligence process. From marketing to negotiations, hands on involvement is our calling card and we
                are committed to providing a service that truly recognises, develops, and delivers on the exceptional value of
                the companies that we sell.
             </p>
              <button className={styles.ctaBtn} style={{ marginTop: 'auto' }}>Sell Your Business</button>
            </div>
            <div className={`${styles.whiteBgCol} ${styles.whyChooseCol2} ${styles.blueTop}`}>
              <h3>WE BROKER YOUR SALE</h3>
              <p>
                However big your organisation is, Stone Fairview can help you to sell it. Our proprietary SFX technology matches you,
                the seller, with eligible buyers all over the world. We also leverage our curated list of buyers and investors who are
                ready to take over the reins and let you move on to your next project.
              </p>
              <p>
                As the trusted partner of hundreds of owners and entrepreneurs, our business broker service will help you to realise the
                potential of the assets that you have built up. Speak with our experts today to understand more about how our business
                brokerage service can assist you with selling a company or business.
              </p>
              <button className={styles.ctaBtn} style={{ marginTop: 'auto' }}>Sell Your Business</button>
            </div>
            <div className={`${styles.whiteBgCol} ${styles.whyChooseCol3} ${styles.blueTop}`}>
              <h3>SELL YOUR BUSINESS</h3>
              <p>To sell a business is a big decision; we’re here to support you from the very beginning. From advising you on how to set
              the price through to finding a new owner, and helping you seal the deal, Stone Fairview will work to achieve your aim.
              </p>
              <p>
                We make the daunting task of selling your small business into a hassle-free process that will fulfil the promise of the
                future you’re looking for. With our help, you will be able to sell your successful business using our network of contacts,
                bespoke technology, and market-leading expertise.
              </p>
              <button className={styles.ctaBtn} style={{ marginTop: 'auto' }}>Sell Your Business</button>
            </div>
          </div>
        </section>

        {/* Sell Your Business With Brokers You Can Rely On Section */}

        <section className={styles.sellInfoSection}>
          <div className={styles.sellInfoText}>
            <h2>Sell your business with brokers you can rely on</h2>
            <p>
              We know the work that goes into creating and growing an idea into a successful operation. Once you've
              reached the point to move on to the next challenge, Stone Fairview will work with you to find the right
              person to take over the reins and buy your business for the right price.
        </p>
            <p>
              Whether you've built up your company with an eye on selling up from the outset, or have poured your career
              into a family firm, we're here to maximise your profit from the sale. Decades of experience in helping owners
              sell their business means we are equipped, ready and confident to facilitate the best deal for you.
        </p>
            <h2>A technology business with the personal touch</h2>
          </div>
          <div className={styles.threeColGrid}>
            <div className={styles.whiteBgCol}>
              <h5>SFX</h5>
              <p>
                SFX is our proprietary platform that combines machine learning and AI to search global markets
                for the ideal buyer for your business
              </p>
            </div>
            <div className={styles.whiteBgCol}>
              <h5>SF ASSOCIATES</h5>
              <p>
                We've curated a network comprised of thousands of international brokers, each specialising in
                certain sectors, giving our clients instant access to millions of potential buyers
              </p>
            </div>
            <div className={styles.whiteBgCol}>
              <h5>TALENT</h5>
              <p>
                We invest heavily in our team and only hire the best talent, which allows us to deliver the award
                winning level of service we have become renowned for
              </p>
            </div>
          </div>
          <div>
            <button className={styles.ctaBtn} >Sell Your Business</button>
          </div>
        </section>

        {/* Big Image Break Section */}

        <section className={styles.imgBreakSection} />

        {/* Buy a Business Section */}

        <section className={styles.buyBusinessSection}>
          <div className={styles.paddedContainer}>
            <div className={styles.twoColLayout}>
              <div className={styles.col1}>
                <h5>Buying a Business</h5>
                <p>
                  If you have ever wanted to start your business, now is the perfect opportunity. We understand your
                  needs, and you are not alone - over 80% of people in the UK dream of being self-employed. Our goal
                  is to help you along the way. At Stone Fairview, we know how risky it can be and why so many are
                  reluctant to try their luck.
              </p>
                <p>
                  Fortunately, with our help you won't need to be an expert to be successful. We will help you each
                  step of the way. First, we will present you with business opportunities for your need. But that's not
                  all - our job goes well beyond merely finding a business opportunity. On the contrary, our experts are
                  here to help you with everything you need to know about the dealm ensuring that you recieve accurate
                  legal and financial advice.
              </p>
                <p>
                  Why buy an established business instead of starting your own? Over 60% of start-up companies fail in
                  the first three years. On the other hand, already established businesses with a new owner show a
                  significantly higher success rate.
              </p>
              </div>
              <div className={styles.col2}>
                <h5>Buying a Business</h5>
                <p>
                  If you have ever wanted to start your business, now is the perfect opportunity. We understand your
                  needs, and you are not alone - over 80% of people in the UK dream of being self-employed. Our goal
                  is to help you along the way. At Stone Fairview, we know how risky it can be and why so many are
                  reluctant to try their luck.
              </p>
                <p>
                  Fortunately, with our help you won't need to be an expert to be successful. We will help you each
                  step of the way. First, we will present you with business opportunities for your need. But that's not
                  all - our job goes well beyond merely finding a business opportunity. On the contrary, our experts are
                  here to help you with everything you need to know about the dealm ensuring that you recieve accurate
                  legal and financial advice.
              </p>
                <p>
                  Why buy an established business instead of starting your own? Over 60% of start-up companies fail in
                  the first three years. On the other hand, already established businesses with a new owner show a
                  significantly higher success rate.
              </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values and Goals Section */}

        <section className={styles.valuesSection}>
          <div className={styles.sixtyContainer}>
            <h2>OUR VALUES AND GOALS</h2>
            <p>
              At Stone Fairview, we take care of our customers and ensure that both the buyer and seller are satisfied
              with the deal. Stone Fairview will guide you each step of the business sale; whether you are looking to
              buy a business, sell, or you need help with finances, we are here to help.
        </p>
            <p>
              We take pride in our team, and our main concern is our customers satisfaction. If you join us, you will
              get an opportunity to work with a dynamic, modern, flexible and caring team that will help you strike
              the best possible deal.
        </p>
            <p>
              We invest heavily in our team and only hire the most talented individuals, which allows us to deliver
              the award-winning level of service we have become renowned for.
        </p>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className={styles.ourApproachSection}>
          <div className={styles.sixtyContainer}>
            <div className={styles.approachIntroText}>
              <h2>OUR APPROACH</h2>
              <p>
                Almost every business owner has considered selling at one point. Sometimes the reason is retirement,
                desire to focus their interest on something new, or need for a change of scenery.
          </p>
              <p>
                Once you have joined us, you will be able to access our proprietary platform (SFX). Our finest experts
                designed SFX as a way to create a pool of aquirers. It is a combination of AI and machine learning,
                and will help us find you an ideal buyer.
          </p>
              <p>
                There are four key stages in our approach to selling a business.
              </p>
            </div>
            <div className={styles.fourByTwoCol}>
              <div className={styles.approachCol}>
                <h5>Evaluate</h5>
                <p>
                  To ensure the everything goes smoothly, we will evaluate your business. Our goal is to fully
                  understand your values, how you trade and the services you offer. That way, we can create a strategy
                  tailored just for you.
                </p>
              </div>
              <div className={styles.approachCol}>
                <h5>Key Connections</h5>
                <p>
                  Thanks to our cutting-edge software, we have access to a vast network of potential buyers. That will
                  allow us to easily connect you with parties that can do the best for your business, helping you make
                  the necessary connections to ensure further growth.
                </p>
              </div>
              <div className={styles.approachCol}>
                <h5>Showcase</h5>
                <p>
                  Your success is also our success. We will showcase your business and bring forward unique selling
                  points. The second stage will ensure that your business is unmissable to potential buyers. Our
                  marketing experts will ensure that they fully understand your operation to create unique
                  promotional strategies.
                </p>
              </div>
              <div className={styles.approachCol}>
                <h5>The Close</h5>
                <p>
                  We will cover every step of the process, and you will not have to deal with anything alone. With
                  dependable negotiators, you will have full support through the entire process. In short, we are
                  commited to managing every area of the transaction to pave the way for a smooth, succesful result.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}

        <section className={styles.contactSection}>
          <div className={styles.paddedContainer}>
            <div className={styles.threeColGrid}>
              <div className={styles.contactCol}>
                <img className={styles.contactWhiteLogo} src='/img/whiteLogo.png' />
                <div className={styles.contactSocials}>
                  <span className={styles.socialIcon}>Social 1</span>
                  <span className={styles.socialIcon}>Social 2</span>
                  <span className={styles.socialIcon}>Social 3</span>
                </div>
              </div>
              <div className={styles.contactCol}>
                <h5>Important Links</h5>
                <ul>
                  <li>Terms & Conditions</li>
                  <li>Cookie Policy</li>
                  <li>Privacy Policy</li>
                  <li>Sitemap</li>
                </ul>
              </div>
              <div className={styles.contactCol}>
                <h5>Contact Us</h5>
                <ul>
                  <li>01908 464280</li>
                  <li>info@stonefairview.co.uk</li>
                  <li>The Store, New Street, Stony Stratford Milton Keynes MK11 1BW</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div >
  )
}
