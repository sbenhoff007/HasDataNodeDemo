import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.hasdata.com/scrape/google-light/serp',
  params: {q: 'Coffee', location: 'Austin,Texas,United States', lr: []},
  headers: {
    'x-api-key': 'your-api-key-here',
    'Content-Type': 'application/json'
  }
};

try {
	const { data } = await axios.request(options);
	console.log(data);
} catch (error) {
	console.error(error);
}