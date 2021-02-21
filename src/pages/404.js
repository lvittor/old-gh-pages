import React from "react";
import Label from "components/_ui/Label/Label";
import Layout from "components/Layout/Layout";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import Link from "components/_ui/Link/Link";
import "./404.scss";

const NotFoundPage = () => (
    <Layout showNavigation showSocialCol showFooter> {/*se podria eliminar el showFooter porque se ve mal*/}
        <MaxWidth className="NotFound">
            <h1 className="NotFound__header">
                ooops, 404.
            </h1>
            <div className="NotFound__recent">
                <div>
                    <Label>
                        último post
                    </Label>
                    <Link to="/blog/un-futuro-libre-de-humo"
                        className="NotFound__recent__item NotFound__recent__item--post">
                        <div>
                            <h3>
                                Un futuro libre de humo
                            </h3>
                            <p>
                                ¿Hay algo que podamos hacer, cada uno de nosotros, para poder afrontar nuestro futuro sin miedo?
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </MaxWidth>
    </Layout>
)

export default NotFoundPage;
