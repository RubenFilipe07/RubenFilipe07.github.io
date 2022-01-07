import React, { Fragment } from 'react';
import axios from 'axios';
import CardRepo from './components/CardRepo/CardRepo';
import GridRepo from './components/GridRepo/GridRepo'
import Information from './components/Information/Information'
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
        <Information information="Meus Repositórios" />

        <GridRepo>
          {this.state.data.map(data =>
            <CardRepo key={data.id}>
              <h4><a href={data.html_url}>{data.name}</a></h4>
              <p>{data.description}</p>
              <div className='aditional-info'>
                <span className='lang-info' id={data.language}>{data.language}</span>
                <span className='fork-info'>{data.fork ? 'Forked' : ''}</span>
              </div>
            </CardRepo>
          )}
        </GridRepo>

        <Footer></Footer>
      </Fragment>
    )
  }
}