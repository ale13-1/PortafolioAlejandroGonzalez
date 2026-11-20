import { notFound } from "next/navigation";
import { content, locales } from "../../content/portfolio";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const copy = content[locale];
  if (!copy) notFound();
  return {
    title: `Alejandro González | ${copy.role}`,
    description: copy.description,
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
