import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  action: {
    //color: primary.main
    display: "block"
  },
  remind: {
    display: "block",
    textAlign: 'center'
  }
});

export default function FlashCard(props) {
    const {word}=props
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {word.field_1}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {word.field_2}
          </Typography>
        </CardContent>
        <CardActions className={classes.action}>
          <Button size="small">Show</Button>
        </CardActions>

        <CardActions className={classes.action}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            3 days
          </Button>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            7 days
          </Button>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            14 days
          </Button>
        </CardActions>
      </Card>
    );
}
