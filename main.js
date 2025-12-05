const universeId = "4093526321";
const ccuElement = document.getElementById("ccu");
const refreshBtn = document.getElementById("refreshBtn");

async function fetchCCU() {
ccuElement.textContent = "Loading...";
try {
const res = await fetch(`https://games.roproxy.com/v1/games?universeIds=${universeId}`);
const data = await res.json();

if (!data.data || data.data.length === 0) {
  ccuElement.textContent = "Game not found";
  return;
}

const game = data.data[0];
ccuElement.textContent = `Playing: ${game.playing} / ${game.maxPlayers}`;

} catch (err) {
console.error(err);
ccuElement.textContent = "Error fetching CCU";
}
}

refreshBtn.addEventListener("click", fetchCCU);

fetchCCU();

