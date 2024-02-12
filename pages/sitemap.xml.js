//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://analyticsliv.com/api/sitemap';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://analyticsliv.com/</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/services/</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/services/app-marketing</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/services/lead-generation</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/services/ecommerce-marketing</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/services/programatic-advertising</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/services/analytics</loc>
     </url>
     
     <url>
       <loc>https://analyticsliv.com/services/data-reporting-analysis</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/services/looker-bi-platform</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/services/training</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/blogs/</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/case-studies/</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/about-us/</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/contact/</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/careers/</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/ga4</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/dv360</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/gtm</loc>
     </url>
     <url>
       <loc>https://analyticsliv.com/ecommerce</loc>
     </url>

     
     ${posts
       .map(({ url }) => {
         return `
       <url>
           <loc>${`${url}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts.sitemap);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;