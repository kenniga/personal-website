/* eslint-disable @next/next/no-page-custom-font */
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import FullViewport from '../common/layout/FullViewport';
import ClapClap from '../modules/ClapClap';

import styles from '../styles/UnderConstruction.module.scss';

const UnderConstruction = ({ claps }) => {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
            </Head>
            <FullViewport
                pageName="under-construction"
                contentPosition="middle"
                mainClassName={[styles['under-construction']]}
            >
                <div className={styles['image-container']}>
                    <Image
                        src="/cattyping.gif"
                        alt="Picture of the author"
                        width={267}
                        height={200}
                        layout="responsive"
                        objectFit="contain"
                    />
                </div>
                <h3 className={styles['heading']}>I&apos;m working on it...</h3>
                <ClapClap claps={claps} />
            </FullViewport>
        </>
    );
};

export default UnderConstruction;

export const getStaticProps = async () => {
    const claps = await axios.get(`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/claps/count`);

    return {
        props: {
            claps: claps.data
        }
    };
};
