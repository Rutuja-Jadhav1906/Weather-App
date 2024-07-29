import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  const IN_URL =
    "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlcnJ5JTIwYmxvc3NvbXxlbnwwfHwwfHx8MA%3D%3D";

  const HOT_URL =
    "https://media.istockphoto.com/id/158636263/photo/winding-farm-road-through-foggy-landscape.webp?b=1&s=170667a&w=0&k=20&c=gOlcPzBUljpQghBE0m90SYNE1IgldS7qbqTnD_9uBkM=";

  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fHww";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW58ZW58MHx8MHx8fDA%3D";
  return (
    <div className="infobox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 500 }} className="cards">
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent className="cardContent">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="heading"
            >
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>
                <b>Temperature:</b>
                {info.temp}&deg;C
              </p>
              <p>
                <b>Humidity:</b>
                {info.humidity}
              </p>
              <p>
                <b>Min Temperature:</b>
                {info.tempMin}&deg;C
              </p>
              <p>
                <b>Max Temperature:</b>
                {info.tempMax}&deg;C
              </p>
              <p>
                <b>Feels Like:</b>
                {info.feelsLike}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
