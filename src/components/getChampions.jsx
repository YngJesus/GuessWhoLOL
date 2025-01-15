import axios from "axios";

const BASE_URL = "https://ddragon.leagueoflegends.com";

export const getChampions = async () => {
  try {
    const version = "15.1.1"; // Specify the game version
    const response = await axios.get(
      `${BASE_URL}/cdn/${version}/data/en_US/champion.json`
    );
    return response.data.data; // Champion data is nested under `data`
  } catch (error) {
    console.error("Error fetching champions:", error);
    throw error;
  }
};
