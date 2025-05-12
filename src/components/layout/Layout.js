import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DragonBallBattleScene from "../DragonBallBattleScene";

export default function Layout({ children, title = 'Isaiah Potts - Portfolio' }) {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name = 'description' content = 'My Portfolio' />
            <link rel = 'icon' href = '/favicon.ico' />
        </Head>
        <DragonBallBattleScene />
        <Navbar />
        <main> {children}</main>
        <Footer />
        </>

    );
}