import React from 'react';
import Head from 'next/head';

const OgTags = ({
    url,
    title,
    description,
    image = 'https://storage.googleapis.com/website-bucket-uploads/static/logo.png',
    twitterTitle,
    twitterDescription,
    twitterImage,
}) => {
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
        </Head>
    );
};

export default OgTags;
