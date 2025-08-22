export const schemaHome = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "name": "AnalyticsLiv | Google Marketing Platform Certified Partner",
          "image": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png",
          "@id": "",
          "url": "https://analyticsliv.com/",
          "telephone": "+91-8320576622",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "503, 31Five, Corporate Road, Prahaladnagar, S.G. Highway, Ahmedabad 380015, Gujarat, India",
            "addressLocality": "Ahmedabad",
            "postalCode": "380015",
            "addressCountry": "IN"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "11:00 AM",
              "closes": "7:00 PM"
            }
          ],
          "sameAs": [
            "https://m.facebook.com/100070503960704/",
            "https://twitter.com/AnalyticsLiv",
            "https://www.instagram.com/analyticsliv_digital/",
            "https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw",
            "https://in.linkedin.com/company/analytics-liv-digital/"
          ]
        }),
      }}
    />
  )
}


export const schema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AnalyticsLiv | Google Marketing Platform Certified Partner",
          "alternateName": "AnalyticsLiv | Google Marketing Platform Certified Partner",
          "url": "https://analyticsliv.com/",
          "logo": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png",
          "description": "AnalyticsLiv is a Google Marketing Platform Certified Partner specializing in analytics, data strategy, and performance marketing.",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8320576622",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "en"
          },
          "sameAs": [
            "https://m.facebook.com/100070503960704/",
            "https://www.instagram.com/analyticsliv_digital/",
            "https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw",
            "https://in.linkedin.com/company/analytics-liv-digital/",
            "https://twitter.com/AnalyticsLiv",
          ]
        }),
      }}
    />
  )
}


export const generateBlogSchema = (blogData) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://analyticsliv.com/blogs/${blogData?.slug}`,
  },
  "headline": blogData?.title,
  "description": blogData?.description,
  "image": blogData?.thumbnail,
  "author": {
    "@type": "Person",
    "name": blogData?.author,
  },
  "publisher": {
    "@type": "Organization",
    "name": "AnalyticsLiv",
    "logo": {
      "@type": "ImageObject",
      "url": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png",
    },
  },
  "datePublished": blogData?.date,
});

export const generateCaseStudySchema = (csData) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://analyticsliv.com/case-studies/${csData?.slug}`,
    },
    "headline": csData?.title,
    "description": csData?.description,
    "image": csData?.coverimage,
    "author": {
      "@type": "Organization",
      "name": "AnalyticsLiv"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AnalyticsLiv",
      "logo": {
        "@type": "ImageObject",
        "url": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png"
      }
    }
  };

  return schema;
};

export const generateBreadcrumbSchemas = (url) => {
  const baseUrl = 'https://analyticsliv.com';
  const path = url?.replace(baseUrl, '')?.split('/')?.filter(Boolean);

  const itemListElement = [{
    "@type": "ListItem",
    position: 1,
    name: "Home",
    item: baseUrl
  }];

  path?.forEach((segment, index) => {
    const name = segment
      ?.replace(/-/g, ' ')
      ?.replace(/\b\w/g, char => char.toUpperCase());

    const item = `${baseUrl}/${path?.slice(0, index + 1)?.join('/')}`;

    itemListElement?.push({
      "@type": "ListItem",
      position: index + 2,
      name,
      item
    });
  });

  return {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement
  };
};