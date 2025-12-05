const universeId = "4093526321";
const ccuElement = document.getElementById("ccu");
const refreshBtn = document.getElementById("refreshBtn");

async function fetchCCU() {
  ccuElement.textContent = "Loading...";
  try {
    const response = await fetch(`https://games.roblox.com/v1/games?universeIds=${universeId}`);
    const data = await response.json();
    const game = data.data[0];
    ccuElement.textContent = `${game.playing} / ${game.maxPlayers} players online`;
  } catch (err) {
    console.error(err);
    ccuElement.textContent = "Error fetching CCU";
  }
}

refreshBtn.addEventListener("click", fetchCCU);

// Fetch CCU on page load
fetchCCU();
