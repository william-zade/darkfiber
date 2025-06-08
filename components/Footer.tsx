// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer
      className="text-center py-4"
      style={{ color: "var(--color-muted)", fontFamily: "var(--font-primary)" }}
    >
      <div>
        &copy; {new Date().getFullYear()} Bill Zade &mdash; NeverHalfway
      </div>
    </footer>
  );
}
