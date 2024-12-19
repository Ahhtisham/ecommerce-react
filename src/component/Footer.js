import { FaGithub } from 'react-icons/fa';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h3>One<span>Mart</span></h3>
                    <p>Your one-stop shop for all your needs.</p>
                </div>
                <div className="footer-center">
                    <h4>Our All ITems</h4>
                    <ul>
                        <li>Men's Clothing</li>
                        <li>Women's Clothing</li>
                        <li>Jewelry</li>
                        <li>Electronics</li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h4>Contact Us</h4>
                    <a
                        href="https://github.com/Ahtishamimran0"
                        className="github-link"
                    >
                        <FaGithub size={24} /> GitHub
                    </a>
                    <p className="mail">Email: support@onemart.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © {new Date().getFullYear()} OneMart. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
