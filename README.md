# HasData Node Demo

A simple Node project to get SERP results using the HasData API.

## Setting Up The Project

- Install [node](https://nodejs.org/en/download)

- Get a HasData API key from [hasdata.com](https://hasdata.com)

- Set your HASDATA_API_KEY environment variable

Mac/Linux

```export HASDATA_API_KEY=your_real_key_here```

Windows Powershell

```$env:HASDATA_API_KEY="your_real_key_here"```

Windows CMD

```set HASDATA_API_KEY=your_real_key_here```

## Running The Project

- In a terminal, run the following command:

```node index.js "coffee beans"```

You should see the search results printed in the terminal in JSON format.
