import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", "Neue Kontaktanfrage über NEOSIMMERLING.");
    formData.append("from_name", "NEOSIMMERLING Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
        body: formData,
    });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-layout">

        {/* LEFT: HEADING */}
        <div className="contact-heading">
          <span className="contact-label">03 / GET IN TOUCH</span>

          <h2>
            LET'S TALK
            <br />
            <span>ABOUT YOUR PROJECT.</span>
          </h2>

          <p>
            Du hast eine Idee, planst ein Shooting oder möchtest
            einfach Kontakt aufnehmen? Schreib mir gerne.
          </p>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-fields">
            <div className="contact-field">
              <label htmlFor="contact-name">DEIN NAME</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Max Mustermann"
                autoComplete="name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">DEINE E-MAIL</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="max@beispiel.de"
                autoComplete="email"
                required
              />
            </div>

            <div className="contact-field contact-field-full">
              <label htmlFor="contact-topic">WORUM GEHT ES?</label>
              <select
                id="contact-topic"
                name="topic"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Thema auswählen
                </option>
                <option value="Sportfotografie">Sportfotografie</option>
                <option value="Eventfotografie">Eventfotografie</option>
                <option value="Reisefotografie">Reisefotografie</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </div>

            <div className="contact-field contact-field-full">
              <label htmlFor="contact-message">DEINE NACHRICHT</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Erzähl mir von deinem Projekt ..."
                rows={6}
                required
              />
            </div>
          </div>

          <div className="contact-submit-row">
            <button
              type="submit"
              className="contact-submit"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "WIRD GESENDET ..."
                : "NACHRICHT SENDEN"}
              <ArrowUpRight className="button-icon" />
            </button>

            <span className="contact-note">
              Ich melde mich so bald wie möglich bei dir.
            </span>
          </div>

          {status === "success" && (
            <p className="contact-feedback success" role="status">
              Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.
            </p>
          )}

          {status === "error" && (
            <p className="contact-feedback error" role="alert">
              Deine Nachricht konnte nicht gesendet werden.
              Bitte versuche es später erneut oder schreibe mir direkt per E-Mail.
            </p>
          )}
        </form>

      </div>
    </section>
  );
}