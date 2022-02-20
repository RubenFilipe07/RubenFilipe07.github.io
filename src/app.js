import React, { Fragment } from 'react';
import axios from 'axios';
import CardRepo from './components/CardRepo/CardRepo';
import GridRepo from './components/GridRepo/GridRepo'
import Heading from './components/Heading/Heading'
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import PersonalLinks from './components/PersonalLinks/PersonalLinks';
import Footer from './components/Footer/Footer'

export default class App extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/rubenfilipe07/repos`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

  render() {
    return (
      <Fragment>
        <PersonalInfo />
        <PersonalLinks />
        <Heading title="Meus Repositórios" />
        <GridRepo>
          {this.state.data.map(data =>
            <CardRepo key={data.id} name={data.name} repoUrl={data.html_url} description={data.description} language={data.language} itsForked={data.fork}/>
          )}
        </GridRepo>
        <Footer />
      </Fragment>
    )
  }
}