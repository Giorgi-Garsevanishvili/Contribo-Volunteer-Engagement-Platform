import "../footer-comp/branding.scss"

export const Footer = () => {
  return (
    <footer className="branding-container">
      <h1 className="brand-name">
        <a href="https://qirvex.dev" target="_blank" className="dev-link">
          Qirvex <span className="tm-logo">™</span>
        </a>
      </h1>
      <p className="brand-slogan">Precision in Every Build.</p>
      <p className="name-link">
        by{" "}
        <a href="https://github.com/Giorgi-Garsevanishvili" target="_blank">
          Giorgi Garsevanishvili
        </a>
      </p>
    </footer>
  );
};
