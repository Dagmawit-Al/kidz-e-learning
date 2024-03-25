import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const ChapterSummaryCard = (props) => {
  return (
    <Card className="p-4 bg-regal-blue text-white">
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Course
        </Typography>
        <Typography>
          This course is part of Google Data Analytics Professional Certificate
        </Typography>
        <Typography variant="h2" className="border-t-2 pt-2 mt-2 text-xl">
          Beginner level
        </Typography>
        <Typography>Recommended experience</Typography>
        <Typography variant="h2" className="border-t-2 pt-2 mt-2 text-xl">
          18 hours(approximately)
        </Typography>
        <Typography variant="h2" className="border-t-2 pt-2 mt-2 text-xl">
          Flexible schedule
        </Typography>
        <Typography>Learn at your own pace</Typography>
      </CardBody>
      <CardFooter className="pt-4">
        <button
          onClick={props.handlePurchaseButton2}
          className="bg-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-2  hover:border-black rounded "
        >
          Purchase Course
        </button>
      </CardFooter>
    </Card>
  );
};

export default ChapterSummaryCard;
