import '@/styles/globals.css'
import type { AppProps } from 'next/app';

import { Play, Press_Start_2P, Sofia_Sans_Extra_Condensed, Roboto } from '@next/font/google';

const play = Play({ weight: "400", subsets: ['latin'] });
const pressStart = Press_Start_2P({ weight: "400", subsets: ['latin'] });
const sofia = Sofia_Sans_Extra_Condensed({ subsets: ['latin'], weight: ["400","600"] });
const roboto = Roboto({ weight: "400", subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <style jsx global>{`
        :root {
          --play-font: ${play.style.fontFamily};
          --pressStart-font: ${pressStart.style.fontFamily};
          --sofiaSans-font: ${sofia.style.fontFamily};
          --roboto-font: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </div>);
}
