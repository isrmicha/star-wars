import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

export const CardGrid = ({ planets }) =>
  <Grid container spacing={3}>
    {planets.map(({ name }) =>
      <Grid item xs={4} key={name} >
        <Card >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>)}
  </Grid>
