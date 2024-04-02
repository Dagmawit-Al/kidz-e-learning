import { Typography, Card, CardBody } from "@material-tailwind/react";
import Navbar from "../Navbar";
import TobBar from "../TobBar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

function ContentCard({ img, title, desc, name, date }) {
  return (
    <Card
      className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl cursor-pointer hover:scale-110 "
      color="transparent"
    >
      <img
        src={img}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70 space-y-5" />
      <CardBody className="relative flex flex-col justify-end">
        <Typography variant="h4" color="white">
          {title}
        </Typography>
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
      </CardBody>
    </Card>
  );
}

const contents = [
  {
    img: "https://www.material-tailwind.com/image/blog-11.jpeg",
    title: "Search and Discovery",
    desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
    name: "Filagot Tesfaye",
    date: "March 19, 2024",
  },
  {
    img: "https://www.material-tailwind.com/image/blog-10.jpeg",
    title: "Last visits in US",
    desc: "Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.",
    name: "Filagot Tesfaye",
    date: "March 19, 2024",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
    title: "Grow in a beautiful area",
    desc: "Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can't have both.",
    name: "Filagot Tesfaye",
    date: "March 19, 2024",
  },
];

export function BlogsDetail() {
  return (
    <>
      <TobBar />
      {/* <Navbar className="" /> */}
      <section className="container flex flex-col items-center mx-auto space-y-10 px-8 py-10 lg:py-28">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mystery-quest-header pt-8"
        >
          Mentorable Blog
        </Typography>
        <Typography
          variant="lead"
          className="text-[#F7F9F3] mt-2x max-w-lg !font-normal"
        >
          Entrepreneurship for Kids
        </Typography>
        <PopularBlog />
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {contents.map(({ img, title, desc, name, date }) => (
            <ContentCard
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
      <Card className="flex flex-row bg-purple-200 w-full  p-10 space-x-8">
        <img
          src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg"
          className="rounded-2xl shadow-4-strong"
          height="50%"
          width="50%"
        />
        <div className="flex flex-col space-y-5 items-center">
          <a
            class="bubblegum-sans-subheader text-xl"
            href="/blogs/fullBlog"
            title="Business Plans: A Step-by-Step Guide for Kid Entrepreneurs"
          >
            Business Plans: A Step-by-Step Guide for Kid Entrepreneurs
          </a>
          <div className="flex flex-row space-x-3">
            <p className="">Filagot Tesfaye</p>
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
            <p>March 21, 2024</p>
          </div>
          <p className="bubblegum-sans-subheader">
            Embarking on an entrepreneurial journey is exciting for kids,
            offering them a unique opportunity to learn valuable life skills
            such as problem-solving, financial literacy, and creativity.
            Creating a business plan is a foundational step in this journey,
            helping young entrepreneurs transform their ideas into actionable
            plans. This guide is designed to make the process engaging [...]
          </p>
          <button
            type="button"
            className=" w-[10%] bg-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-2  hover:border-black rounded "
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
