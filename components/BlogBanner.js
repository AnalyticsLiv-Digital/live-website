import React from 'react';

const BlogBanner = ({ relatedTo }) => {
    const Banners = [
        { related: 'dv360', img: '/DV_Banner_1.jpg', path: '/dv360' },
        { related: 'ga4', img: '', path: '/ga4' },
        { related: 'gtm', img: '', path: '/gtm' }
    ];

    return (
        <div>
            <div id="dvbanner_1" className='p-4'>
                {Banners.map((banner, id) =>
                    banner.related === relatedTo ? (
                        banner.related === 'dv360' ? <a href={banner.path} target='_blank'>
                            <img key={id} src={banner.img} alt={banner.related} />
                        </a>: null
                    ) : null
                )}
            </div>
        </div>
    );
};

export default BlogBanner;