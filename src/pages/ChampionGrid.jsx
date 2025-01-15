import React, { useState, useEffect } from "react";
import { getChampions } from "../components/getChampions";
import "../App.css"; // Import the CSS file for styling
import riotLogo from "../../public/img/riot.png"; // Import the Riot Games logo

const selectedChampionIds = [
  "Ahri",
  "Darius",
  "Jinx",
  "Thresh",
  "LeeSin",
  "Lux",
  "Garen",
  "Kaisa",
  "Zed",
  "Leona",
  "Ezreal",
  "Fiora",
  "Morgana",
  "Warwick",
  "Ashe",
  "Riven",
  "Katarina",
  "Blitzcrank",
  "MissFortune",
  "Sona",
  "Yasuo",
  "Teemo",
  "Vayne",
  "Amumu",
  "Sett",
];

function ChampionGrid() {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [flipped, setFlipped] = useState({});

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const data = await getChampions();
        const championsArray = Object.values(data);

        const championMap = Object.fromEntries(
          championsArray.map((champion) => [champion.id, champion])
        );

        const orderedChampions = selectedChampionIds
          .map((id) => championMap[id])
          .filter((champion) => champion);

        setChampions(orderedChampions);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch champions:", error);
        setLoading(false);
      }
    };
    fetchChampions();
  }, []);

  const handleCardClick = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="grid-container">
      {champions.map((champion) => (
        <div
          key={champion.id}
          className={`card ${flipped[champion.id] ? "flipped" : ""}`}
          onClick={() => handleCardClick(champion.id)}
        >
          <div className="card-inner">
            <div className="card-front">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/${champion.id}.png`}
                alt={champion.name}
                className="champion-image"
              />
              <h2 className="champion-name">{champion.name}</h2>
            </div>
            <div className="card-back">
              <div className="back-content">
                <img src={riotLogo} alt="Riot Games" className="riot-logo" />
                <p className="riot-text">Riot Games</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChampionGrid;
