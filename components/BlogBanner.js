import React from 'react';

const BlogBanner = ({ blogData }) => {
    const Banners = [
        // { related: 'dv360', img: '/DV_Banner_1_265X300 (1).png', path: '/dv360' },
        { related: 'dv360', img: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Blog_Banner_For_DV_1_V2_300x250.png', path: '/dv360' },
        { related: 'firebase', img: '/DV_Banner_1.jpg', path: '/ga4' },
        { related: 'lookerstudio', img: '/DV_Banner_1.jpg', path: '/gtm' }
    ];

    return (
        <div>
            {blogData?.relatedTo &&
                <div id="dvbanner_1" className='p-4'>
                    {Banners?.map((banner, id) =>
                        banner?.related === blogData?.relatedTo ? (
                            banner?.related === 'dv360' ? <a href={banner?.path} target='_blank'>
                                <img key={id} src={banner?.img} alt={banner?.related} className='w-full' />
                            </a> : null
                        ) : null
                    )}
                </div>
            }
            {blogData?.youtube &&
                <div className=''>
                    <div id="lookerstudioBanner" className="lookerstudio-video-container" style={{ height: '200px' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src={blogData?.youtube}
                            title={blogData?.youtube}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            }
        </div>
    );
};

export default BlogBanner;






// import React from 'react';

// const BlogBanner = ({ blogData }) => {

//     console.log("object", blogData, blogData?.relatedTo)
//     const Banners = [
//         { related: 'dv360', img: '/DV_Banner_1.jpg', path: '/dv360' },
//         { related: 'firebase', videoUrl: 'https://www.youtube.com/embed/8nZTRoU_heY?si=pCe9jK0sxhkqIiXt' },
//         { related: 'lookerstudio', videoUrl: 'https://www.youtube.com/embed/yZPE7HNh6vY?si=AFmpU4PgxjTMQnxp' }
//     ];

//     return (
//         <div>
//             <div id="dvbanner_1" >
//                 {Banners.map((banner, id) =>
//                     banner.related === blogData.relatedTo ? (
//                         banner.related === 'dv360' ? (
//                             <a key={id} href={banner.path} target='_blank' className='p-2'>
//                                 <img src={banner.img} alt={banner.related} />
//                             </a>
//                         ) : null
//                     ) : null
//                 )}
//             </div>

//             {blogData.relatedTo === 'firebase' && (
//                 <div id="firebaseBanner" className="firebase-video-container" style={{ height: '200px' }}>
//                     {Banners.map((banner, id) =>
//                         banner.related === 'firebase' ? (
//                             <iframe
//                                 key={id}
//                                 width="100%"
//                                 height="100%"
//                                 src={banner.videoUrl}
//                                 title={banner.related}
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>
//                         ) : null
//                     )}
//                 </div>
//             )}

//             {blogData.relatedTo === 'lookerstudio' && (
//                 <div id="lookerstudioBanner" className="lookerstudio-video-container" style={{ height: '200px' }}>
//                     {Banners.map((banner, id) =>
//                         banner.related === 'lookerstudio' ? (
//                             <iframe
//                                 key={id}
//                                 width="100%"
//                                 height="100%"
//                                 src={banner.videoUrl}
//                                 title={banner.related}
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>
//                         ) : null
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BlogBanner;