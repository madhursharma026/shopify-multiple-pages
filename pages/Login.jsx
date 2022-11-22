import { useState } from "react";
import Link from 'next/link'
import { Button, Modal, ProgressBar } from 'react-bootstrap';
import { useEffect } from "react";
import styles from '../styles/signup.module.css'
import { FaEnvelope, FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

export default function Login() {
    const [loginModal, setLoginModal] = useState(false);

    function ChangeToLoginModal() {
        setLoginModal(true)
    }

    useEffect(() => {
        ChangeToLoginModal()
    }, [])


    return (
        <div>
            <Modal className="animationObject" show={loginModal} backdrop="static" keyboard={false} centered fullscreen={'lg-down'} size={'md'} animation={false}>
                <Modal.Body className="px-5" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                    <img className="mb-4" src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/d85b9cab000824a606c5beb5f3e27540.svg" alt="#ImgNotFound" />
                    <h3 className="mt-2">Log in</h3>
                    <p className="text-secondary" style={{ fontSize: '16px' }}>Continue to Shopify</p>

                    <label htmlFor="emailAddress">Email</label>
                    <input type="text" className="form-control" id="emailAddress" />
                    <button type="button" class="btn btn-success mt-2 w-100 p-2" style={{borderRadius:"3px"}}><b>Continue With Email</b></button>
                    <div className="row mt-3">
                        <div className="col-5"><hr style={{height:"2px", background:"gray"}} /></div>
                        <div className="col-2 text-center text-secondary pt-1">or</div>
                        <div className="col-5"><hr style={{height:"2px", background:"gray"}} /></div>
                    </div>

                    <button type="button" className={`btn w-100 ${styles.login_btns} mt-2`} style={{ border: "1px solid #C9CCCF", color: "#353536", fontWeight:'500' }}><FaApple style={{ marginTop: "-5px", fontSize: '16px' }} /> Continue with Apple</button>
                    <button type="button" className={`btn w-100 ${styles.login_btns} mt-2`} style={{ border: "1px solid #C9CCCF", color: "#353536", fontWeight:'500' }}><FaFacebook style={{ marginTop: "-5px", fontSize: '16px' }} /> Continue with Facebook</button>
                    <button type="button" className={`btn w-100 ${styles.login_btns} mt-2`} style={{ border: "1px solid #C9CCCF", color: "#353536", fontWeight:'500' }}><FaGoogle style={{ marginTop: "-5px", fontSize: '16px' }} /> Continue with Google</button>

                    <p className="text-secondary mt-3" style={{ fontSize: '14px' }}>New to Shopify? <Link href='/Signup' className={`text-success ${styles.supportLinks}`}>Get Started</Link></p>

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

