import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-light py-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <Image src="/logo.png" alt="Online Courses Logo" height={50} width={50} />
                        <span> &copy; 2023 Online Courses</span>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-inline text-right">
                            <li className="list-inline-item">
                                <a href="#"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
