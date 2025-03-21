import React from "react";
import Image from "next/image";

export default function Review() {
  return (
    <>
      <p className="review-title">What people say about us </p>
      <div className="tweets-container">
        <Image
          src="/public/frame1.svg"
          alt="Tweet 1"
          className="tweet-image tweet-1"
          width={716}
          height={262}
        />
        <div className="dashed-line dashed-line-1"></div>

        <Image
          src="/public/frame2.svg"
          alt="Tweet 2"
          className="tweet-image tweet-2"
          width={716}
          height={262}
        />
        <div className="dashed-line dashed-line-2"></div>

        <Image
          src="/public/frame3.svg"
          alt="Tweet 3"
          className="tweet-image tweet-3"
          width={716}
          height={262}
        />
        <div className="dashed-line dashed-line-3"></div>

        <Image
          src="/public/frame4.svg"
          alt="Tweet 4"
          className="tweet-image tweet-4"
          width={716}
          height={262}
        />
        <div className="dashed-line dashed-line-4"></div>
      </div>
    </>
  );
}