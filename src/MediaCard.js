import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardImage from './eg_image_1.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 230,
    margin: 1,
  },
  media: {
    height: "100",
  },
});

function MediaCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          component="img"
          className={classes.media}
          image={cardImage} 
          title="article image"
          height="90"
        />
        <CardContent >
          <Typography gutterBottom variant="h7" component="h4">
            Trump COVID19
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p">
          Donald Trump tests positive for coronavirus.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;