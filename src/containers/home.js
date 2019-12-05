import { connect } from 'react-redux'
import { Home as HomeComponent } from '../components'
import { fetchPlanets } from '../actions'

const mapStateToProps = ({ planet }) => ({
  planet
})

export const Home = connect(mapStateToProps, { fetchPlanets }
)(HomeComponent)
