"use client";

// Css
// import "bootstrap/scss/bootstrap-grid.scss";
import "bootstrap/scss/bootstrap.scss";
import "../assets/scss/index.scss";

// import { Poppins, Rasa } from "next/font/google";
// export const poppins = Poppins({
//     weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//     style: ["normal", "italic"],
//     subsets: ["latin"],
//     display: "swap",
//     variable: "--primary_font",
// });

// export const rasa = Rasa({
//     weight: ["300", "400", "500", "600", "700"],
//     style: ["normal", "italic"],
//     subsets: ["latin"],
//     display: "swap",
//     variable: "--secondary_font",
// });

// export const metadata = {
//     title: "Mizox",
//     description: "Mizox - Design and Development",
// };

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <title>Mizox - Design and Development</title>
            {/* <body className={`${poppins.variable} ${rasa.variable}`} suppressHydrationWarning={true}> */}
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    );
}
