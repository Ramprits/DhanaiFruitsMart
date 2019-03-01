import React, { Component } from "react";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import Typed from "react-typed";
import Feker from "faker";

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 4
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
});

const fruits = ["Chikoo", "Mango", "Orange", "Apple", "Graps", "Banana"];
class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Get fresh <Typed strings={fruits} typeSpeed={100} loop />
              fruits
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {[...Array(4)].map((card, i) => (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Feker.image.image()} // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      style={{ textTransform: "capitalize" }}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {Feker.company.bsBuzz()}
                    </Typography>
                    <Typography style={{ textTransform: "capitalize" }}>
                      {Feker.commerce.department()} <br />
                      {Feker.address.country()}-{Feker.address.state()} <br />
                      {Feker.address.city()}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles)(Home);
