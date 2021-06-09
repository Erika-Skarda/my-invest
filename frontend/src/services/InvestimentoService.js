import axios from 'axios';
import { API_URL } from '../utils/constants';

class InvestimentoService {

  retrieveAllInvestimentos() {
    return axios.get(`${API_URL}/investimentos`);
  }

  saveInvestimento(investimento) {
    return axios.post(`${API_URL}/investimentos`, investimento);
  }

  deleteInvestimento(codigo) {
    axios.delete(`${API_URL}/investimentos/${codigo}`)
  }
}

export default new InvestimentoService();