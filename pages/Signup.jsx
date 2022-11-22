import { useState } from "react";
import Link from 'next/link'
import { Button, Modal, ProgressBar } from 'react-bootstrap';
import { useEffect } from "react";
import styles from '../styles/signup.module.css'
import { FaEnvelope, FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

export default function Signup() {
    const [signupModal, setSignupModal] = useState(false);

    function handleShow() {
        setSignupModal(true)
    }

    useEffect(() => {
        handleShow()
    }, [])


    return (
        <div>
            <Modal className="animationObject" show={signupModal} backdrop="static" keyboard={false} centered fullscreen={'lg-down'} size={'md'} animation={false}>
                <Modal.Body className="px-5" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                    <img className="mb-4" src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/d85b9cab000824a606c5beb5f3e27540.svg" alt="#ImgNotFound" />
                    <h3 className="mt-2">Create a Shopify ID</h3>
                    <p className="text-secondary" style={{ fontSize: '16px' }}>One last step before starting your free trial.</p>
                    <button type="button" className={`btn w-100 ${styles.login_btns} mt-3`} style={{ border: "1px solid #8C9196", color: "#353536" }}><b><FaEnvelope style={{ marginTop: "-5px", fontSize: '16px' }} /> Continue with Email</b></button>
                    <button type="button" className={`btn w-100 ${styles.login_btns} mt-3`} style={{ border: "1px solid #8C9196", color: "#353536" }}><b><FaApple style={{ marginTop: "-5px", fontSize: '16px' }} /> Continue with Apple</b></button>
                    <button type="button" className={`btn w-100 ${styles.login_btns} mt-3`} style={{ border: "1px solid #8C9196", color: "#353536" }}><b><FaFacebook style={{ marginTop: "-5px", fontSize: '16px' }} /> Continue with Facebook</b></button>
                    <button type="button" className={`btn w-100 ${styles.login_btns} mt-3`} style={{ border: "1px solid #8C9196", color: "#353536" }}><b><FaGoogle style={{ marginTop: "-5px", fontSize: '16px' }} /> Continue with Google</b></button>

                    <p className="text-secondary mt-3" style={{ fontSize: '14px' }}>By proceeding, you agree to the <Link href='/#' className={`text-success ${styles.supportLinks}`}> Terms and Conditions</Link> and <Link href='/#' className={`text-success ${styles.supportLinks}`}>Privacy and Policy</Link></p>

                    <p className="text-secondary" style={{ fontSize: '14px' }}>Already have a Shopify account? <Link href='/Login' className={`text-success ${styles.supportLinks}`}>Login</Link></p>

                    <div className="mt-5" style={{ textAlign: "right" }}>
                        <Link href="/" className={`text-secondary ${styles.supportLinks}`} style={{ fontWeight: '500' }}>Help</Link>&ensp;
                        <Link href="/" className={`text-secondary ${styles.supportLinks}`} style={{ fontWeight: '500' }}>Privacy</Link>&ensp;
                        <Link href="/" className={`text-secondary ${styles.supportLinks}`} style={{ fontWeight: '500' }}>Terms</Link>&ensp;
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}


