# HasData Node Demo

A simple Node project to get SERP results using the HasData API.

## Setting Up The Project

- Install [node](https://nodejs.org/en/download)

- Get a HasData API key from [hasdata.com](https://hasdata.com)

## Running the test.js Project

- In test.js, replace the placeholder API key with your key

- Install axios

```npm install axios```

- Run test.js

```node test.js```

You should see the search results printed in the terminal in JSON format.

## Running The index.js Project

- Set your HASDATA_API_KEY environment variable

Mac/Linux

```export HASDATA_API_KEY=your_real_key_here```

Windows Powershell

```$env:HASDATA_API_KEY="your_real_key_here"```

Windows CMD

```set HASDATA_API_KEY=your_real_key_here```

- In a terminal, run the following command:

```node index.js "coffee beans"```

OR

```node index.js "coffee beans" "Austin,Texas,United States"```

You should see the search results printed in the terminal in JSON format.
