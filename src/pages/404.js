import React from "react";
import ContestantHead from "components/Bachelor/ContestantHead"
import Label from "components/_ui/Label/Label";
import Layout from "components/Layout/Layout";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import Link from "components/_ui/Link/Link";
import Spinner from "components/_ui/Spinner/Spinner";
import "./404.scss";

const NotFoundPage = () => (
    <Layout showNavigation showSocialCol showFooter>
        <MaxWidth className="NotFound">
            {/*<Spinner
                className="NotFound__spinner__container"
                pet="vitipc"
                size="xl"
            />*/}
            {/*<span className="emoji" role="img" aria-label="Emoji Joker">🃏</span>*/}
            <h1 className="NotFound__header">
                ooops, 404.
            </h1>
            <div className="NotFound__recent">
                {/*<div>
                    <Label>
                        Check out my recent project
                    </Label>
                    <Link to="/2020-bachelor" className="NotFound__recent__item NotFound__recent__item--project">
                        <ContestantHead name="Deandra" />
                        <div>
                            <h3>
                                Bachelor 2020 Contestant Guide
                            </h3>
                            <p>
                                Updating weekly with episode information and improved components. Wip!
                            </p>
                        </div>

                    </Link>
                </div>*/}
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
