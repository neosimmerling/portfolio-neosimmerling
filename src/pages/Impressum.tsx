
import LegalPage from "../components/LegalPage";

export default function Impressum() {
  return (
    <LegalPage title="IMPRESSUM." subtitle="LEGAL / 01">
      <section>
        <h2>Angaben gemäß § 5 DDG</h2>

        <p>
          Neo Simmerling
          <br />
          [Straße und Hausnummer]
          <br />
          [PLZ und Ort]
          <br />
          Deutschland
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>

        <p>
          E-Mail:{" "}
          <a href="mailto:neosimmerling@gmail.com">
            neosimmerling@gmail.com
          </a>
        </p>
      </section>
    </LegalPage>
  );
}
