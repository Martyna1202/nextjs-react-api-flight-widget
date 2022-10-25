import axios from "axios";

export default function handler(req, res) {
  if (req.method === "GET") {
    // Process a GET request
    const options = {
      //  WITH LIVE API FROM TORONTO-AIRPORT
      method: "GET",
      url: "https://toronto-pearson-airport.p.rapidapi.com/departures",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "toronto-pearson-airport.p.rapidapi.com",
      },
    };

    //  GET DATA FROM EXTERNAL API
    axios
      .request(options)
      .then((response) => {
        // IF DATA RESOLVES SEND IT TO THE CLIENT
        res.status(200).json(response.data.slice(0, 8));

        console.log(
          "The following Data was fetched adn send:",
          response.data.slice(0, 8)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    // Handle any other HTTP method
    res.status(500).json({ msg: "nice try" });
  }
}
