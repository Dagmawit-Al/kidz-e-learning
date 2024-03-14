import React from "react";

function Testimony() {
    return (
        <div className='space-y-10 ' >
            <h2 class="mystery-quest-header text-center font-extrabold text-gray-900 dark:text-white">
                Testimony
            </h2>
            <div class="flex flex-row justify-between space-x-20 px-10">
                <iframe
                    className=' rounded-lg'
                    src="https://www.youtube.com/embed/viHILXVY_eU?si=kG9IYX4r3tKBqeeG"
                    width="75%"
                    height={350}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
                <div class="flex flex-col grid justify-items-end space-y-18">
                    <h1 class="bubblegum-sans-subheader mt-20">
                        "This platform will give your children the necessary tools to make it <br />
                        in this global economy.<br />
                        I highly recommend Kidz E-Learning."
                    </h1>
                    <p class="bubblegum-sans-subheader">- Mr. John Doe, Author of book</p>
                </div>
            </div>
        </div>
    )
}

export default Testimony;