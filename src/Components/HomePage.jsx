import { stories, userPosts } from "../constants";
import { Card } from "react-bootstrap";
import Comment from "../assets/icons/Comment.svg";
import Send from "../assets/icons/Send.svg";
import Bookmark from "../assets/icons/Bookmark.svg";

const HomePage = () => {
  const likePost = (event) => {
    const likeButton = event.currentTarget;
    likeButton.style.fill = "red";
  };
  return (
    <div className="flex items-center justify-center flex-col">
      {/* ------Instagram Stories------ */}
      <div className="max-w-[550px]">
        <ul className="flex space-x-3 mt-2 pt-5">
          {stories.map(({ id, src, text }) => (
            <li className="flex flex-col items-center space-y-1" key={id}>
              <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a href="#" className="block bg-white p-1 rounded-full">
                  <img
                    className="md:h-14 md:w-14 rounded-full w-11 h-11"
                    src={src}
                    alt="cute kitty"
                  />
                </a>
              </div>
              <a href="#">{text}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Homepage feeds */}
      <div className="mt-3">
        {userPosts.map(
          ({
            id,
            profileSrc,
            profileName,
            timeline,
            imageSrc,
            likeCount,
            description,
            commentCount,
          }) => (
            <div key={id} className="my-3">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                  <a href="" className="block bg-white p-1 rounded-full">
                    <img
                      className="rounded-full w-11 h-11"
                      src={profileSrc}
                      alt="profile picture"
                    />
                  </a>
                </div>
                <a href="">
                  {profileName} . {timeline}
                </a>
              </div>
              <Card className="w-[550px] h-[550px] my-2">
                <Card.Img
                  src={imageSrc}
                  className="w-[550px] h-[550px] object-contain"
                ></Card.Img>
              </Card>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <svg
                    className="w-7 h-7"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={(e) => likePost(e)}
                  >
                    <path
                      d="M3.58447 12.941L11.2674 21.2113C11.663 21.6372 12.337 21.6372 12.7326 21.2113L20.4155 12.941C22.5282 10.6669 22.5282 6.97976 20.4155 4.70561C18.3029 2.43146 14.8777 2.43146 12.765 4.70561L12.7326 4.74049C12.337 5.16635 11.663 5.16635 11.2674 4.74049L11.235 4.70561C9.12233 2.43146 5.69709 2.43146 3.58447 4.70561C1.47184 6.97976 1.47184 10.6669 3.58447 12.941Z"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>

                  <img src={Comment} alt="comment" className="w-7 h-7" />
                  <img src={Send} alt="share" className="w-7 h-7" />
                </div>
                <div className="">
                  <img src={Bookmark} alt="save" className="w-9 h-9" />
                </div>
              </div>
              <div className="py-1">
                <p className="py-1 font-semibold">{likeCount} likes</p>
                <p>
                  <span className="font-semibold">{profileName}</span>{" "}
                  {description}
                </p>
                <p className="pt-2 text-muted">
                  View all {commentCount} comments
                </p>
                <p className="text-muted">Add a comment...</p>
              </div>

              <hr className="my-2" />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
