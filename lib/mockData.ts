const movieAPI = {
  message: "OK",
  data: {
    id: "tt8358168",
    title: "The Royal Wedding Live with Cord and Tish!",
    release_year: "2018",
    runtime: 89,
    type: "Comedy",
    description:
      "I was very disappointed with this. I like Will Ferrell and Molly Shannon but this was boring and not really funny. Will and Molly reprise their role as television commentators Cord Hosenbeck and Tish Cattigan during the Royal Wedding. I was hoping for some amazing repartee between the two while they covered the Royal Wedding but this was just plain boring and lacked any real humor. I love improv but Shannon just seemed lost in this commentary and Ferrell was just boring. The jokes weren't funny and this just seemed to drag on.",
    cover:
      "https://m.media-amazon.com/images/M/MV5BNWVjMzE0YTctNWZmOC00ZDhiLTkxNDAtZDNjMzMyMDhkMGRiXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_QL75_UY281_CR18,0,190,281_.jpg",
    production: "Funny or Die",
    language: "none",
    liked_num: 1,
    rating: 0,
    rate_num: 0,
    liked_users: [
      {
        username: "ddd",
        email: "rexzhang68@gmail.com",
        gender: null,
        birthday: null,
        avatar: null,
      },
    ],
    comments: [
      {
        id: 10,
        user_email: "undefined",
        movie_id: "tt8358168",
        comment: "undefined",
        created_time: "2023-10-01T21:00:34.000Z",
        username: "undefined",
      },
      {
        id: 11,
        user_email: "rexzhang68@gmail.com",
        movie_id: "tt8358168",
        comment: "false",
        created_time: "2023-10-01T21:03:19.000Z",
        username: "undefined",
      },
      {
        id: 15,
        user_email: "rexzhang68@gmail.com",
        movie_id: "tt8358168",
        comment: "Love ittttt",
        created_time: "2023-10-01T23:00:56.000Z",
        username: "undefined",
      },
    ],
    related_lists: [
      {
        id: 26,
        name: "New List!",
        description: "",
        creator: "rexzhang68@gmail.com",
        liked_num: 1,
        owner_info: {
          username: "ddd",
          email: "rexzhang68@gmail.com",
          gender: null,
          birthday: null,
          avatar: null,
        },
      },
    ],
  },
};

const lists = [
  {
    id: 26,
    name: "New List!",
    description: "",
    creator: "rexzhang68@gmail.com",
    liked_num: 1,
  },
];
const listAPI = {
  message: "OK",
  data: {
    id: 26,
    name: "New List!",
    description: "",
    creator: "rexzhang68@gmail.com",
    liked_num: 1,
    movies: [movieAPI.data],
  },
};
const userAPI = {
  message: "OK",
  data: {
    username: "ddd",
    email: "rexzhang68@gmail.com",
    gender: null,
    birthday: null,
    avatar: null,
    likedMovies: [movieAPI.data],
    likedLists: [
      {
        id: 26,
        name: "New List!",
        description: "",
        creator: "rexzhang68@gmail.com",
        liked_num: 1,
      },
    ],
    lists: lists,
  },
};
