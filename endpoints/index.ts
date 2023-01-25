const API_URL = "https://api.jikan.moe/v4";

export const GET_ANIMES = `${API_URL}/anime`;
export const GET_ANIME = (id: number) => `${API_URL}/anime/${id}/full`;
