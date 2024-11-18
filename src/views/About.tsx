import { useTranslation } from 'react-i18next';
type Props = {
    className?: string;
};

const About: React.FC<Props> = (className) => {
    const {t} = useTranslation();
    return (
        <section className={`page about-section${className && ""}`}>
            <h1>{t("about.title")}</h1>
            <p>{t("about.description")}</p>
        </section>
    );
}

export default About;


