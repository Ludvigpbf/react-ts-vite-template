import { useTranslation } from "react-i18next";
import { Meta } from "@utils/meta";
import Tooltip from "@components/common/Tooltip";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <section className="page landing-section">
      <Meta page="landing" />
      <Tooltip text="Welcome text">
        <h1>{t("landing.welcome")}</h1>
      </Tooltip>
    </section>
  );
};

export default Landing;
