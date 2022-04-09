import Home from '../containers/home';
import { RouteProps } from 'react-router-dom';
import Combustivel from "../containers/combustivel";
import StarWars from '../containers/star-wars';

const publicUrl = process.env.PUBLIC_URL;

interface EndPointsProps extends RouteProps {
  name?: string
}

export const endpoints: EndPointsProps[] = [
  { path: `${publicUrl}/`, component: Home, exact: true },
  { path: `${publicUrl}/home`, name: 'Home', component: Home, exact: true },
  { path: `${publicUrl}/combustivel`, name: 'Combustível', component: Combustivel, exact: true },
  { path: `${publicUrl}/homeAndre`, name: 'HomeAndre', component: Home, exact: true },
  { path: `${publicUrl}/star-wars`, name: 'StarWars', component: StarWars, exact: true },
];