import React from "react";
import Grid from "../component/grid";
import Titlebar from "../component/titelbar";
import Card from "../component/card";

const WishList = () => {
  return (
    <div className="m-5 h-full">
      <Titlebar tag="Wishlist (4)">
        <button className="border-[1px] border-gray-300 h-[56px] w-[223px] m-10 hover:bg-slate-500 hover:text-white">
          Move All To Bag
        </button>
      </Titlebar>
      <div className=" gap-5 flex flex-wrap p-2 justify-between items-center mx-auto my-auto ">
        <Card
          tag="Gucci duffle bag"
          pra="$960 $1160"
          add="Add To Cart"
          rating={false}
          image={{
            src: "/Frame 609 (1).png",
            alt: "Example Image",
            width: 270,
            height: 250,
          }}
        ></Card>
        <Card
          tag="RGB liquid CPU Cooler"
          pra=" $1960"
          add="Add To Cart"
          rating={false}
          image={{
            src: "/Frame 610.png",
            alt: "Example Image",
            width: 270,
            height: 250,
          }}
        ></Card>
        <Card
          tag="GP11 Shooter USB Gamepad"
          pra="$550"
          add="Add To Cart"
          rating={false}
          image={{
            src: "/Frame 608.png",
            alt: "Example Image",
            width: 270,
            height: 250,
          }}
        ></Card>
        <Card
          tag="Quilted Satin Jacket"
          pra="$750"
          add="Add To Cart"
          rating={false}
          image={{
            src: "/jacket 1.png",
            alt: "Example Image",
            width: 270,
            height: 250,
          }}
        ></Card>
      </div>
      <Titlebar tag="Just For You">
      <button className="border-[1px] border-gray-300 h-[56px] w-[150px] m-10 hover:bg-slate-500 hover:text-white">
      See All
        </button>

      </Titlebar>
      <div  className=" gap-5 flex flex-wrap p-2 justify-between items-center mx-auto my-auto ">
        <Card     tag="ASUS FHD Gaming Laptop"
          pra="$960 $1160"
          add="Add To Cart"
          rating={true}
          image={{
            src: "/Frame 604.png",
            alt: "Example Image",
            width: 270,
            height: 250,
          }}>

        </Card>
        <Card     tag="IPS LCD Gaming Monitor"
          pra=" $1160"
          add="Add To Cart"
          rating={true}
          image={{
            src: "/Frame 613.png",
            alt: "Example Image",
            width: 270,
            height: 250,
          }}>

        </Card>
        <Card     tag="HAVIT HV-G92 Gamepad"
          pra=" $560"
          add="Add To Cart"
          rating={true}
          image={{
            src: "/ten.png",
            alt: "Example Image",
            width: 270,
            height: 250,
          }}>

        </Card>
        <Card     tag="AK-900 Wired Keyboard"
          pra="$200"
          add="Add To Cart"
          rating={true}
          image={{
            src: "/501.png",
            alt: "Example Image",
            width: 270,
            height: 250,
          }}>

        </Card>
      </div>
    </div>
  );
};

export default WishList;
