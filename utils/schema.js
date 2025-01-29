export const schema = () => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Google Cloud Partner in India | GMP Partner | AnalyticsLiv",
                    "alternateName": "Google Cloud Partner in India | GMP Partner | AnalyticsLiv",
                    "url": "https://analyticsliv.com/",
                    "logo": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-8320576622",
                        "contactType": "customer service",
                        "areaServed": "IN",
                        "availableLanguage": "en"
                    },
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
  