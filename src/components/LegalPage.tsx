import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

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
        <Link to="/" className="legal-brand">
          NEOSIMMERLING.
        </Link>

        <span>INFORMATION / {subtitle}</span>

        <Link to="/" className="legal-home">
          BACK TO HOME <ArrowUpRight className="button-icon" />
        </Link>
      </div>

      <header className="legal-heading">
        <span>{subtitle} / LEGAL INFORMATION</span>
        <h1>{title}</h1>
        <p>
          Transparenz und Informationen rund um
          meinen Internetauftritt.
        </p>
      </header>

      <div className="legal-layout">
        <aside className="legal-sidebar">
          <span>NEOSIMMERLING.</span>
          <span>FOTOGRAF & BILDGESTALTER</span>
          <span>© 2026</span>
        </aside>

        <div className="legal-content">
          {children}

          <div className="legal-back">
            <Link to="/">← ZURÜCK ZUR STARTSEITE</Link>
          </div>
        </div>
      </div>
    </main>
  );
}