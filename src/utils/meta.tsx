import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface MetaProps {
  page:
  | "landing"
  | "notFound";
  /* Add more pages here */
}
/* Date and year for auto-set copyright year */
const date = new Date();
const year = date.getFullYear();

// Meta component
export const Meta = ({ page }: MetaProps) => {
  const { t } = useTranslation();
  return (
    <Helmet>
      <title>{`${t(`meta.${page}.title`)}`}</title>
      {/* Change region-content to your region e.g EN or SE */}
      <meta name="geo.region" content="YourLang" />
      {/* Change placename-content to your city e.g New York or Stockholm */}
      <meta name="geo.placename" content="YourCity" />
      <meta
        name={`${t(`meta.${page}.name`)}`}
        content={`${t(`meta.${page}.content`)}`}
      />{" "}
      <meta
        property={`og:${t(`meta.${page}.og.title.property`)}`}
        content={`${t(`meta.${page}.og.title.content`)}`}
      />
      <meta
        property={`og:${t(`meta.${page}.og.description.property`)}`}
        content={`${t(`meta.${page}.og.description.content`)}`}
      />
      <meta
        property={`og:${t(`meta.${page}.og.image.property`)}`}
        content={`${t(`meta.${page}.og.image.content`)}`}
      />
      <meta
        property={`og:${t(`meta.${page}.og.url.property`)}`}
        content={`og:${t(`meta.${page}.og.url.content`)}`}
      />
      <meta
        property={`og:${t(`meta.${page}.og.type.property`)}`}
        content={`og:${t(`meta.${page}.og.type.content`)}`}
      />
      <meta
        property={`og:${t(`meta.${page}.og.locale.property`)}`}
        content={`og:${t(`meta.${page}.og.locale.content`)}`}
      />
      {/* Change copyright-content to your companies name */}
      <meta name="copyright" content={`© ${year} Your Page`} />
      <link
        rel="canonical"
        /* Change href to your page name */
        href={`https://www.yourpage.com${page === "landing" ? "" : `/${page}`}`}
      />
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yourxhandle" />
      <meta name="twitter:title" content="Page Title" />
      <meta name="twitter:description" content="Description of the content." />
      <meta
        name="twitter:image"
        content="https://yourwebsite.com/path-to-image.jpg"
      /> */}
      {/* <meta name="theme-color" content="#ffffff" /> */}
      {/* Change author-content to the author of the page */}
      <meta name="author" content="Author" />
      <meta name="robots" content={`${t(`meta.${page}.robots.content`)}`} />
      <meta name="keywords" content={`${t(`meta.${page}.keywords.content`)}`} />
      {/*     <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      /> */}
      {/*   <meta name="apple-mobile-web-app-capable" content="yes" /> */}
      <meta name="color-scheme" content="light dark" />
      {/*       <meta name="google-site-verification" content="your_verification_token" /> */}
    </Helmet>
  );
};
