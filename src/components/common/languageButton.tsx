import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "@redux/slices/languageSlice";
import Sv from "@assets/sv2.svg";
import En from "@assets/en.svg";
import Tooltip from "@components/common/Tooltip";
import { RootState } from "@redux/types";
import i18n from "i18next";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageToggleButton = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.lang.activeLang);
  const {t} = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = language === "sv" ? "en" : "sv";
    i18n.changeLanguage(newLanguage);
    dispatch(changeLanguage(newLanguage));
  };
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return language === "en" ? (
    <Tooltip
      text={t("common.changeLanguage")}
    >
      <img src={Sv} className="lang-btn" onClick={toggleLanguage} />
    </Tooltip>
  ) : (
    <Tooltip
      text={t("common.changeLanguage")}
      textStyle="tooltip-text"
      position="top-right"
    >
      <img src={En} className="lang-btn" onClick={toggleLanguage} />
    </Tooltip>
  );
};

export default LanguageToggleButton;
