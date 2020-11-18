import React from "react"
import Link from "components/_ui/Link/Link";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";

import "./Intro.scss";

const Intro = () => {
    return (
        <MaxWidth
            size="m" //l, para ponerla a la izquierda
            className="Intro"
        >
            <h2 className="Intro__greeting">
                ¡Hola! <span class="wave">👋</span>
                {/* <span className="emoji" role="img" aria-label="Emoji hotdog">🌭</span> */}
            </h2>
            <h1 className="Intro__header">
                Lucas Vittor<br/>
            </h1>
            <h3 className="Intro__subheader">
                Ing. Informática en <a href="https://www.itba.edu.ar/" target="_blank">ITBA</a>. <br/>
                Buenos Aires, Argentina.
                {/* <span className="emoji" role="img" aria-label="Emoji smile">😊</span> */}
            </h3>
            <Link
                doOpenInNewTab
                isButton
                className="Intro__button"
                buttonProps={{size: "xl", color: "white-blue-stroke"}}
                to="mailto:lvittor@itba.edu.ar"
            >
                Contacto {/*aca puedo poner el cv*/}
            </Link>
        </MaxWidth>
    );
};

export default Intro;
