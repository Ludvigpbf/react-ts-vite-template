import { Meta } from "@utils/meta";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <section className="page error-section">
      <Meta page="notFound"/>
      <h1>{t("error.ops")}</h1>
      <p>{t("error.wentWrong")}</p>
    </section>
  );
};

export default NotFound;
