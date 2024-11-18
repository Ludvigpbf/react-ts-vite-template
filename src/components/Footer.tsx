import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CopyrightIcon from "@components/icons/Copyright";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer>
        <hr />
        <div className="footer-content">
            <h3>{t("footer.heading")}</h3>
          <div className="footer-list">
            <ul className="page-links">
              <li>
                <Link target="_blank" to={`mailto:contact@yourmail.com?subject=${t(`footer.mail_subject`)}&body=${t(`footer.mail_body`)}`}>{t("footer.mail")}</Link>
              </li>
              <li>
                <Link target="_blank" to="tel:+46123456789">{t("footer.phone")}</Link>
              </li>
            </ul>
          </div>
        </div>
        <span>Copyright <CopyrightIcon iconClassName="copyright-icon" /> Your Company</span>
      </footer>
    </>
  );
};

export default Footer;
