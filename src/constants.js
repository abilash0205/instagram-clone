import Home from "../src/assets/icons/Home.svg";
import Search from "../src/assets/icons/Search.svg";
import Explore from "../src/assets/icons/Explore.svg";
import Reels from "../src/assets/icons/Reels.svg";
import Messenger from "../src/assets/icons/Messenger.svg";
import Like from "../src/assets/icons/Navbar like.svg";
import Add from "../src/assets/icons/Add.svg";
import User from "../src/assets/icons/User.svg";

import video1 from "../src/assets/videos/5f6fc45a156f4f678dae5c75e10e7451.mp4";
import video2 from "../src/assets/videos/8fdfda26cf104ce29bd7b1a5bf6ed49b.mp4";
import video3 from "../src/assets/videos/24bdf9778e524f289f9a42d5584b7670.mp4";
import video4 from "../src/assets/videos/1537239710687_vivastatus.mp4";
import video5 from "../src/assets/videos/d3927a26ebfc4da489c6bbf062192a40.mp4";

export const navigationItems = [
  {
    id: 1,
    text: "Home",
    src: Home,
    path: "homepage",
  },
  {
    id: 2,
    text: "Search",
    src: Search,
    path: "search",
  },
  {
    id: 3,
    text: "Explore",
    src: Explore,
    path: "explore",
  },
  {
    id: 4,
    text: "Reels",
    src: Reels,
    path: "reels",
  },
  {
    id: 5,
    text: "Messages",
    src: Messenger,
    path: "messages",
  },
  {
    id: 6,
    text: "Notifications",
    src: Like,
    path: "notifications",
  },
  {
    id: 7,
    text: "Create",
    src: Add,
    path: "create",
  },
  {
    id: 8,
    text: "Profile",
    src: User,
    path: "profile",
  },
];

export const stories = [
  {
    id: 1,
    src: "https:placekitten.com/200/200",
    text: "kitty_one",
  },
  {
    id: 2,
    src: "https:placekitten.com/201/200",
    text: "kitty_two",
  },
  {
    id: 3,
    src: "https:placekitten.com/202/200",
    text: "kitty_three",
  },
  {
    id: 4,
    src: "https:placekitten.com/203/200",
    text: "kitty_four",
  },
  {
    id: 5,
    src: "https:placekitten.com/207/200",
    text: "kitty_five",
  },
  {
    id: 6,
    src: "https:placekitten.com/206/200",
    text: "kitty_five",
  },
];

export const userPosts = [
  {
    id: 1,
    profileSrc: "https:placekitten.com/202/200",
    profileName: "kitty_meow",
    timeline: "8w",
    imageSrc: "https:placekitten.com/202/200",
    imageAlt: "",
    likeCount: "101",
    description: "meow meow ...",
    commentCount: "14",
  },
  {
    id: 2,
    profileSrc: "https:placekitten.com/204/200",
    profileName: "kasper_kitty",
    timeline: "10w",
    imageSrc: "https:placekitten.com/204/200",
    likeCount: "180",
    description: "Hello Guys. I'm Kasper the kitty",
    commentCount: "79",
  },
  {
    id: 3,
    profileSrc: "https:placekitten.com/205/200",
    profileName: "gaban_kit",
    timeline: "1w",
    imageSrc: "https:placekitten.com/205/200",
    likeCount: "18,050",
    description: "Grrrrr....",
    commentCount: "794",
  },
  {
    id: 4,
    profileSrc:
      "https://i.pinimg.com/originals/53/a3/24/53a324a89f6a7dca4cc644d0f84472e5.jpg",
    profileName: "king_of_pirates",
    timeline: "5w",
    imageSrc:
      "https://preview.redd.it/yc40cow4tr691.png?auto=webp&s=0634e4b596dec75e35a2e138eac1ee075ffdd910",
    likeCount: "1,96,569",
    description: "Haaa haa finally took down Kaido 😂",
    commentCount: "89,587",
  },
  {
    id: 5,
    profileSrc:
      "https://staticg.sportskeeda.com/editor/2022/09/adc87-16620248461964.png?w=840",
    profileName: "nami",
    timeline: "5w",
    imageSrc:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/03/one-piece-theory-why-nami-can-hurt-luffy.jpg",
    likeCount: "3,00,000",
    description: "baka luffy the marines are gonna come after us 😡",
    commentCount: "1,00,000",
  },
];

export const reelsVideos = [
  {
    id: 1,
    videoSrc: video1,
    profilePicture: "https:placekitten.com/203/200",
    profileName: "uzumaki_naruto",
    videoDescription: "New turquoise skin MK14 🔥",
    songName: "🎵 lucky luke - drug . Original audio",
    likeCount: "10k",
    commentCount: "587",
  },
  {
    id: 2,
    videoSrc: video2,
    profilePicture: "https:placekitten.com/201/200",
    profileName: "eren_yaegar",
    videoDescription: "Finally bought the KTM RC 390...",
    songName: "🎵 i'd love to change the world . Original audio",
    likeCount: "974",
    commentCount: "125",
  },
  {
    id: 3,
    videoSrc: video3,
    profilePicture: "https:placekitten.com/202/200",
    profileName: "monkey_d_luffy",
    videoDescription: "Goated GOT edit",
    songName: "🎵 porkanda singam(remix) . Original audio",
    likeCount: "547k",
    commentCount: "100k",
  },
  {
    id: 4,
    videoSrc: video4,
    profilePicture: "https:placekitten.com/204/200",
    profileName: "denji",
    videoDescription: "I'm feeling high",
    songName: "🎵 alagooril x maruthani(remix) . Original audio",
    likeCount: "1.2M",
    commentCount: "547k",
  },
  {
    id: 5,
    videoSrc: video5,
    profilePicture: "https:placekitten.com/205/200",
    profileName: "itadori",
    videoDescription: "Life motivation quotes by Oogway sensei",
    songName: "🎵 can we kiss forever . Original audio",
    likeCount: "145k",
    commentCount: "784",
  },
];
