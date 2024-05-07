import React from 'react';
import {AppProps} from "next/app";
import './globals.css'

import localFont from "@next/font/local";

const calSans = localFont({
    src: [
        {
            path: '../../public/fonts/CalSans-SemiBold.ttf',
            weight: '400'
        },
        {
            path: '../../public/fonts/CalSans-SemiBold.ttf',
            weight: '700'
        }
    ],
    variable: '--font-calsans'
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={calSans.className}>
            <Component {...pageProps} />
        </main>

    );
}