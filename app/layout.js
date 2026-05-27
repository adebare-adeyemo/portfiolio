import './globals.css';

export const metadata = {
  title: 'Adebare Adeyemo | GoHighLevel Portfolio',
  description: 'GoHighLevel expert portfolio covering CRM automation, A2P verification, Voice AI, chatbots, email marketing, pipelines, websites, funnels and white-label SaaS.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
