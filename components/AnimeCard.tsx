import Image from "next/image";
import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

interface Props {
  title: string;
  image: string;
  rating: number;
}

const AnimeCard = ({ title, image, rating }: Props) => {
  return (
    <div className="max-w-[200px]">
      <Image
        src={image}
        alt="/"
        width={1000}
        height={1000}
        className="aspect-[9/13] object-cover max-w-[150px]"
      />
      <div className="my-2">
        <h1 className="font-black uppercase text-[#ff6100]">{title}</h1>
        <Rating value={rating} style={{ maxWidth: 60 }} readOnly />
      </div>
    </div>
  );
};

export default AnimeCard;
