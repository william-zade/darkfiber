// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer
      className="text-center py-4"
      style={{
        color: "var(--color-muted)",
        fontFamily: "var(--font-primary)",
      }}
    >
      <div className="mb-3">
        &copy; {new Date().getFullYear()} Bill Zade &mdash; NeverHalfway
      </div>

      <div className="d-flex justify-content-center gap-3">
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-light fs-4"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://github.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-light fs-4"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://youtube.com/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-light fs-4"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-light fs-4"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}
