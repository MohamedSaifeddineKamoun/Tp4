import "./Hero.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Hero = ({ items }) => {
  return (
    <div className="flex gap-3">
      {items.map((item) => {
        return (
          <div className="item-card-container">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 300 }}
                image={item.description}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
