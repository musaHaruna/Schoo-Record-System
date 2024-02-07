/* Landing Page */
import styled from 'styled-components'

const Wrapper = styled.main`
  .hero-heading {
    font-size: 46px;
    margin: 2rem 0;
  }

  a {
    text-decoration: none;
    display: block;
  }

  .forgot {
    display: flex;
    justify-content: center;
    color: #4a3aff;
  }
  .hero-container {
    max-width: 1440px;
    width: 80%;
    margin: 4rem auto;
  }

  .new-here {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .create {
    color: #4a3aff;
  }
  .register-navigate.login {
    margin-top: 4rem;
    margin-bottom: 1.5rem;
  }
  p {
    color: rgba(33, 33, 33, 0.6);
    font-size: 20px;
  }

  .welcome {
    font-weight: 200;
  }

  .btn-blue {
    border-radius: 10px;
    background: var(--primary-blue);
    padding: 0.75rem 0.5rem;
    color: var(--text-color-white);
    text-transform: capitalize;
    font-size: 20px;
    text-align: center;
    margin: 1rem 0;
  }
  .btn-green {
    border-radius: 10px;
    background: #27ae60;
    padding: 0.75rem 0.5rem;
    color: var(--text-color-white);
    text-transform: capitalize;
    font-size: 20px;
    width: 100%;
    border: none;
    text-align: center;
    margin: 1rem 0;
  }
  .btn-red {
    border-radius: 10px;
    background: #eb5757;
    padding: 0.75rem 0.5rem;
    color: var(--text-color-white);
    text-transform: capitalize;
    font-size: 20px;
    width: 100%;
    border: none;
    text-align: center;
    margin: 1rem 0;
  }

  .btn-blue-border {
    border-radius: 10px;
    background: var(--bg-white);
    border: 1px solid var(--primary-blue);
    padding: 0.75rem 0.5rem;
    color: var(--primary-blue);
    text-transform: capitalize;
    font-size: 20px;
    text-align: center;
    margin: 1rem 0;
  }

  .policy-links {
    display: flex;
    gap: 10px;
    font-size: 16px;
  }

  .policy-links a {
    text-decoration: underline;
  }

  .hero-logo {
    width: 150px;
  }

  .policy-links-show {
    display: none;
  }

  .hero-flex {
    display: flex;
    justify-content: space-between;
  }

  .hero-content {
    width: 60%;
  }

  .hero-img {
    position: absolute;
    width: 60%;
    left: 40%;
    top: 5%;
    z-index: -44;
  }

  .hero-img-ipad {
    display: none;
  }
  .landing-btns-ipad {
    display: none;
  }

  @media (max-width: 1024px) {
    .hero-flex {
      flex-direction: column;
    }

    .hero-img-ipad {
      width: 100%;
      display: block;
      position: relative;
      z-index: -44;
      margin-top: -8rem;
    }

    .hero-content {
      width: 100%;
    }

    .hero-img {
      display: none;
    }

    .landing-btns {
      display: none;
    }

    .landing-btns-ipad {
      display: block;
    }

    .hero-container {
      margin: 0 auto;
    }

    .hero-logo {
      padding-top: 4rem;
    }
  }

  @media (max-width: 428px) {
    .hero-heading {
      font-size: 28px;
    }

    .hero-img-ipad {
      margin-top: -6rem;
    }

    .policy-links {
      display: none;
    }

    .policy-links-show {
      display: block;
      font-size: 14px;
    }

    .policy-links-show a {
      display: inline-block;
    }

    .hero-container {
      width: 90%;
    }

    .hero-logo {
      width: 70px;
      padding-top: 2rem;
    }
  }

  /* Landing Page */

  /* Select Preference */

  .pref-container {
    max-width: 1440px;
    width: 50%;
    margin: 2rem auto;
  }

  .pref-headings {
    text-align: center;
    margin-bottom: 4rem;
  }

  .pref-headings p {
    margin: 0;
  }
  .pref-headings h2 {
    margin-top: 2rem;
  }
  .pref-select div {
    margin: 0.7rem 0;
    cursor: pointer;
  }

  .pref-select-box {
    border-radius: 10px;
  }

  .pref-select div div {
    display: flex;
    justify-content: space-between;
    margin: 0.7rem;
    align-items: center;
  }
  .select-active {
    border: 1.2px solid var(--primary-blue);
    border-radius: 5px;
  }

  .select-deactive {
    border: 1px solid var(--gray);
    border-radius: 5px;
  }

  .logo-sm {
    width: 80px;
  }

  .margin {
    margin: 0.85rem auto;
  }

  .pref-logo {
    margin: 0 auto;
  }

  .pref-icon {
    width: 60px;
    padding: 1.2rem;
    background-color: var(--gray);
    border-radius: 10px;
    margin-right: 2rem;
  }

  .pref-icon-active {
    width: 60px;
    padding: 1.2rem;
    background-color: var(--primary-blue);
    border-radius: 10px;
    margin-right: 2rem;
  }

  .pref-icon-active {
    background-color: var(--primary-blue);
  }

  .circle-icon-active {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1.2px solid var(--primary-blue);
  }

  .circle-icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1.2px solid rgb(23, 20, 15);
  }

  .btn-gray {
    border-radius: 10px;
    background: var(--gray);
    padding: 0.75rem 0.5rem;
    color: var(--text-color-white);
    text-transform: capitalize;
    font-size: 20px;
    text-align: center;
    margin: 1rem 0;
    pointer-events: none;
  }

  .btn-blue-active {
    border-radius: 10px;
    background: var(--primary-blue);
    padding: 0.75rem 0.5rem;
    color: var(--text-color-white);
    text-transform: capitalize;
    font-size: 20px;
    text-align: center;
    margin: 1rem 0;
    pointer-events: auto;
  }

  @media (max-width: 1024px) {
    .pref-container {
      width: 80%;
      margin: 6rem auto;
    }

    .pref-icon,
    .pref-icon-active {
      width: 100px;
    }
    .pref-headings h2 {
      font-size: 42px;
      margin-bottom: 0.3rem;
    }

    .pref-headings p {
      font-size: 24px;
    }

    .pref-select div div h3 {
      font-size: 30px;
    }

    .pref-select div {
      margin: 2rem 0;
    }

    .btn-blue-active,
    .btn-gray {
      font-size: 30px;
      padding: 1rem 0;
    }
  }

  @media (max-width: 428px) {
    .pref-container {
      width: 80%;
      margin: 2rem auto;
    }
    .pref-headings h2 {
      font-size: 28px;
      margin-bottom: 0.3rem;
    }

    .pref-headings p {
      margin: 0.4rem 0;
      font-size: 16px;
    }

    .pref-container {
      width: 90%;
    }
    .pref-icon,
    .pref-icon-active {
      width: 60px;
    }

    .btn-blue-active,
    .btn-gray {
      font-size: 20px;
    }

    .pref-select div div h3 {
      font-size: 20px;
    }

    .pref-select div {
      margin: 1rem 0;
    }
  }
  /* Select Preference */

  /* Registration Pages */
  .register-form {
    max-width: 1440px;
    width: 95%;
    margin: 2rem auto;
  }
  .register-form-flex {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
  }

  .register-desc {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    gap: 0.7rem;
  }

  .register-desc div p,
  h3 {
    margin: 0;
  }

  .register-desc div p {
    font-size: 16px;
  }

  .register-details label {
    font-size: 16px;
  }

  .register-details h5 {
    margin: 0;
  }
  .register-details input {
    width: 100%;
    padding: 0.8rem 0.5rem;
    font-size: 16px;
    margin-bottom: 2rem;
    margin-top: 5px;
    border: 0.8px solid var(--gray);
    border-radius: 4px;
  }

  .register-details label input:focus {
    outline: 2px solid var(--primary-blue);
  }
  .radio-btn {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .radio-btn label {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .radio-btn input {
    margin: 0;
  }

  .register-content {
    width: 60%;
  }

  .register-hero {
    width: 690px;
    overflow: hidden;
    border-radius: 10px;
  }

  .icon-reg {
    width: 70px;
    padding: 1rem;
    background-color: var(--primary-blue);
    border-radius: 15px;
  }

  .register-navigate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
  }

  .register-navigate .btn-blue {
    width: 100%;
    border: none;
  }

  .register-desc div h3 {
    font-size: 24px;
  }

  .register-details label h5 {
    font-size: 16px;
  }

  .register-details div h5 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  .register-navigate .btn-blue-border {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: #edeefd;
  }

  .logo-sm.create-passcode {
    margin-bottom: 4rem;
  }
  .pref-link {
    color: var(--primary-blue);
  }

  .school-detail-select select {
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 5px;
    padding: 1rem 0.5rem;
  }

  .register-details.gaurdian-details input {
    background-color: #eee;
  }

  @media (max-width: 428px) {
    .register-desc div p {
      font-size: 12px;
    }
  }

  @media (max-width: 1024px) {
    .register-hero {
      display: none;
    }

    .register-content {
      width: 100%;
    }

    .register-navigate {
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
    }

    .register-navigate .btn-blue-border,
    .btn-blue {
      margin: 0;
    }

    .logo-sm {
      margin: 1rem auto;
    }
  }

  /* Temp Styles */

  h6 {
    margin: 6px 0;
  }
  .clor {
    color: #27ae60;
  }
`
export default Wrapper
/* Registration Pages */
