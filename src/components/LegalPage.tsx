
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type LegalPageProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function LegalPage({
  title,
  subtitle,
  children,
}: LegalPageProps) {
  return (
    <main className="legal-page">
      <div className="legal-top">
        <span>NEOSIMMERLING. / LEGAL INFORMATION</span>
        <Link to="/">← BACK TO HOME</Link>
      </div>

      <div className="legal-heading">
        <span>{subtitle}</span>
        <h1>{title}</h1>
      </div>

      <div className="legal-content">
        {children}
      </div>

      <div className="legal-back">
        <Link to="/">BACK TO NEOSIMMERLING. ↗</Link>
      </div>
    </main>
  );
}
