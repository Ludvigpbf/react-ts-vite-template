const metaTranslationEn = {
  meta: {
    // Landing page
    landing: {
      title: "Your Page",
      name: "Your Page",
      content: "Home page for Your Page",
      og: {
        title: {
          property: "title",
          content: "Your Page",
        },
        description: {
          property: "description",
          content: "Your Page",
        },
        image: {
          property: "image",
          content: "your-image.jpg",
        },
        url: {
          property: "url",
          content: "https://www.yourpage.com",
        },
        type: {
          property: "type",
          content: "website",
        },
        locale: {
          property: "locale",
          content: "en_US",
        },
      },
      robots: {
        content: "index, follow",
      },
      keywords: {
        content: "Your Page",
      },
    },
    // Not Found page
    notFound: {
      title: "Not Found - Your Page",
      name: "Not Found",
      content: "Not Found page for Your Page",
      og: {
        title: {
          property: "title",
          content:
            "404 - Page Not Found - Your Page - We're sorry, but the page you were looking for cannot be found.",
        },
        description: {
          property: "description",
          content:
            "We're sorry, but the page you were looking for cannot be found.",
        },
        image: {
          property: "image",
          content: "your-image.jpg",
        },
        url: {
          property: "url",
          content: "https://www.yourpage.com/not-found",
        },
        type: {
          property: "type",
          content: "website",
        },
        locale: {
          property: "locale",
          content: "en_US",
        },
      },
      robots: {
        content: "noindex, nofollow",
      },
      keywords: {
        content: "404, not found, Your Page",
      },
    },
  },
};

export default metaTranslationEn;
