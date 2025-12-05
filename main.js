const universeId = 4093526321;
const ccuElement = document.getElementById("ccu");
const refreshBtn = document.getElementById("refreshBtn");
const userId = "3575659020"; // Owner of the game

async function fetchCCU() {
  ccuElement.textContent = "Loading...";
  try {
    const response = await fetch(`https://games.roproxy.com/v2/users/${userId}/games?accessFilter=2&limit=50`);
    const data = await response.json();

    if (!data.data) {
      ccuElement.textContent = "No games found";
      return;
    }

    // Find the game by universeId
    const game = data.data.find(g => g.universeId === universeId);
    if (!game) {
      ccuElement.textContent = "Game not found";
      return;
    }

    ccuElement.textContent = `${game.playing} / ${game.maxPlayers} players online`;
  } catch (err) {
    console.error(err);
    ccuElement.textContent = "Error fetching CCU";
  }
}

refreshBtn.addEventListener("click", fetchCCU);
fetchCCU();
