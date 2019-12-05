import React, { useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { CardGrid } from '.'

export const Home = ({ planet, fetchPlanets }) => {
  useEffect(() => {
    fetchPlanets()
  }, [])
  const renderLoading = () => <CircularProgress />

  const renderError = () => (<Typography variant="h1" component="h2" gutterBottom>
    Ooops, algo deu errado.
  </Typography>)

  const { status, planets } = planet
  if (status === 'loading') return renderLoading()
  if (status === 'error') return renderError()
  return <CardGrid planets={planets}/>
}

Home.propTypes = {
  status: PropTypes.string,
  fetchPlanets: PropTypes.func,
  planets: PropTypes.arrayOf(Object)
}
