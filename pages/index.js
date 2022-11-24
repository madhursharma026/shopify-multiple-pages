import HeaderHomepage from "./Components/HeaderHomepage"
import styles from '../styles/home.module.css'
import { FaArrowRight, FaImage } from "react-icons/fa";
import Link from "next/link";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div style={{ background: 'white', maxHeight: "100%", minHeight: "100vh", overflowX: "hidden" }}>
      <HeaderHomepage />
      <div className={`${styles.mainContainer} row p-0 pt-5`} style={{ background: '#FDF8EE' }}>
        <div className="col-xl-6 pt-5 mt-5" style={{ paddingLeft: "calc(5% + 18px)" }}>
          <h1 style={{ maxWidth: '20ch', color: "#004c3f",  fontWeight: "800", lineHeight: '1.375' }}>The easiest way to sell online in India</h1>
          <p className="text-secondary mt-4" style={{ fontSize: "1.3em", lineHeight: "1.3333333333", maxWidth: '50ch' }}>
            Try one of the most powerful platforms on the market for free. No technical knowledge needed.
          </p>
          <div class="input-group mt-4" style={{ height: "50px", maxWidth: '70ch' }}>
            <input type="text" className="form-control" placeholder="Enter Your email address" aria-describedby="inputBtn" />
            <button className="btn btn-outline-secondary" type="button" id="inputBtn" style={{ background: "#004C3F", color: "white" }}><b>Try for free</b></button>
          </div>
          <p className="mt-3" style={{ fontSize: "13px", maxWidth: '80ch' }}>Try Shopify free for 3 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</p>
        </div>
        <div className="col-xl-6">
          <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/hero/in-hero-product-small-0c64c4c1013fc8ac477cb5ff62bf5b56b2903aec697e6b708b90d3b65a09baf8.jpg" alt="#ImgNotFound" className="w-100 p-0 m-0" />
        </div>
      </div>

      <div className={`${styles.mainContainer} row`} style={{ background: '#004C3F', padding: '60px' }}>
        <h1 className="text-white mt-4">Bring your business online</h1>
        <div className="row">
          <div className="col-xxl-10">
            <p className="text-white">Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day.</p>
          </div>
          <div className="col-xxl-2">
            <h6 className="text-white">Explore more examples <FaArrowRight /></h6>
          </div>
          <div className={`my-5 col-6 col-md ${styles.img1}`}>
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/blue-tokai/home-example-small-4144844351e226a9896cffee4bebdaeecb17897116c33a753bfd086b8b621e74.jpg" alt="#ImgNotFound" className="w-100" />
            <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight:"500" }}>FOOD &  DRINK</Link>
            <h6 className="text-white">Blue Tokai</h6>
          </div>
          <div className={`my-5 col-6 col-md ${styles.img2}`}>
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/quirksmith/home-example-small-8b1c6b138414b76150e6e00f5143c4301a07b708aa6113dd7096f4340ddfecad.jpg" alt="#ImgNotFound" className="w-100" />
            <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight:"500" }}>JEWELRY</Link>
            <h6 className="text-white">Quirksmith</h6>
          </div>
          <div className={`my-5 col-6 col-md ${styles.img3}`}>
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/crossbeats/home-example-small-099933088cbe804543fbb1b0963a5d0a16365e73e6000949b5b0ab2bf4b21503.jpg" alt="#ImgNotFound" className="w-100" />
            <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight:"500" }}>ELECTRONICS</Link>
            <h6 className="text-white">Crossbeats</h6>
          </div>
          <div className={`my-5 col-6 col-md ${styles.img4}`}>
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/mcaffeine/home-example-small-26afc247af7a3a7b1c9c585a645ccdff26e76156e98be7d9ff0fe9ecd4d3b675.jpg" alt="#ImgNotFound" className="w-100" />
            <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight:"500" }}>BEAUTY</Link>
            <h6 className="text-white">Mcaffeine</h6>
          </div>
          <div className={`my-5 col ${styles.img5}`}>
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/bunaai/home-example-small-4575b175c798e22af5531bae02621396add507433f771db37b1515e9941f8a45.jpg" alt="#ImgNotFound" className="w-100" />
            <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight:"500" }}>FASHION</Link>
            <h6 className="text-white">Bunaai</h6>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-white" style={{fontWeight:"450"}}>
            Take the best path forward
          </h2>
          <div className="row">
            <div className="col-md-6 col-lg-3 mt-3">
              <FaImage className="text-white" style={{ fontSize: "30px" }} />
              <h5 className="text-white mt-3">Start an online business</h5>
              <p className="text-white">
                Create a business, whether you’ve got a fresh idea or are looking for a new way to make money.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 mt-3">
              <FaImage className="text-white" style={{ fontSize: "30px" }} />
              <h5 className="text-white mt-3">Move your business online</h5>
              <p className="text-white">
                Turn your retail store into an online store and keep serving customers without missing a beat.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 mt-3">
              <FaImage className="text-white" style={{ fontSize: "30px" }} />
              <h5 className="text-white mt-3">Switch to Shopify</h5>
              <p className="text-white">
                Bring your business to Shopify, no matter which ecommerce platform you’re currently using.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 mt-3">
              <FaImage className="text-white" style={{ fontSize: "30px" }} />
              <h5 className="text-white mt-3">Hire a Shopify expert</h5>
              <p className="text-white">
                Get set up with the help of a trusted freelancer or agency from the Shopify Experts Marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>


      <h2 style={{ fontWeight: '500' }} className='text-center mt-5'>
        With you wherever you’re going
      </h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <p className="text-center px-3" style={{ fontSize: '20px' }}>
            One platform with all the ecommerce and point of sale features you need to start, run, and grow your business.
          </p>
        </div>
      </div>

      <div className={`container-md ${styles.imageAndContent}`}>
        <div className='row mt-5 px-3'>
          <div className="order-lg-2 col-lg-6 mb-3">
            <h2 className="mt-lg-5">Sell everywhere</h2>
            <p className="text-secondary">Use one platform to sell products to anyone, anywhere—in person with Point of Sale and online through your website, social media, and online marketplaces.</p>
            <Link href='/' className="text-success" style={{ textDecoration: "none", fontSize: "18px" }}><b>Explore ways to sell <FaArrowRight /></b></Link>
          </div>
          <div className="col-lg-6">
            <video muted autoPlay loop width='100%'>
              <source src='https://cdn.shopify.com/shopifycloud/brochure/assets/home/sell-animation-desktop-e91e64db2d38816861b2eb3243eb9d8b28225f47269954d9f257cc850bb2f33a.mp4' />
            </video>
          </div>
        </div>
      </div>

      <div className={`container-md ${styles.imageAndContent}`}>
        <div className='row mt-5 px-3'>
          <div className="col-lg-6 mb-3">
            <h2 className="mt-lg-5">Market your business</h2>
            <p className="text-secondary">Take the guesswork out of marketing with built-in tools that help you create, execute, and analyze digital marketing campaigns.</p>
            <Link href='/' className="text-success" style={{ textDecoration: "none", fontSize: "18px" }}><b>Explore how to market your business  <FaArrowRight /></b></Link>
          </div>
          <div className="col-lg-6">
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/market-small-084eab2d72b510555838c446501d27dd7380585450efcaaa97453289b2b69c79.jpg" alt="#ImgNotFound" className="w-100" />
          </div>
        </div>
      </div>

      <div className={`container-md ${styles.imageAndContent} mb-5`}>
        <div className='row mt-5 px-3'>
          <div className="order-lg-2 col-lg-6 mb-3">
            <h2 className="mt-lg-5">Manage everything</h2>
            <p className="text-secondary">Gain the insights you need to grow—use a single dashboard to manage orders, shipping, and payments anywhere you go.</p>
            <Link href='/' className="text-success" style={{ textDecoration: "none", fontSize: "18px" }}><b>Explore how to manage your business  <FaArrowRight /></b></Link>
          </div>
          <div className="col-lg-6">
            <img src="https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg" alt="#ImgNotFound" className="w-100" />
          </div>
        </div>
      </div>

      <div className={`${styles.mainContainer} row p-5`} style={{ background: '#FDF8EE', marginTop: "100px" }}>
        <h2 style={{ fontWeight: '400' }}>Explore more from Shopify in India</h2>
        <div className="row mt-5">
          <div className="order-md-2 col-md-6 p-0">
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/card-collection/india-experts-small-432c16e7cd8ec09f3ae3aca42c58775001d5dc511e70608476ed7ee0e2d2e2c5.jpg" alt="#ImgNotFound" style={{ width: '100%', height: "330px" }} />
          </div>
          <div className="col-md-6 bg-white p-0 p-4">
            <h6><b>START</b></h6>
            <h3 className='pt-4' style={{ fontWeight: "400" }}>Launch your store with the help of a Shopify Expert</h3>
            <p className="text-muted py-3">
              Find hundreds of experts from India ready to help you get your store up and running, from choosing a theme to building a fully customized site.
            </p>
            <Link href='/' className="text-success" style={{ textDecoration: "none", fontSize: "18px" }}><b>Browse Experts in India  <FaArrowRight /></b></Link>
          </div>
        </div>
      </div>

      <div className={`${styles.mainContainer} row pt-5`} style={{ background: 'white' }}>
        <div className="container-lg">
          <h3 style={{ fontWeight: "400" }}>Empowering independent business <br className={`${styles.brBeforeLgScrn}`} /> owners everywhere</h3>
          <h3 style={{ fontWeight: "400" }} className='py-3'>Millions of businesses in 175 countries around the world have <br className={`${styles.brBeforeLgScrn}`} /> made over <b>$496 billion USD</b> in sales using Shopify.</h3>
          <Link href='/' className="text-success" style={{ textDecoration: "none", fontSize: "18px" }}><b>Learn more about Shopify <FaArrowRight /></b></Link>
        </div>
        <div className="text-center">
          <img src="https://i.pinimg.com/originals/cb/84/69/cb8469937ece31c5a4598126a660116e.gif" alt="ImgNotFound" style={{ maxWidth: "800px", width: "100%" }} />
        </div>

        <div className="row mt-5 pt-5">
          <div className="col-lg-6 p-0" style={{ display: "flex", flexWrap: "nowrap" }}>
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/alicia-souza/alicia-souza-testimonial@desktop-d947199e09069edaf78e332d87ba932b45805e3c91d032ba8a083a6f67ad04b5.jpg" alt="#ImgNotFound" className="w-100" />
          </div>
          <div className="col-lg-6 p-0 p-xl-5" style={{ background: "#002E25", display: "flex", flexWrap: "nowrap" }}>
            <div className="text-center text-white p-3 p-lg-5">
              <h2>
                “Shopify was my knight in shining armor when I exhausted every other possibility of getting my online store up and running. It was stunningly easy to use, with more features and plug-ins that I didn’t even know I wanted.”
              </h2>
              <br />
              <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/testimonials/logo-alicia-souza-small-4ac1bd956b9bf4d8fd78b6597f24ba9379714861042d3a199065b704a11657e6.png" alt="#ImgNotFound" className="my-5" />
              <h4 className="text-center text-white">Alicia | Alicia Souza</h4>
            </div>
          </div>
        </div>

        <div className="row py-5">
          <div className="col-4 col-md py-2 text-center">
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/bajaao-small-6ca0459c2a2fc6a57654d85cd1f053828d7fee97ecf7ff6dd8a1c460d0a5d344.png" alt="#ImgNotFOund" />
          </div>
          <div className="col-4 col-md py-2 text-center">
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/johnjacobs-small-79aa379de8a1c0d6df1c33af8c63a677871164315ccbc495423aeaead650d53a.png" alt="#ImgNotFOund" />
          </div>
          <div className="col-4 col-md py-2 text-center">
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/kylie-small-4e25b192755f809e9795d9f3722f3fa6b46da1fdc2a48b3ec8b6311f50f83ac7.png" alt="#ImgNotFOund" />
          </div>
          <div className="col-4 col-md py-2 text-center">
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/nush-small-04d75ec8d5b3e20b6e227006c23759c8b65efd482808aff0fc17140c5efb36cc.png" alt="#ImgNotFOund" />
          </div>
          <div className="col-4 col-md py-2 text-center">
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/yogabar-small-a41c8bbe605289256552b537eb1bbf993845442c3af43ff4f8f1ed932a7b3609.png" alt="#ImgNotFOund" />
          </div>
          <div className="col-4 col-xl py-2 col-md-6 text-center">
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/starstruck-small-6d49ff528f3ef3217015f906a1ece473e2559688669d00e2b88e7be4f65ce3bf.png" alt="#ImgNotFOund" />
          </div>
          <div className="col-xl py-2 col-md-6 text-center">
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/mcaffeine-small-0c55170838a60e6a490dac7732d44f988f754de89d790de26b0d8e50a01029b4.png" alt="#ImgNotFOund" />
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 p-0 p-5" style={{ background: '#FBF7ED', display: "flex" }}>
            <div className="p-md-5">
              <h1>
                Get the help you need, every step of the way
              </h1>
              <div className="row pt-5">
                <div className="col-6">
                  <h6>Shopify support</h6>
                  <p className="text-muted" style={{ fontSize: "18px", fontWeight: "350" }}>
                    Contact support 24/7, whether you’re troubleshooting issues or looking for business advice.
                  </p>
                  <Link href='/' className="text-success" style={{ textDecoration: "none", fontSize: "15px" }}><b>Contact support <FaArrowRight /></b></Link>

                  <h6 className="pt-4">Shopify Experts Marketplace</h6>
                  <p className="text-muted" style={{ fontSize: "18px", fontWeight: "350" }}>
                    Hire a Shopify expert to help you with everything from store setup to SEO.
                  </p>
                  <Link href='/' className="text-success" style={{ textDecoration: "none", fontSize: "15px" }}><b>Explore the Shopify Experts Marketplace <FaArrowRight /></b></Link>
                </div>
                <div className="col-6">
                  <h6>Shopify App Store</h6>
                  <p className="text-muted" style={{ fontSize: "18px", fontWeight: "350" }}>
                    Add features and functionality to your business with 6,000+ apps that integrate directly with Shopify.
                  </p>
                  <Link href='/' className="text-success" style={{ textDecoration: "none", fontSize: "15px" }}><b>Visit the Shopify App Store  <FaArrowRight /></b></Link>
                </div>
              </div>
              <h6 className="pt-4">Shopify Experts Marketplace</h6>
              <p className="text-muted" style={{ fontSize: "18px", fontWeight: "350", width: "300px" }}>
                Hire a Shopify expert to help you with everything from store setup to SEO.
              </p>
              <Link href='/' className="text-success" style={{ textDecoration: "none", fontSize: "15px" }}><b>Explore the Shopify Experts Marketplace <FaArrowRight /></b></Link>
            </div>
          </div>
          <div className="col-xl-6 p-0" style={{ display: "flex" }}>
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/help@desktop-9a31a38edab7cba3389c5d71eccb81ab32d24e0eeb40c8eac3568d98bc179e1e.jpg" alt="#ImgNotFound" className="w-100" />
          </div>
        </div>
      </div>

      <div className="text-center my-5">
        <h2 style={{ fontWeight: "400" }}>Start your business journey with Shopify</h2>
        <p className="text-muted px-3">
          Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.
        </p>
        <button style={{ borderRadius: "4px", fontSize: "1em", background: "#008060", boxShadow: "0 5px 15px 0 rgb(0 0 0 / 15%)", borderColor: "transparent", color: "white", fontWeight: '700' }} id="button-addon2" className="p-2">
          Start Free Trial
        </button>
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  )
}
