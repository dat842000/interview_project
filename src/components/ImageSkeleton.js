import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageSkeleton = ({ quantity }) => {
  return (
    <div className="w-screen grid grid-cols-3">
      {Array(quantity)
        .fill(0)
        .map((item,index) => (
          <div className="mx-auto p-4" key={index} >
            <Skeleton  width={384} height={384} />
          </div>
        ))}
    </div>
  );
};
export default ImageSkeleton;
