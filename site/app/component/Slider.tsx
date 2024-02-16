"use client";

import {FC, useState, MouseEvent} from "react";
import Image from "next/image";


const Slider: FC = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const sliderImages = [
        '/images/slider/slide-1-plashka.png',
        '/images/slider/slide-2-plashka.png',
        '/images/slider/slide-3-plashka.png',
        '/images/slider/slide-4-plashka.png',
        '/images/slider/slide-5-plashka.png',
    ]

    const handlePreviousSlide = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (activeSlide > 0) {
            setActiveSlide((prev) => prev - 1);
        } else {
            setActiveSlide(sliderImages.length - 1);
        }
    };

    const handleNextSlider = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (activeSlide < sliderImages.length - 1) {
            setActiveSlide((prev) => prev + 1);
        } else {
            setActiveSlide(0)
        }
    };

    return (
        <section className={"hidden md:block mt-20"}>
            <div
                className={
                    "relative flex flex-row items-center w-full overflow-hidden aspect-slider"
                }
            >
                <div
                    className={
                        "absolute w-8 2xl:w-12 hover:scale-110 ease-in duration-300 z-20"
                    }
                >
                    <button onClick={handlePreviousSlide} className={"w-full"}>
                        <Image
                            width={0}
                            height={0}
                            sizes={"100vw"}
                            src="/images/arrow.svg"
                            alt="arrow_left"
                            className={"w-full"}
                        />
                    </button>
                </div>
                <div
                    className={
                        "absolute w-8 2xl:w-12 right-0 rotate-180 hover:scale-110 ease-in duration-300 z-20"
                    }
                >
                    <button onClick={handleNextSlider} className={"w-full"}>
                        <Image
                            width={0}
                            height={0}
                            sizes={"100vw"}
                            src="/images/arrow.svg"
                            alt="arrow_right"
                            className={"w-full"}
                        />
                    </button>
                </div>
                <div className={`w-full`}>
                    {sliderImages.length > 0 && (
                        <Image
                            src={sliderImages[activeSlide]}
                            alt={sliderImages[activeSlide]}
                            width={0}
                            height={0}
                            sizes={"100vw"}
                            className={"w-full"}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export {Slider};
