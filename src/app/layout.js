import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata = {
  title: "Norlook Medical Center",
  description: "Norlook Medical Center website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
