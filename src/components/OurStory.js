import React from "react";
import TobBar from "./TobBar";
import Footer from "./Footer";
import profile from "../assets/images/Filagot pic.jpg"

const OurStory = () => {

    return (
        <>
            <TobBar />


            <main className="container relative flex flex-col justify-start items-center mx-auto space-y-8 sm:space-y-10 mt-10 px-4 sm:px-8 py-10 lg:py-20 xl:py-28 antialiased">
                <div className="flex justify-between w-full px-4 sm:px-0">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">

                            <h1 className="comic-sans-large md:comic-sans-large mb-4 text-yellow-100 font-extrabold leading-tight md:leading-normal dark:text-white text-center">
                                My Story
                            </h1>
                            <address className="flex flex-col items-center mb-6 not-italic">
                                <div className="flex flex-col  space-y-8 items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img
                                        className="mr-4 rounded-full"
                                        width={200}
                                        height={200}
                                        src={profile}
                                    />
                                    <div className="flex flex-col space-y-5">
                                        <a
                                            href="#"
                                            rel="author"
                                            className="text-center text-md md:text-2xl font-bold text-yellow-100 dark:text-white"
                                        >
                                            Filagot Tesfaye
                                        </a>
                                        <p className="text-center text-sm md:text-xl text-base text-white dark:text-white">
                                            Entrepreneur, Engineer & International Advisor
                                        </p>
                                    </div>
                                </div>
                            </address>
                        </header>

                        <figure className="mb-6">
                            <img
                                // src={blog1}
                                alt=""
                                className="w-full rounded-lg shadow-lg dark:shadow-black/30"
                            />
                        </figure>
                        <div className="space-y-6 text-lg">
                            <p class="comic-sans-small text-xl lead text-yellow-100">
                                After navigating the complexities of the business world and searching for my own path to success,
                                I realized something important: the language of business doesn't have to be complicated.
                                So, I decided to simplify those heavy business terms like "investment," "innovation,"
                                and "new market" into language that kids can easily grasp.
                            </p>
                            <p class="comic-sans-small text-xl lead text-yellow-100">
                                That's when I came up with the idea to write an e-book specifically designed for children.
                                My goal? To introduce them to the exciting world of business and entrepreneurship from an
                                early age.
                            </p>

                            <p class="comic-sans-small text-xl lead text-yellow-100">
                                In this e-book, I break down complex concepts into bite-sized pieces,
                                making them fun and easy to understand. Through engaging stories and colorful
                                illustrations, children can learn about the basics of business in a way that's both
                                educational and entertaining.
                            </p>
                            <p class="comic-sans-small text-xl lead text-yellow-100">
                                As an entrepreneur, I'm passionate about making a positive difference in the world.
                                And what better way to do that than by inspiring the next generation of young minds to dream
                                big and pursue their entrepreneurial aspirations?
                            </p>
                            <p class="comic-sans-small text-xl lead text-yellow-100">
                                Join me on this journey as we empower kids to think creatively, 
                                take risks, and turn their ideas into reality. Together, we can shape a 
                                brighter future filled with innovation, opportunity, and endless possibilities.

                            </p>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default OurStory;
