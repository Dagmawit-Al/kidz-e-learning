import React from "react";
import TobBar from "../TobBar";
import Navbar from "../Navbar";
import { Typography } from "@material-tailwind/react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import blog2 from "../../assets/images/Blog2.jpg";
import profile from "../../assets/images/Filagot pic.jpg";

const Blog2 = () => {
    let navigate = useNavigate();

    const goToBlog1 = () => {
        navigate("./fullBlog");
    };

    const goToBlog3 = () => {
        navigate("./blog3");
    };

    const goToBlog4 = () => {
        navigate("./blog4");
    };

    return (
        <div id="blog2">
            <TobBar />
            {/* <Navbar /> */}
            {/* <section className="container relative flex flex-col justify-start items-center mx-auto space-y-10 px-8 py-10 lg:py-28">
                <Typography
                    variant="h2"
                    color="blue-gray"
                    className="mystery-quest-header leading-relaxed p-5 m-10"
                >
                    Business Plans: A Step-by-Step Guide for Kid Entrepreneurs
                </Typography>

                <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg" className="w-full rounded-2xl shadow-4-strong" />
                <div className="relative flex flex-row justify-start space-x-3">
                    <p className="text-slate-400 text-lg">Filagot Tesfaye</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                    </svg>

                    <p className="text-slate-400">March 21, 2024</p>
                </div>
            </section> */}

            <main className="container relative flex flex-col justify-start items-center mx-auto space-y-8 sm:space-y-10 mt-10 px-4 sm:px-8 py-10 lg:py-20 xl:py-28 antialiased">
                <div className="flex justify-between w-full px-0 md:px-4">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img
                                        className="mr-4 w-24 h-24 rounded-full"
                                        src={profile}
                                    />
                                    <div>
                                        <a
                                            href="#"
                                            rel="author"
                                            className="text-md md:text-xl font-bold text-yellow-100 dark:text-white"
                                        >
                                            Filagot Tesfaye
                                        </a>
                                        <p className="text-sm md:text-xl text-base text-white dark:text-white">
                                            Entrepreneur, Engineer & International Advisor
                                        </p>
                                        <p className="text-sm md:text-xl text-base text-white dark:text-white">
                                            <time pubdate datetime="2022-02-08" title="February 8th, 2022">
                                                Apr. 10, 2024
                                            </time>
                                        </p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="comic-sans-medium mb-4 text-yellow-100 font-extrabold leading-tight dark:text-white">
                                Entrepreneurship: A Path to Economic Empowerment <br /> in Developing Countries
                            </h1>
                        </header>
                        <figure className="mb-6">
                            <img
                                src={blog2}
                                alt=""
                                className="w-full rounded-lg shadow-lg dark:shadow-black/30"
                            />
                        </figure>
                        <div className="space-y-6 text-lg">
                            <p class="roboto-medium-italic text-xl lead text-yellow-100">
                                In the battle against poverty, entrepreneurship has emerged as a powerful
                                tool to uplift communities and drive economic growth in developing countries.
                                By empowering individuals to create their businesses and generate income,
                                entrepreneurship not only provides solutions to local challenges but also fosters sustainable
                                development.
                            </p>
                            <p class="roboto-medium-italic text-xl lead text-yellow-100">
                                In this blog, we'll explore how entrepreneurship is making a difference in eradicating
                                economic poverty in some of the world's poorest countries, with inspiring examples of
                                success stories.
                            </p>

                            <h2 className="comic-sans-medium text-yellow-100">1. Empowering Local Communities</h2>
                            <p class="roboto-medium text-xl lead text-yellow-100">
                                In many developing countries, entrepreneurship catalyzes empowering local communities.
                                By providing individuals with the opportunity to start their own businesses, entrepreneurship
                                creates jobs, stimulates economic activity, and reduces dependence on external aid.
                                For example, in Bangladesh, Muhammad Yunus pioneered the concept of microfinance
                                through the Grameen Bank, providing small loans to impoverished individuals, particularly women,
                                to start their own businesses. Today, microfinance institutions around the world continue to
                                empower millions of people to lift themselves out of poverty through entrepreneurship.
                            </p>
                            <h2 className="comic-sans-medium text-yellow-100">2. Fostering Innovation and Technology</h2>
                            <p class="roboto-medium text-xl lead text-yellow-100">
                                Entrepreneurship is driving innovation and technological advancements in developing
                                countries, paving the way for economic growth and prosperity. Countries like India and
                                Kenya have seen a surge in tech startups leveraging mobile technology to address local
                                challenges and improve livelihoods. For instance, in Kenya, the mobile payment platform
                                M-Pesa has revolutionized financial inclusion, allowing millions of people, particularly
                                those in rural areas, to access banking services and participate in the formal economy.
                                Similarly, India's thriving startup ecosystem is fostering innovation across various
                                sectors, from healthcare and agriculture to education and e-commerce, creating
                                opportunities for economic advancement.
                            </p>
                            <h2 className="comic-sans-medium text-yellow-100">3. Promoting Sustainable Development</h2>
                            <p class="roboto-medium text-xl lead text-yellow-100">
                                Entrepreneurship plays a crucial role in promoting sustainable development by
                                addressing environmental and social challenges while fostering economic growth.
                                In countries like Brazil, social entrepreneurs are leading initiatives to tackle
                                issues such as poverty, inequality, and environmental degradation.
                                One notable example is the Cooperativa Central dos Assentamentos do MST (COCAMAR),
                                a cooperative movement in Brazil that supports landless farmers by providing training,
                                resources, and market access to produce organic and fair-trade products.
                                By promoting sustainable farming practices and empowering marginalized communities,
                                initiatives like COCAMAR contribute to both economic development and environmental
                                conservation.
                            </p>
                            <h2 className="comic-sans-medium text-yellow-100">4. Creating Resilient Economies</h2>
                            <p class="roboto-medium text-xl lead text-yellow-100">
                                Entrepreneurship cultivates resilience in developing countries by diversifying
                                economies and reducing vulnerability to external shocks. In Rwanda, the government
                                has prioritized entrepreneurship as a key driver of economic growth and poverty
                                reduction following the devastating genocide in 1994. Through initiatives like the
                                Rwanda Development Board and the Kigali Innovation City, Rwanda has fostered a
                                vibrant startup ecosystem, attracting investment, promoting innovation, and
                                creating opportunities for youth entrepreneurship. Today, Rwanda's resilient
                                economy continues to grow, driven by entrepreneurship and innovation across
                                various sectors.

                            </p>

                            <p class="roboto-medium-italic text-xl lead text-yellow-100">
                                Entrepreneurship holds immense potential as a tool for eradicating economic poverty in
                                developing countries. By empowering individuals, fostering innovation, promoting
                                sustainable development, and creating resilient economies, entrepreneurship not
                                only provides pathways out of poverty but also cultivates prosperity and opportunity
                                for future generations. As we continue to witness the transformative impact of
                                entrepreneurship in countries around the world, let us support and celebrate the
                                entrepreneurial spirit as a driving force for positive change and inclusive growth
                                on a global scale. Together, we can build a brighter and more prosperous future for all.
                            </p>
                        </div>

                        {/* <section class="not-format">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Discussion (20)
                </h2>
              </div>
              <form class="mb-6">
                <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label for="comment" class="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="6"
                    class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Post comment
                </button>
              </form>
              <article class="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                <footer class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                    <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                      <img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough"
                      />
                      Michael Gough
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment1Button"
                    data-dropdown-toggle="dropdownComment1"
                    class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span class="sr-only">Comment settings</span>
                  </button>

                  <div
                    id="dropdownComment1"
                    class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>
                  Very straight-to-point article. Really worth time reading.
                  Thank you! But tools are just the instruments for the UX
                  designers. The knowledge of the design tools are as important
                  as the creation of the design strategy.
                </p>
                <div class="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    class="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      class="mr-1.5 w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article class="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
                <footer class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                    <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                      <img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="Jese Leos"
                      />
                      Jese Leos
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-12"
                        title="February 12th, 2022"
                      >
                        Feb. 12, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment2Button"
                    data-dropdown-toggle="dropdownComment2"
                    class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span class="sr-only">Comment settings</span>
                  </button>

                  <div
                    id="dropdownComment2"
                    class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>Much appreciated! Glad you liked it ☺️</p>
                <div class="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    class="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      class="mr-1.5 w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article class="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <footer class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                    <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                      <img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie Green"
                      />
                      Bonnie Green
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-03-12"
                        title="March 12th, 2022"
                      >
                        Mar. 12, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment3Button"
                    data-dropdown-toggle="dropdownComment3"
                    class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span class="sr-only">Comment settings</span>
                  </button>

                  <div
                    id="dropdownComment3"
                    class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>
                  The article covers the essentials, challenges, myths and
                  stages the UX designer should consider while creating the
                  design strategy.
                </p>
                <div class="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    class="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      class="mr-1.5 w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article class="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <footer class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                    <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                      <img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                        alt="Helene Engels"
                      />
                      Helene Engels
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-06-23"
                        title="June 23rd, 2022"
                      >
                        Jun. 23, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment4Button"
                    data-dropdown-toggle="dropdownComment4"
                    class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  </button>

                  <div
                    id="dropdownComment4"
                    class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>
                  Thanks for sharing this. I do came from the Backend
                  development and explored some of the tools to design my Side
                  Projects.
                </p>
                <div class="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    class="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      class="mr-1.5 w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
            </section> */}
                    </article>
                </div>
            </main>

            {/* <aside
                aria-label="Related articles"
                class="py-8 lg:py-24 bg-[#e293ac] dark:bg-gray-800"
            >
                <div class="px-4 mx-auto max-w-screen-xl">
                    <h2 class="mb-8 comic-sans-large text-2xl font-bold text-white dark:text-white">
                        Other Articles
                    </h2>
                    <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        <article class="max-w-xs">
                            <a href="#">
                                <img
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                                    class="mb-5 rounded-lg"
                                    alt="Image 1"
                                />
                            </a>
                            <h2 class="mb-2 comic-sans-medium text-xl font-bold leading-tight text-white dark:text-white">
                                <a href="#">Harnessing Electronics for Productivity and Creativity</a>
                            </h2>
                            <p class="mb-4 roboto-regular text-lg text-gray-800 dark:text-gray-400">
                                In today's digital age, it's no secret that electronics play a significant role
                                in the lives of children.
                            </p>
                            <button
                                type="button"
                                onClick={goToBlog1}
                                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                            >
                                Read in 2 minutes
                            </button>
                        </article>
                        <article class="max-w-xs">
                            <a href="#">
                                <img
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                                    class="mb-5 rounded-lg"
                                    alt="Image 2"
                                />
                            </a>
                            <h2 class="mb-2 comic-sans-medium text-xl font-bold leading-tight text-white dark:text-white">
                                <a href="#">Why Kids Should Learn About Entrepreneurship and Business Early On</a>
                            </h2>
                            <p class="mb-4 roboto-regular text-lg text-gray-800 dark:text-gray-400">
                                In today's rapidly changing world, the importance of entrepreneurship and
                                business education for kids cannot be overstated.
                            </p>
                            <button
                                type="button"
                                onClick={goToBlog3}
                                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                            >
                                Read in 12 minutes
                            </button>
                        </article>
                        <article class="max-w-xs">
                            <a href="#">
                                <img
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                                    class="mb-5 rounded-lg"
                                    alt="Image 3"
                                />
                            </a>
                            <h2 class="mb-2 comic-sans-medium text-xl font-bold leading-tight text-white dark:text-white">
                                <a href="#">ለምርታማነት እና ለፈጠራ ኤሌክትሮኒክስ መጠቀም</a>
                            </h2>
                            <p class="mb-4 roboto-regular text-lg text-gray-800 dark:text-gray-400">
                                በዚህ በዲጂታል ዘመን፣ ኤሌክትሮኒክስ በልጆች ህይወት ውስጥ ትልቅ ሚና እንደሚጫወት ለማንም ሚስጥር
                                አይደለም።
                            </p>
                            <button
                                type="button"
                                onClick={goToBlog4}
                                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                            >
                                Read in 8 minutes
                            </button>
                        </article>
                    </div>
                </div>
            </aside> */}
            <Footer />
        </div>
    );
};

export default Blog2;
