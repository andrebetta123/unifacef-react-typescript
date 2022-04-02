/// Quando usar o react teve usar o TSX na extenção do arquivo
import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Route,
  withRouter,
  Switch,
} from 'react-router-dom';
import MainMenu from '../components/main-menu';
import { Divider } from 'semantic-ui-react';
import { endpoints } from './endpoints';

// @ts-ignore
@withRouter
@observer
export default class Routes extends React.Component {

  render() {
    return (
    // escrever <> </> pra não quebrar quando juntar com o CSS e não precisar por dentro de <div>
    <> 
        <MainMenu />
        <Divider hidden={true} />
        <Switch>
          {endpoints.map((route, i) => (
            <Route key={i} {...route} />)
          )}
        </Switch>
      </>
    );
  }
}