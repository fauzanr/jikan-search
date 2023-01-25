import { AnimeRecord, AnimeRecordFull } from "@/types";
import { Session } from "next-auth";

export const mockAnime: AnimeRecord = {
  mal_id: 22,
  url: "https://myanimelist.net/anime/22/Tennis_no_Ouji-sama",
  images: {
    jpg: {
      image_url: "https://cdn.myanimelist.net/images/anime/6/21624.jpg",
      small_image_url: "https://cdn.myanimelist.net/images/anime/6/21624t.jpg",
      large_image_url: "https://cdn.myanimelist.net/images/anime/6/21624l.jpg",
    },
    webp: {
      image_url: "https://cdn.myanimelist.net/images/anime/6/21624.webp",
      small_image_url: "https://cdn.myanimelist.net/images/anime/6/21624t.webp",
      large_image_url: "https://cdn.myanimelist.net/images/anime/6/21624l.webp",
    },
  },
  trailer: {
    youtube_id: "",
    url: "",
    embed_url: "",
  },
  approved: true,
  titles: [
    {
      type: "Default",
      title: "Tennis no Ouji-sama",
    },
    {
      type: "Synonym",
      title: "TeniPuri",
    },
    {
      type: "Synonym",
      title: "PoT",
    },
    {
      type: "Japanese",
      title: "テニスの王子様",
    },
    {
      type: "English",
      title: "The Prince of Tennis",
    },
    {
      type: "French",
      title: "The Prince of Tennis",
    },
  ],
  title: "Tennis no Ouji-sama",
  title_english: "The Prince of Tennis",
  title_japanese: "テニスの王子様",
  title_synonyms: ["TeniPuri", "PoT"],
  type: "TV",
  source: "Manga",
  episodes: 178,
  status: "Finished Airing",
  airing: false,
  aired: {
    from: "2001-10-10T00:00:00+00:00",
    to: "2005-03-23T00:00:00+00:00",
    prop: {
      from: {
        day: 10,
        month: 10,
        year: 2001,
      },
      to: {
        day: 23,
        month: 3,
        year: 2005,
      },
    },
    string: "Oct 10, 2001 to Mar 23, 2005",
  },
  duration: "22 min per ep",
  rating: "PG-13 - Teens 13 or older",
  score: 7.86,
  scored_by: 80752,
  rank: 793,
  popularity: 1213,
  members: 174589,
  favorites: 2970,
  synopsis:
    "At the request of his father, tennis prodigy Ryouma Echizen has returned from America and is ready to take the Japanese tennis scene by storm. Aiming to become the best tennis player in the country, he enrolls in Seishun Academy—home to one of the best middle school tennis teams in Japan. \n\nAfter Ryouma catches the captain's eye, he finds himself playing for a spot on the starting lineup in the intra-school ranking matches despite only being a freshman. Due to his age, the rest of the Seishun Boys' Tennis Team are initially reluctant to accept him, but his skill and determination convinces them to let him in.\n\nArmed with their new \"super rookie,\" Seishun sets out to claim a spot in the National Tournament, hoping to take the coveted title for themselves. In order to do so, the team must qualify by playing through the Tokyo Prefectural and Kanto Regionals. Yet, the road ahead of them is shared by a plethora of strong schools, each playing tennis in unique ways for their own reasons. Ryouma and his teammates must learn to cooperate if they want to become the champions they aspire to be.\n\n[Written by MAL Rewrite]",
  background:
    "On April 24, 2007, Viz Media released the first DVD box set in the United States. An additional three box sets have been released since January 15, 2008. However, these four sets only contain 50 of the 178 episodes. On April 2, 2021, Funimation obtained licensing rights to the series and announced a new dub was in the works.",
  season: "fall",
  year: 2001,
  broadcast: {
    day: "Wednesdays",
    time: "19:00",
    timezone: "Asia/Tokyo",
    string: "Wednesdays at 19:00 (JST)",
  },
  producers: [
    {
      mal_id: 10,
      type: "anime",
      name: "Production I.G",
      url: "https://myanimelist.net/anime/producer/10/Production_IG",
    },
    {
      mal_id: 139,
      type: "anime",
      name: "Nihon Ad Systems",
      url: "https://myanimelist.net/anime/producer/139/Nihon_Ad_Systems",
    },
  ],
  licensors: [
    {
      mal_id: 102,
      type: "anime",
      name: "Funimation",
      url: "https://myanimelist.net/anime/producer/102/Funimation",
    },
    {
      mal_id: 119,
      type: "anime",
      name: "VIZ Media",
      url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
    },
  ],
  studios: [
    {
      mal_id: 80,
      type: "anime",
      name: "Trans Arts",
      url: "https://myanimelist.net/anime/producer/80/Trans_Arts",
    },
    {
      mal_id: 81,
      type: "anime",
      name: "Arts",
      url: "https://myanimelist.net/anime/producer/80/Trans_Artsz",
    },
  ],
  genres: [
    {
      mal_id: 30,
      type: "anime",
      name: "Sports",
      url: "https://myanimelist.net/anime/genre/30/Sports",
    },
  ],
  explicit_genres: [],
  themes: [
    {
      mal_id: 23,
      type: "anime",
      name: "School",
      url: "https://myanimelist.net/anime/genre/23/School",
    },
  ],
  demographics: [
    {
      mal_id: 27,
      type: "anime",
      name: "Shounen",
      url: "https://myanimelist.net/anime/genre/27/Shounen",
    },
  ],
};

export const mockAnimeFull: AnimeRecordFull = {
  ...mockAnime,
  relations: [
    {
      relation: "string",
      entry: [
        {
          mal_id: 13,
          type: "string",
          name: "string",
          url: "string",
        },
      ],
    },
  ],
  theme: {
    openings: [],
    endings: [],
  },
  external: [
    {
      name: "string",
      url: "string",
    },
  ],
  streaming: [
    {
      name: "string",
      url: "string",
    },
  ],
};

export const mockSession: Session = {
  user: {
    name: "My Name",
    email: "my@email.com",
    image: "https://lh3.googleusercontent.com",
  },
  expires: "2023-02-24T16:13:58.479Z",
};
