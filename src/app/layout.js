//import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Bootstrap from "../../components/Bootstrap/Bootstrap";
import localFont from "next/font/local";
import "./globals.scss";
import ModalForm from "../../components/ModalForm/ModalForm";
import Confidentiality from "../../components/Confidentiality/confidentiality";
import YandexMetrika from "../../components/YandexMetrika/YandexMEtrika";
import "../../components/Header/Header.scss";
import "./services/MainPort.scss";

export const metadata = {
  icons: {
    icon: [{ rel: "icon", type: "image/svg+xml", url: "/favicon/favicon.svg" }],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});
const montserratAlternates = localFont({
  src: [
    {
      path: "./fonts/MontserratAlternates-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/MontserratAlternates-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/MontserratAlternates-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/MontserratAlternates-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MontserratAlternates-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/MontserratAlternates-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/MontserratAlternates-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/MontserratAlternates-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserratAlternates.className}`}
      >
        <Bootstrap />
        {/* <ModalForm /> */}
        <Confidentiality />
        {children}
        <Footer />
        <YandexMetrika />
      </body>
    </html>
  );
}
