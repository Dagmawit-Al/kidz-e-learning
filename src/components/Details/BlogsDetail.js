import { Typography, Card, CardBody } from "@material-tailwind/react";
import Navbar from "../Navbar";
import TobBar from "../TobBar";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";

function ContentCard({ id, img, title, desc, name, date }) {
  let navigate = useNavigate();
    const goToBlog = () => {
      console.log("ID: ", id);
      if (id === 1) {
        navigate("./fullBlog");
      }
      else if (id === 2) {
        navigate("./fullBlog/blog3");
      }
      if (id === 3) {
        navigate("./fullBlog/blog2");
      }
    };
  return (
    // <Link to={goToBlog}>
      <Card
        className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl cursor-pointer hover:scale-110 "
        color="transparent"
        onClick={goToBlog}
      >
        <img
          src={img}
          alt="bg"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70 space-y-5" />
        <CardBody className="relative flex flex-col justify-end">
          <div>
            <Typography variant="h4" color="white" className="comic-sans-medium">
              {title}
            </Typography>
          </div>
          <div>
            <Typography
              variant="paragraph"
              color="white"
              className="my-2 font-normal"
            >
              {desc}
            </Typography>
            <Typography color="white" className="text-sm">
              {name} | {date}
            </Typography>
          </div>
        </CardBody>
      </Card>
    // </Link>
  );
}

const contents = [
  {
    id: 1,
    img: "https://www.material-tailwind.com/image/blog-11.jpeg",
    title: "Harnessing Electronics for Productivity and Creativity",
    desc: "In today's digital age, it's no secret that electronics play a significant role in the lives of children.",
    name: "Filagot Tesfaye",
    date: "April 10, 2024",
  },
  {
    id: 2,
    img: "https://www.material-tailwind.com/image/blog-10.jpeg",
    title: "Why Kids Should Learn About Entrepreneurship and Business Early On",
    desc: "In today's rapidly changing world, the importance of entrepreneurship and business education for kids cannot be overstated.",
    name: "Filagot Tesfaye",
    date: "April 10, 2024",
  },
  {
    id: 3,
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
    title: "Entrepreneurship: A Path to Economic Empowerment in Developing Countries",
    desc: "In the battle against poverty, entrepreneurship has emerged as a powerful tool to uplift communities and drive economic growth in developing countries.",
    name: "Filagot Tesfaye",
    date: "April 10, 2024",
  },
];

export function BlogsDetail() {
  return (
    <>
      <TobBar />
      {/* <Navbar className="" /> */}
      <section className="container flex flex-col items-center mx-auto space-y-10 px-4 sm:px-8 py-10 lg:py-20 xl:py-28">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mystery-quest-header text-center pt-8 leading-tight md:leading-normal"
        >
          Mentorable Blog
        </Typography>
        {/* <Typography
          variant="lead"
          className="roboto-medium text-[#F7F9F3] text-center mt-2 max-w-lg !font-normal"
        >
          Entrepreneurship for Kids
        </Typography> */}
        <PopularBlog />
        <div className=" mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {contents.map(({ id, img, title, desc, name, date }) => (
            <ContentCard
              id={id}
              key={title}
              img={img}
              title={title}
              desc={desc}
              name={name}
              date={date}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export function PopularBlog() {
  let navigate = useNavigate();

  const goToFullBlog = () => {
    navigate("./fullBlog");
  };

  return (
    <>
      <Card className="flex flex-col md:flex-row bg-purple-200 w-full p-6 md:p-10 space-y-6 md:space-y-3 md:space-x-12 items-center">
        <img
          src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg"
          className="rounded-2xl shadow-4-strong w-full md:w-1/2 h-auto"
          alt="Blog Image"
        />
        <div className="flex flex-col w-full space-y-3 md:w-1/2 md:space-y-5 items-center md:items-start">
          <a
            href="/blogs/fullBlog"
            className="comic-sans-medium font-bold text-center md:text-left"
            title="Business Plans: A Step-by-Step Guide for Kid Entrepreneurs"
          >
            Harnessing Electronics for Productivity and Creativity
          </a>
          <div className="flex flex-row space-x-3 text-gray-600 text-sm">
            <p className="roboto-regular-italic text-sm">Filagot Tesfaye</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="roboto-regular-italic text-sm">March 21, 2024</p>
          </div>
          <p className="bubblegum-sans-subheader text-center md:text-left">
            In today's digital age, it's no secret that electronics play a significant role in the lives
            of children. From smartphones and tablets to laptops and gaming consoles,
            technology has become an integral part of daily life for many kids. However, [...]
          </p>
          <button
            type="button"
            className="btn outline-button m-2 md:w-full bg-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4 md:py-2 md:px-6 hover:border-black rounded"
            onClick={goToFullBlog}
          >
            Read
          </button>
        </div>
      </Card>
    </>
  );
}

export default BlogsDetail;
