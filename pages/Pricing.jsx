import Header from "./Components/Header";
import styles from '../styles/pricing.module.css'
import { FaPlus } from "react-icons/fa";
import Link from 'next/link'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Footer from "./Components/Footer";

function Pricing() {
    return (
        <div style={{ background: 'white', maxHeight: "100%", minHeight: "100vh" }}>
            <Header />
            <div className="text-center" style={{ paddingTop: "6em", paddingBottom: "6em", marginTop: "80px" }}>
                <h1 style={{ fontSize: '2.5em', fontWeight: "400" }}>Start your ecommerce website now, pick a plan later</h1>
                <p className="text-secondary" style={{ fontSize: '1.25em' }}>
                    Try Shopify free for 3 days, no payment information required
                </p>
                <button style={{ borderRadius: "4px", fontSize: "1em", background: "#008060", boxShadow: "0 5px 15px 0 rgb(0 0 0 / 15%)", borderColor: "transparent", color: "white", padding: "1em 1.8125em", fontWeight: '700' }}>Start your free trial</button>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 mt-3" style={{ display: "flex", cursor: "pointer" }}>
                        <div class={`${styles.card} w-100`}>
                            <div class="card-body text-center">
                                <h4>Basic</h4>
                                Ideal for new eCommerce business
                                <h1><b><sup>₹</sup>1499</b><sub style={{ fontSize: "15px" }}>/mo</sub></h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-3" style={{ display: "flex", cursor: "pointer" }}>
                        <div class={`${styles.card} w-100`}>
                            <div class="card-body text-center">
                                <h4>Shopify</h4>
                                Ideal for expanding business with consistent online sales
                                <h1><b><sup>₹</sup>5999</b><sub style={{ fontSize: "15px" }}>/mo</sub></h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 offset-md-3 offset-lg-0 col-lg-4 mt-3" style={{ display: "flex", cursor: "pointer" }}>
                        <div class={`${styles.card} w-100`}>
                            <div class="card-body text-center">
                                <h4>Advanced</h4>
                                Ideal for established business with high-volume sales
                                <h1><b><sup>₹</sup>22680</b><sub style={{ fontSize: "15px" }}>/mo</sub></h1>
                            </div>
                        </div>
                    </div>


                    <p className="text-success text-center mt-5">
                        <span style={{ fontSize: '18px', cursor: "pointer" }}><FaPlus style={{ marginTop: "-5px" }} /> Show plan features</span>
                    </p>

                    <div className="row text-center px-md-5 mt-5">
                        <div className="col-md-6">
                            <img src="https://cdn.shopify.com/s/files/1/0515/9508/3946/files/shopify-plus-logo--black_1024x1024.png?v=1649930001" alt="#ImgNotFound" width="120px" />
                            <p className="text-secondary" style={{ fontSize: "1.15em" }}>
                                Enterprise-grade solutions for high volume merchants, and large businesses.
                            </p>
                            <Link href="/" className={`${styles.LearnNewPlan} text-success`} style={{ fontSize: "1.15em" }}>Learn more about Shopify Plus</Link>
                        </div>
                        <div className="col-md-6">
                            <h5>Starter</h5>
                            <p className="text-secondary" style={{ fontSize: "1.15em" }}>
                                Sell products through social and messaging apps for only ₹399 INR per month.
                            </p>
                            <Link href="/" className={`${styles.LearnNewPlan} text-success`} style={{ fontSize: "1.15em" }}>Learn more about Starter plan</Link>
                        </div>

                        <p className="my-5">
                            All payments will be billed in your selected currency.
                        </p>
                    </div>


                    <div className={`${styles.bgDivChange} py-5 my-5 text-center`}>
                        <h1 style={{ fontSize: '2.5em', fontWeight: "400" }}>Start your ecommerce website now, pick a plan later</h1>
                        <button className="mt-4" style={{ borderRadius: "4px", fontSize: "1em", background: "#008060", boxShadow: "0 5px 15px 0 rgb(0 0 0 / 15%)", borderColor: "transparent", color: "white", padding: "1em 1.8125em", fontWeight: '700' }}>Start your free trial</button>
                    </div>

                    <div className={`row my-5 px-5 ${styles.faqsBeforeMDScrn}`}>
                        <div className="col-md-6">
                            <h3 style={{ fontWeight: "400" }}>General questions</h3>
                            <p className={`${styles.questions} mt-5`}>Is there a setup fee?</p>
                            <p className={`${styles.answer} text-secondary`}>No. There are no setup fees on any of our plans.</p>
                            <p className={`${styles.questions} mt-5`}>Do I need to enter my payment information to sign up?</p>
                            <p className={`${styles.answer} text-secondary`}>No. You can sign up and use Shopify for 3 days without entering your payment information. At the end of your trial, or when you decide to launch your store, you will need to pick a plan and enter your payment information.</p>
                            <p className={`${styles.questions} mt-5`}>Can I cancel my account at any time?</p>
                            <p className={`${styles.answer} text-secondary`}>Yes. If you ever decide that Shopify isn’t the best ecommerce platform for your business, simply cancel your account.</p>
                            <p className={`${styles.questions} mt-5`}>How long are your contracts?</p>
                            <p className={`${styles.answer} text-secondary`}>All Shopify plans are month to month unless you sign up for an annual or biennial plan.</p>
                            <p className={`${styles.questions} mt-5`}>Do you offer any discounted plans?</p>
                            <p className={`${styles.answer} text-secondary`}>Yes, we offer a 10% discount on annual plans and a 20% discount on biennial plans, when they are paid upfront.</p>
                            <p className={`${styles.questions} mt-5`}>Can I change my plan later on?</p>
                            <p className={`${styles.answer} text-secondary`}>Absolutely! You can upgrade or downgrade your plan at any time.</p>
                            <p className={`${styles.questions} mt-5`}>Is Shopify PCI Compliant or PCI Certified?</p>
                            <p className={`${styles.answer} text-secondary`}>Yes. Shopify is certified Level 1 PCI DSS compliant. This means all your data and customer information is ultra secure.</p>
                            <p className={`${styles.questions} mt-5`}>Do I have to sell the same products in-store as I do online?</p>
                            <p className={`${styles.answer} text-secondary`}>No, you can choose exactly what products to sell online, in-store, or both.</p>
                            <p className={`${styles.questions} mt-5`}>What is the rate if I type in a credit card?</p>
                            <p className={`${styles.answer} text-secondary`}>If you chose to type in a credit card number instead of using the Shopify credit card reader, you will be charged the same rate as your online rate.</p>
                        </div>
                        <div className="col-md-6">
                            <h3 style={{ fontWeight: "400" }}>Online questions</h3>
                            <p className={`${styles.questions} mt-5`}>Can I use my own domain name?</p>
                            <p className={`${styles.answer} text-secondary`}>Yes. You can purchase a domain name within Shopify, or use an existing one that you own. We also provide a free myshopify.com domain name to all stores on sign up.</p>
                            <p className={`${styles.questions} mt-5`}>What are your bandwidth fees?</p>
                            <p className={`${styles.answer} text-secondary`}>There are none. All Shopify plans include unlimited bandwidth for free.</p>
                            <p className={`${styles.questions} mt-5`}>Do I need a web host?</p>
                            <p className={`${styles.answer} text-secondary`}>Shopify includes secure, unlimited ecommerce hosting on all plans. You can also use the Buy Button to add ecommerce to any existing website.</p>

                            <h3 className="mt-5" style={{ fontWeight: "400" }}>Online questions</h3>
                            <p className={`${styles.questions} mt-5`}>What does Shopify POS do?</p>
                            <p className={`${styles.answer} text-secondary`}>Shopify POS is an application for iOS and Android devices that you can use for transactions in a physical store or pop-up setting. Find products, process orders, take payment, swipe credit cards, produce receipts, and control it all from your iPad or mobile device. All the background management of your store is done from your Shopify admin, which you can access using any browser.</p>
                            <p className={`${styles.questions} mt-5`}>Can I merge my Shopify online store with Shopify POS?</p>
                            <p className={`${styles.answer} text-secondary`}>Yes. Your Shopify online store automatically synchronizes with Shopify POS, and you manage your entire business from one dashboard. Product or inventory updates that you make in your Shopify admin will instantly take effect in Shopify POS.</p>
                            <p className={`${styles.questions} mt-5`}>Can I use Shopify POS if I have multiple cash registers in use at the same time?</p>
                            <p className={`${styles.answer} text-secondary`}>Yes. You can install Shopify POS on multiple devices, and you won’t be charged any extra. Store activity on all devices is synchronized with your Shopify admin.</p>
                            <p className={`${styles.questions} mt-5`}>Can I use Shopify POS in my location?</p>
                            <p className={`${styles.answer} text-secondary`}>The Shopify POS app is available worldwide. One important factor to note is if your business is located outside of the US, Canada, UK, Ireland, New Zealand, or Australia, you will have to accept payments with a third-party payment provider using an external terminal.</p>
                            <p className={`${styles.questions} mt-5`}>Where can I buy card readers and hardware accessories that are compatible with Shopify POS?</p>
                            <div className={`${styles.answer} text-secondary`}>
                                You can buy payment hardware and supported accessories (like barcode scanners, receipt printers, and more) from the Shopify Hardware Store in the continental United States, Canada, the United Kingdom, Ireland, New Zealand, Germany, Australia, the Netherlands, Belgium, Italy, Singapore, and Spain.
                                <div className="mt-3">
                                    If your business is located outside of these countries, there are two important considerations:
                                </div>
                                <ul className="mt-4">
                                    <li>
                                        You'll have to use a third-party payment provider to accept credit cards with an external terminal.
                                    </li>
                                    <li>
                                        You'll have to buy compatible hardware accessories through an external retailer.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`my-5 px-md-5 ${styles.faqsAfterMDScrn}`}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>General questions</Accordion.Header>
                                <Accordion.Body>
                                    <p className={`${styles.questions} mt-5`}>Is there a setup fee?</p>
                                    <p className={`${styles.answer} text-secondary`}>No. There are no setup fees on any of our plans.</p>
                                    <p className={`${styles.questions} mt-5`}>Do I need to enter my payment information to sign up?</p>
                                    <p className={`${styles.answer} text-secondary`}>No. You can sign up and use Shopify for 3 days without entering your payment information. At the end of your trial, or when you decide to launch your store, you will need to pick a plan and enter your payment information.</p>
                                    <p className={`${styles.questions} mt-5`}>Can I cancel my account at any time?</p>
                                    <p className={`${styles.answer} text-secondary`}>Yes. If you ever decide that Shopify isn’t the best ecommerce platform for your business, simply cancel your account.</p>
                                    <p className={`${styles.questions} mt-5`}>How long are your contracts?</p>
                                    <p className={`${styles.answer} text-secondary`}>All Shopify plans are month to month unless you sign up for an annual or biennial plan.</p>
                                    <p className={`${styles.questions} mt-5`}>Do you offer any discounted plans?</p>
                                    <p className={`${styles.answer} text-secondary`}>Yes, we offer a 10% discount on annual plans and a 20% discount on biennial plans, when they are paid upfront.</p>
                                    <p className={`${styles.questions} mt-5`}>Can I change my plan later on?</p>
                                    <p className={`${styles.answer} text-secondary`}>Absolutely! You can upgrade or downgrade your plan at any time.</p>
                                    <p className={`${styles.questions} mt-5`}>Is Shopify PCI Compliant or PCI Certified?</p>
                                    <p className={`${styles.answer} text-secondary`}>Yes. Shopify is certified Level 1 PCI DSS compliant. This means all your data and customer information is ultra secure.</p>
                                    <p className={`${styles.questions} mt-5`}>Do I have to sell the same products in-store as I do online?</p>
                                    <p className={`${styles.answer} text-secondary`}>No, you can choose exactly what products to sell online, in-store, or both.</p>
                                    <p className={`${styles.questions} mt-5`}>What is the rate if I type in a credit card?</p>
                                    <p className={`${styles.answer} text-secondary`}>If you chose to type in a credit card number instead of using the Shopify credit card reader, you will be charged the same rate as your online rate.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Online questions</Accordion.Header>
                                <Accordion.Body>
                                    <p className={`${styles.questions} mt-5`}>Can I use my own domain name?</p>
                                    <p className={`${styles.answer} text-secondary`}>Yes. You can purchase a domain name within Shopify, or use an existing one that you own. We also provide a free myshopify.com domain name to all stores on sign up.</p>
                                    <p className={`${styles.questions} mt-5`}>What are your bandwidth fees?</p>
                                    <p className={`${styles.answer} text-secondary`}>There are none. All Shopify plans include unlimited bandwidth for free.</p>
                                    <p className={`${styles.questions} mt-5`}>Do I need a web host?</p>
                                    <p className={`${styles.answer} text-secondary`}>Shopify includes secure, unlimited ecommerce hosting on all plans. You can also use the Buy Button to add ecommerce to any existing website.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Online questions</Accordion.Header>
                                <Accordion.Body>
                                    <p className={`${styles.questions} mt-5`}>What does Shopify POS do?</p>
                                    <p className={`${styles.answer} text-secondary`}>Shopify POS is an application for iOS and Android devices that you can use for transactions in a physical store or pop-up setting. Find products, process orders, take payment, swipe credit cards, produce receipts, and control it all from your iPad or mobile device. All the background management of your store is done from your Shopify admin, which you can access using any browser.</p>
                                    <p className={`${styles.questions} mt-5`}>Can I merge my Shopify online store with Shopify POS?</p>
                                    <p className={`${styles.answer} text-secondary`}>Yes. Your Shopify online store automatically synchronizes with Shopify POS, and you manage your entire business from one dashboard. Product or inventory updates that you make in your Shopify admin will instantly take effect in Shopify POS.</p>
                                    <p className={`${styles.questions} mt-5`}>Can I use Shopify POS if I have multiple cash registers in use at the same time?</p>
                                    <p className={`${styles.answer} text-secondary`}>Yes. You can install Shopify POS on multiple devices, and you won’t be charged any extra. Store activity on all devices is synchronized with your Shopify admin.</p>
                                    <p className={`${styles.questions} mt-5`}>Can I use Shopify POS in my location?</p>
                                    <p className={`${styles.answer} text-secondary`}>The Shopify POS app is available worldwide. One important factor to note is if your business is located outside of the US, Canada, UK, Ireland, New Zealand, or Australia, you will have to accept payments with a third-party payment provider using an external terminal.</p>
                                    <p className={`${styles.questions} mt-5`}>Where can I buy card readers and hardware accessories that are compatible with Shopify POS?</p>
                                    <div className={`${styles.answer} text-secondary`}>
                                        You can buy payment hardware and supported accessories (like barcode scanners, receipt printers, and more) from the Shopify Hardware Store in the continental United States, Canada, the United Kingdom, Ireland, New Zealand, Germany, Australia, the Netherlands, Belgium, Italy, Singapore, and Spain.
                                        <div className="mt-3">
                                            If your business is located outside of these countries, there are two important considerations:
                                        </div>
                                        <ul className="mt-4">
                                            <li>
                                                You'll have to use a third-party payment provider to accept credit cards with an external terminal.
                                            </li>
                                            <li>
                                                You'll have to buy compatible hardware accessories through an external retailer.
                                            </li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <div className="row my-5 text-center">
                        <div className="col-xl-6">
                            <h1 style={{ fontSize: '2em', fontWeight: "400" }}>Start your 3-day free trial today!</h1>
                        </div>
                        <div className="col-xl-6">
                            {/* <div className="row">
                                <div className="col-9">
                                    <input type="text" className="form-control p-3" placeholder="Enter your email address" style={{fontSize:'20px'}} />
                                </div>
                                <div className="col-3">
                                    <button style={{ borderRadius: "4px", fontSize: "1em", background: "#008060", boxShadow: "0 5px 15px 0 rgb(0 0 0 / 15%)", borderColor: "transparent", color: "white", padding: ".85em 1em", fontWeight: '700' }}>Start free trial</button>
                                </div>
                            </div> */}
                            <InputGroup className="mb-3">
                                <Form.Control placeholder="Enter your email address" aria-describedby="basic-addon2" />
                                <Button style={{ borderRadius: "4px", fontSize: "1em", background: "#008060", boxShadow: "0 5px 15px 0 rgb(0 0 0 / 15%)", borderColor: "transparent", color: "white", fontWeight: '700' }} id="button-addon2">
                                    Start Free Trial
                                </Button>
                            </InputGroup>
                            <p style={{ fontSize: "1.1em" }}>Try Shopify free for 3 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </div>
    )
}

export default Pricing
