// src/app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-light text-dark">
        <div className="container my-4">
          {children}
        </div>
      </body>
    </html>
  );
}
