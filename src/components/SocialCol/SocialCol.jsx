import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faLinkedinIn, faInstagram, faTwitter, faDribbble, faMedium } from '@fortawesome/free-brands-svg-icons'
import Link from "components/_ui/Link/Link"

import "./SocialCol.scss";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialCol = () => {
    return (
        <div className="SocialCol">
            <div className="SocialCol__icons">
                <Link
                    className="SocialCol__icon"
                    doOpenInNewTab
                    to="https://github.com/lvittor">
                    <FontAwesomeIcon
                        icon={faGithub}
                         />
                </Link>
                {/*<Link
                    className="SocialCol__icon"
                    doOpenInNewTab
                    to="https://dribbble.com/marrrguerite">
                    <FontAwesomeIcon
                        icon={faDribbble}
                    />
                </Link>*/}
                <Link
                    className="SocialCol__icon"
                    doOpenInNewTab
                    to="https://www.linkedin.com/in/lvvittor/">
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                    />
                </Link>
                <Link
                    className="SocialCol__icon"
                    doOpenInNewTab
                    to="mailto:lvittor@itba.edu.ar">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                         />
                </Link>
                {/*<Link
                    className="SocialCol__icon"
                    doOpenInNewTab
                    to="https://instagram.com/marguer.ite/">
                    <FontAwesomeIcon
                        icon={faInstagram}
                         />
                </Link>*/}
                {/* <Link
                    className="SocialCol__icon"
                    doOpenInNewTab
                    to="https://twitter.com/marrrguerite">
                    <FontAwesomeIcon
                        icon={faTwitter}
                         />
                </Link> */}
                {/* <Link
                    className="SocialCol__icon"
                    doOpenInNewTab
                    to="https://github.com/margueriteroth">
                    <FontAwesomeIcon
                        icon={faMedium}
                         />
                </Link> */}
            </div>
        </div>
    );
};

export default SocialCol;
