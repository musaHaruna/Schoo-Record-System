import { useState } from "react";
import { Logo, GaurdianIconWhite, HeroTwo } from "../images";

const Guardian = ({ nextStep, prevStep, step }) => {
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherContact, setFatherContact] = useState("");
  const [motherContact, setMotherContact] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", {
      fatherName,
      motherName,
      fatherContact,
      motherContact,
    });
  };

  return (
    <main>
      <article className="register-form-flex">
        <section className="register-content">
          <div className="logo-sm">
            <Logo />
          </div>
          <p style={{ display: step === 4 ? "none" : "" }}>
            <span style={{ color: "blue" }}>{step} </span>/3
          </p>
          <div className="register-desc">
            <div className="icon-reg">
              <GaurdianIconWhite />
            </div>
            <div>
              <h3>School Details</h3>
              <p>Fill in your personal details appropriately below.</p>
            </div>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="register-details gaurdian-details"
          >
            <label>
              Father's Name
              <input
                type="text"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                required
              />
            </label>

            <label>
              Mother's Name
              <input
                type="text"
                value={motherName}
                onChange={(e) => setMotherName(e.target.value)}
                required
              />
            </label>

            <label>
              Father's Contact
              <input
                type="text"
                value={fatherContact}
                onChange={(e) => setFatherContact(e.target.value)}
                required
              />
            </label>

            <label>
              Mother's Contact
              <input
                type="text"
                value={motherContact}
                onChange={(e) => setMotherContact(e.target.value)}
                required
              />
            </label>
          </form>
          <div className="register-navigate">
            <button className="btn-blue-border" onClick={prevStep}>
              <i className="fa-solid fa-chevron-left"></i>
              Previous
            </button>

            <button className="btn-blue" onClick={nextStep}>
              Continue
            </button>
          </div>
        </section>
        <section className="register-hero">
          <HeroTwo />
        </section>
      </article>
    </main>
  );
};
export default Guardian;
