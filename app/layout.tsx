import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Licensed clinical psychologist in Santa Monica, CA offering anxiety, trauma, EMDR, and burnout therapy for adults. In-person and secure telehealth across California.",
};

const ld = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: "Dr. Maya Reynolds, PsyD",
  description: "Licensed clinical psychologist in Santa Monica, CA specializing in anxiety, trauma, EMDR, and burnout therapy for adults.",
  address: { "@type": "PostalAddress", streetAddress: "123rd Street 45 W", addressLocality: "Santa Monica", addressRegion: "CA", postalCode: "90401", addressCountry: "US" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Allura&family=Cormorant+Garamond:wght@300;400;500&family=Mulish:wght@300;400;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
