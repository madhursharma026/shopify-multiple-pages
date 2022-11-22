import Link from 'next/link'
import styles from '../../styles/footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <div className={`${styles.footerContainer}`} style={{ background: "#002E25", color: "white" }}>
            <ul className='p-0 m-0' style={{ listStyleType: "none", display: "inline" }}>
                <Link href="/" className={`${styles.footerHorizontalOptions} py-2 py-md-4 px-2`}>About</Link>
                <Link href="/" className={`${styles.footerHorizontalOptions} py-2 py-md-4 px-2`}>Careers</Link>
                <Link href="/" className={`${styles.footerHorizontalOptions} py-2 py-md-4 px-2`}>Press and Media</Link>
                <Link href="/" className={`${styles.footerHorizontalOptions} py-2 py-md-4 px-2`}>Shopify</Link>
                <Link href="/" className={`${styles.footerHorizontalOptions} py-2 py-md-4 px-2`}>Plus</Link>
                <Link href="/" className={`${styles.footerHorizontalOptions} py-2 py-md-4 px-2`}>Sitemap</Link>
            </ul>
            <hr style={{ marginTop: "-0px", height: "2px", color: "#29695c" }} />
            <div className={`${styles.footerOptionsBeforeMDScrn}`}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <h6>ONLINE STORE</h6>
                            <div className="col-md-4">
                                <Link href="/" className={`${styles.footerOptions}`}>Sell online</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Examples</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Website builder</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Online retail</Link><br />
                            </div>
                            <div className="col-md-4">
                                <Link href="/" className={`${styles.footerOptions}`}>Ecommerce website</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Domain names</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Shopping cart</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Ecommerce hosting</Link><br />
                            </div>
                            <div className="col-md-4">
                                <Link href="/" className={`${styles.footerOptions}`}>Mobile commerce</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Online store builder</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Dropshipping Business</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Store themes</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <h6>POINT OF SALE</h6>
                                <Link href="/" className={`${styles.footerOptions}`}>Point of sale</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Features</Link><br />
                            </div>
                            <div className="col-md-4">
                                <h6>SUPPORT</h6>
                                <Link href="/" className={`${styles.footerOptions}`}>24/7 support</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Shopify Help Center</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Shopify Community</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>API documentation</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Free tools</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Free stock photos</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Websites for sale</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Logo Maker</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Business name generator</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Research</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Legal</Link><br />
                            </div>
                            <div className="col-md-4">
                                <h6>SHOPIFY</h6>
                                <Link href="/" className={`${styles.footerOptions}`}>Contact</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Partner program</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Affiliate program</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>App developers</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Investors</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Blog topics</Link><br />
                                <Link href="/" className={`${styles.footerOptions}`}>Community Events</Link><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`${styles.footerOptionsAfterMDScrn}`}>
                <div className="row">
                    <div className="col-6">
                        <h6>ONLINE STORE</h6>
                        <Link href="/" className={`${styles.footerOptions}`}>Sell online</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Examples</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Website builder</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Online retail</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Ecommerce website</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Domain names</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Shopping cart</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Ecommerce hosting</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Mobile commerce</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Online store builder</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Dropshipping Business</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Store themes</Link><br />
                    </div>
                    <div className="col-6">
                        <h6>POINT OF SALE</h6>
                        <Link href="/" className={`${styles.footerOptions}`}>Point of sale</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Features</Link><br />
                        <h6 className='mt-4'>SUPPORT</h6>
                        <Link href="/" className={`${styles.footerOptions}`}>24/7 support</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Shopify Help Center</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Shopify Community</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>API documentation</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Free tools</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Free stock photos</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Websites for sale</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Logo Maker</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Business name generator</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Research</Link><br />
                        <Link href="/" className={`${styles.footerOptions}`}>Legal</Link><br />
                    </div>
                    <h6>SHOPIFY</h6>
                    <Link href="/" className={`${styles.footerOptions}`}>Contact</Link><br />
                    <Link href="/" className={`${styles.footerOptions}`}>Partner program</Link><br />
                    <Link href="/" className={`${styles.footerOptions}`}>Affiliate program</Link><br />
                    <Link href="/" className={`${styles.footerOptions}`}>App developers</Link><br />
                    <Link href="/" className={`${styles.footerOptions}`}>Investors</Link><br />
                    <Link href="/" className={`${styles.footerOptions}`}>Blog topics</Link><br />
                    <Link href="/" className={`${styles.footerOptions}`}>Community Events</Link><br />
                </div>
            </div>
            <hr style={{ height: "2px", color: "#29695c" }} />
            <div>
                <div className="row">
                    <div className={`col-md-5 ${styles.footerOptionLeft} mt-3`}>
                        <FaFacebook style={{ fontSize: "20px", marginRight: "20px" }} />
                        <FaTwitter style={{ fontSize: "20px", marginRight: "20px" }} />
                        <FaYoutube style={{ fontSize: "20px", marginRight: "20px" }} />
                        <FaInstagram style={{ fontSize: "20px", marginRight: "20px" }} />
                        <FaLinkedinIn style={{ fontSize: "20px", marginRight: "20px" }} />
                        <FaPinterest style={{ fontSize: "20px", marginRight: "20px" }} />
                    </div>
                    <div className={`col-md-7 ${styles.footerOptionRight} mt-3`}>
                        <Link href="/" className={`${styles.footerOptionsLast} px-2`}>Terms of Service</Link>
                        <Link href="/" className={`${styles.footerOptionsLast} px-2`}>Privacy Policy</Link>
                        <select style={{ background: "transparent", border: "0", color: "white" }}>
                            <option style={{ background: 'black' }} value="">India</option>
                            <option style={{ background: 'black' }} value="">Option 2</option>
                            <option style={{ background: 'black' }} value="">Option 3</option>
                            <option style={{ background: 'black' }} value="">Option 4</option>
                        </select>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
