import Head from "next/head";
import Image from "next/image";
import Index from "@/components/home/Index";
import { Inter } from "@next/font/google";
import toTheMoonArt from "@/public/toTheMoon.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Boost Your Business with To The Stars Ratings: Skyrocket Your Ratings
          and Maximize Customer Reviews
        </title>
        <meta
          name="description"
          content="
          To The Stars Ratings is a business accelerator that uses review software to skyrocket ratings and take businesses to new heights. Our simple approach uses data analysis and custom-tailored strategies to propel companies forward to maximize customer reviews. Soar to success with us, and let us help you reach the stars! We separate the positive reviews from the negative reviews and help the business resolve the issues with their experience, or help the business grow on Google reviews if they had a positive experience."
        />
        <meta property="og:image" content={toTheMoonArt.src} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Index />
      </main>
    </>
  );
}
