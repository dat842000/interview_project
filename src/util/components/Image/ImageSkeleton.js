import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageSkeleton = ({ quantity }) => {
  return (
    <div className="min-w-0  grid grid-cols-3 items-center">
      {Array(quantity)
        .fill(0)
        .map((item,index) => (
          <div className="mx-auto my-4 p-4 w-96 h-96" key={index} >
            <Skeleton height={384} />
          </div>
        ))}
    </div>
  );
};
export default ImageSkeleton;
