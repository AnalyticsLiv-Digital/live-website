"use client"
import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Heighlights = () => {
    const [counterOn, setCounterOn] = useState(true);
    return (
        <section className='heighlights font-gilroy'>
            <div className='px-4 md:px-20 py-9'>
                <div className='grid md:grid-cols-4 grid-cols-1 items-center justify-between text-center gap-4 md:gap-2'>
                    <div>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1 className='text-[25px] text-[#000] font-medium'>
                                {counterOn && <CountUp start={0} end={200} duration={2} delay={0} />}
                                +
                            </h1>
                            <span className='text-[20px] text-[#000] font-medium'>Satisfied Clients</span>
                        </ScrollTrigger>
                    </div>
                    <div>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1 className='text-[25px] text-[#000] font-medium'>
                                {counterOn && <CountUp start={0} end={500} duration={2} delay={0} />}
                                +
                            </h1>
                            <span className='text-[20px] text-[#000] font-medium'>Successful Projects</span>
                        </ScrollTrigger>
                    </div>
                    <div>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1 className='text-[25px] text-[#000] font-medium'>
                                {counterOn && <CountUp start={0} end={30} duration={2} delay={0} />}
                                +
                            </h1>
                            <span className='text-[20px] text-[#000] font-medium'>Certified Experts</span>
                        </ScrollTrigger>
                    </div>
                    <div>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1 className='text-[25px] text-[#000] font-medium'>
                                {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}
                                +
                            </h1>
                            <span className='text-[20px] text-[#000] font-medium'>Solutions</span>
                        </ScrollTrigger>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Heighlights