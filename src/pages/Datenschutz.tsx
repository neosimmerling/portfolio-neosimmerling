
import LegalPage from "../components/LegalPage";

export default function Datenschutz() {
  return (
    <LegalPage title="DATENSCHUTZ." subtitle="LEGAL / 02">
      <section>
        <h2>1. Verantwortlicher</h2>

        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website:
        </p>

        <p>
          Neo Simmerling
          <br />
          [Anschrift]
          <br />
          E-Mail:{" "}
          <a href="mailto:neosimmerling@gmail.com">
            neosimmerling@gmail.com
          </a>
        </p>
      </section>

      <section>
        <h2>2. Hosting</h2>

        <p>
          Diese Website soll über GitHub Pages bereitgestellt werden.
          Anbieter ist GitHub, Inc. Beim Aufruf der Website können
          technische Informationen, insbesondere IP-Adressen,
          verarbeitet werden.
        </p>

        <p>
          Weitere Informationen:
          {" "}
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noreferrer"
          >
            Datenschutzerklärung von GitHub
          </a>.
        </p>
      </section>

      <section>
        <h2>3. Kontaktaufnahme</h2>

        <p>
          Bei einer Kontaktaufnahme per E-Mail werden die übermittelten
          personenbezogenen Daten zur Bearbeitung der Anfrage verarbeitet.
        </p>
      </section>

      <section>
        <h2>4. Externe Links</h2>

        <p>
          Diese Website enthält einen Link zu Instagram. Erst beim
          Anklicken wird eine Verbindung zu Instagram hergestellt.
          Für die anschließende Datenverarbeitung ist Meta verantwortlich.
        </p>
      </section>

      <section>
        <h2>5. Analyse und Tracking</h2>

        <p>
          Nach aktuellem Stand sind keine eigenen Analyse- oder
          Trackingdienste eingebunden.
        </p>
      </section>

      <section>
        <h2>6. Betroffenenrechte</h2>

        <p>
          Im Rahmen der gesetzlichen Voraussetzungen bestehen Rechte
          auf Auskunft, Berichtigung, Löschung, Einschränkung der
          Verarbeitung und Datenübertragbarkeit.
        </p>

        <p>
          Außerdem besteht das Recht, sich bei einer zuständigen
          Datenschutzaufsichtsbehörde zu beschweren.
        </p>
      </section>

      <section>
        <h2>7. Aktualität</h2>
        <p>Stand: November 2026.</p>
      </section>
    </LegalPage>
  );
}
