import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Icon } from 'antd';
import { FavList } from '../';
import { styles } from './Navigation.scss';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Icon type="home" theme="filled" />
              <Link to="/">Główna</Link>
            </li>
            <li><Icon type="heart" theme="filled" />
              <Link to="/favourite">Ulubione</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" />
          <Route path="/favourite">
            <FavList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Favourite() {
  return <h2>Ulubione</h2>;
}
