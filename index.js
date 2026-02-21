// Simple HasData Google SERP Light demo
// Requires Node 18+ (for built-in fetch)
// Get the API key from the environment variable

const API_KEY = process.env.HASDATA_API_KEY;

if (!API_KEY) {
  console.error("Missing HASDATA_API_KEY environment variable");
  process.exit(1);
}

// Read search term from command line
// Example: node index.js "coffee beans"
const query = process.argv[2];

if (!query) {
  console.log('Usage: node index.js "search term"');
  process.exit(1);
}

const BASE_URL = "https://api.hasdata.com/scrape/google-light/serp";

async function run() {
  const params = new URLSearchParams({
    q: query
  });

  const response = await fetch(`${BASE_URL}?${params.toString()}`, {
    headers: {
      "x-api-key": API_KEY
    }
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Request failed:", errorText);
    process.exit(1);
  }

  const data = await response.json();

  // Print full JSON nicely formatted
  console.log(JSON.stringify(data, null, 2));
}

run();