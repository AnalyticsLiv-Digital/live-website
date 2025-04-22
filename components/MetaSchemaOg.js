import React from 'react';
import Head from 'next/head';

const MetaSchemaOg = ({
    url,
    title,
    description,
    image = 'https://storage.googleapis.com/website-bucket-uploads/static/logo.png',
    twitterTitle,
    twitterDescription,
    twitterImage,
    extraHead,
    faqData = []
}) => {

    const faqSchema = faqData?.length
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": url,
            "mainEntity": faqData?.map(({ question, answer }) => ({
                "@type": "Question",
                "name": question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": answer,
                },
            })),
        }
        : null;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url}></link>
            {/* Facebook Meta Tags */}
            <meta property="og:url" content={url}></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:title" content={title}></meta>
            <meta property="og:description" content={description}></meta>
            <meta property="og:image" content={image}></meta>

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta property="twitter:domain" content={new URL(url).hostname}></meta>
            <meta property="twitter:url" content={url}></meta>
            <meta name="twitter:title" content={twitterTitle || title}></meta>
            <meta name="twitter:description" content={twitterDescription || description}></meta>
            <meta name="twitter:image" content={twitterImage || image}></meta>

            {extraHead != null && extraHead}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": title,
                        "alternateName": title,
                        "url": url,
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

            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema),
                    }}
                />
            )}

        </Head>
    );
};

export default MetaSchemaOg;
