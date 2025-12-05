const universeId = "4093526321";

async function fetchCCU() {
  try {
    const res = await fetch(`https://games.roproxy.com/v1/games?universeIds=${universeId}`);
    const data = await res.json();
    console.log(data); 
  } catch (err) {
    console.error(err);
  }
}

fetchCCU();
