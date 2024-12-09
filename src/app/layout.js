
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
