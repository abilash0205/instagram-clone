// import Like from "../assets/icons/Like.svg";
import Comment from "../assets/icons/Comment.svg";
import Send from "../assets/icons/Send.svg";
import More from "../assets/icons/More.svg";
import Bookmark from "../assets/icons/Bookmark.svg";
import { Card } from "react-bootstrap";
import { reelsVideos } from "../constants";
import React, { useEffect, useRef, useState } from "react";

const Reels = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(
    Array(reelsVideos.length).fill(false)
  );
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const vidRef = useRef(reelsVideos.map(() => React.createRef()));

  const onVideoClick = (index) => {
    const newIsVideoPlaying = [...isVideoPlaying];
    newIsVideoPlaying[index] = !newIsVideoPlaying[index];

    if (currentVideoIndex !== null && currentVideoIndex !== index) {
      vidRef.current[currentVideoIndex].current.pause();
      newIsVideoPlaying[currentVideoIndex] = false;
    }

    vidRef.current[index].current[
      newIsVideoPlaying[index] ? "play" : "pause"
    ]();
    setIsVideoPlaying(newIsVideoPlaying);
    setCurrentVideoIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (currentVideoIndex !== null) {
        vidRef.current[currentVideoIndex].current.pause();
        setIsVideoPlaying((prev) =>
          prev.map((_, i) => i === currentVideoIndex)
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentVideoIndex]);

  const likePost = (event) => {
    const likeButton = event.currentTarget;
    likeButton.style.fill = "red";
  };

  return (
    <div className="pt-3">
      {reelsVideos.map(
        (
          {
            id,
            videoSrc,
            profilePicture,
            profileName,
            videoDescription,
            songName,
            likeCount,
            commentCount,
          },
          index
        ) => (
          <div key={id} className="flex items-center justify-center gap-3 my-5">
            <Card className="bg-black" onClick={() => onVideoClick(index)}>
              <video
                className="shadow-2xl w-[400px] h-[650px]"
                src={videoSrc}
                ref={vidRef.current[index]}
              ></video>

              <Card.ImgOverlay className="flex flex-col justify-end">
                <Card.Title className="text-white">
                  <a href="#" className="flex gap-3 items-center">
                    <img
                      className="rounded-full w-8 h-8"
                      src={profilePicture}
                      alt="profile picture"
                    />
                    <p className="text-base">
                      {profileName} .{" "}
                      <span className="border border-white p-1 rounded">
                        Follow
                      </span>
                    </p>
                  </a>
                </Card.Title>
                <Card.Text className="text-white py-2">
                  {videoDescription}
                </Card.Text>
                <Card.Text className="text-white">{songName}</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <div
              className="flex flex-col gap-4 ml-2"
              style={{ alignSelf: "flex-end", justifySelf: "flex-end" }}
            >
              <span href="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  onClick={(e) => likePost(e)}
                >
                  <path
                    d="M3.58447 12.941L11.2674 21.2113C11.663 21.6372 12.337 21.6372 12.7326 21.2113L20.4155 12.941C22.5282 10.6669 22.5282 6.97976 20.4155 4.70561C18.3029 2.43146 14.8777 2.43146 12.765 4.70561L12.7326 4.74049C12.337 5.16635 11.663 5.16635 11.2674 4.74049L11.235 4.70561C9.12233 2.43146 5.69709 2.43146 3.58447 4.70561C1.47184 6.97976 1.47184 10.6669 3.58447 12.941Z"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>

                {likeCount}
              </span>
              <a href="">
                <img src={Comment} alt="comment" className="w-7 h-7" />
                {commentCount}
              </a>
              <img src={Send} alt="share" className="w-7 h-7" />
              <img src={Bookmark} alt="save" className="w-8 h-8" />
              <img src={More} alt="more" className="w-7 h-7" />
              <img
                className="w-7 h-7 rounded"
                src="https:placekitten.com/206/200"
                alt="cute kitty"
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Reels;
