import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListarInvestimentos from '../pages/ListarInvestimentos';
import CadastrarInvestimento from '../pages/CadastrarInvestimento';

export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ListarInvestimentos} />
      <Route exact path='/cadastrar' component={CadastrarInvestimento} />
      <Route exact path='/listar' component={ListarInvestimentos} />
    </Switch>
    </BrowserRouter>
  )
}