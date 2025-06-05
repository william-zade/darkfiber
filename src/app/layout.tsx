import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata = {
  title: 'NEVER HALFWAY',
  description: 'A gritty personal site built with grit and intent',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark text-success scanlines">
        <main className="container-fluid my-4">
          {children}
        </main>
      </body>
    </html>
  );
}
