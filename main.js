const ccuElement = document.getElementById("ccu");
const refreshBtn = document.getElementById("refreshBtn");
const userId = "3575659020";

async function fetchCCU() {
  ccuElement.textContent = "Loading...";
  try {
    const response = await fetch(`https://games.roproxy.com/v2/users/${userId}/games?accessFilter=2&limit=50&sortOrder=Asc`);
    const data = await response.json();
    if (!data.data || data.data.length === 0) {
      ccuElement.textContent = "No games found";
      return;
    }
    
    const game = data.data[0];
    ccuElement.textContent = `${game.playing} / ${game.maxPlayers} players online`;
    
  } catch (err) {
    console.error(err);
    ccuElement.textContent = "Error fetching CCU";
  }
}

refreshBtn.addEventListener("click", fetchCCU);
fetchCCU();
