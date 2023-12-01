// Header.jsx
"use client";
export const menu = [
  {
    name: "Home",
    link: "/",
    subItems: [
      { name: "Top Movies", link: "#topMovies", id: "topMovies" },
      { name: "Random Movies", link: "#randomMovies", id: "randomMovies" },
      { name: "Top Lists", link: "#topLists", id: "topLists" },
    ],
  },
  {
    name: "Search",
    link: "/search",
    subItems: [
      { name: "Movie", link: "" },
      { name: "List", link: "" },
    ],
  },
  {
    name: "Me",
    link: "/user/id",
    subItems: [
      { name: "Log in", link: "/user/login" },
      { name: "Profile", link: "/user/profile" },
      { name: "Log out", link: "/user/logout" },
      { name: "Sign up", link: "/user/signup" },
      { name: "Settings", link: "/user/settings" },
    ],
  },
];
