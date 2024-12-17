'use client';
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const YtPlaylist = ({ name, ytPlaylistdata }) => {
    console.log("object comp : ", ytPlaylistdata)
    const sliderRef = useRef(null);

    const NextArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 right-[1px] transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            <FaArrowRight size={20} />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 left-[1px] transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            <FaArrowLeft size={20} />
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    speed: 1000,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 988,
                settings: {
                    dots: false,
                    speed: 1000,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    speed: 1000,
                    // nextArrow: false,
                    // prevArrow: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Handle slider pause/play when video starts/ends
    const handleVideoPlay = () => {
        sliderRef.current?.slickPause();
    };

    const handleVideoPause = () => {
        sliderRef.current?.slickPlay();
    };

    return (
        <section className="yt-playlist-carousel">
            <div className="px-4 py-8">
                <h2 className="text-center text-xl font-semibold mb-6">
                    {`${name} Playlist Videos`}
                </h2>
                <div className="carousel-custom">
                    <Slider {...settings} ref={sliderRef}>
                        {ytPlaylistdata?.map((id, index) => (
                            <div key={index} className="text-center px-5">
                                <iframe
                                    width="100%"
                                    height="400"
                                    src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
                                    title={`YouTube Video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    onMouseEnter={handleVideoPlay}
                                    onMouseLeave={handleVideoPause}
                                ></iframe>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

// export async function getServerSideProps(context) {
//     // Fetch data from external API

//     const res = await fetch(`${process.env.domain}/api/allytplaylists`)
//     const ytPlaylistdata = await res.json()


//     //console.log(ytPlaylistdata);
//     // Pass data to the page via props
//     return { props: { ytPlaylistdata } }
// }

export default YtPlaylist;