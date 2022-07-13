import React from "react";
import Skeleton from "react-loading-skeleton";


const BannerSkeleton = () =>{
    return(
        <div className="w-full h-[429px] bg-zinc-500 flex justify-center items-center" >
          <div className="absolute text-white flex flex-col w-[800px]">
            <Skeleton height={30} width={200} />
            <div className="flex flex-col my-4 text-lg">
              <Skeleton height={30} width={150} />
              <Skeleton height={30} width={100} />
            </div>
          </div>
        </div>
    )
}
export default BannerSkeleton;