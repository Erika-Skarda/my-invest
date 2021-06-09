import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { 
  Table, 
  Button,
  message, 
  Layout, 
  Menu,
  Breadcrumb,
} from 'antd';
import InvestimentoService from '../../services/InvestimentoService';

const { Header, Content, Footer } = Layout;
const { Column } = Table;

export default function ListarInvestimentos() {
  const [investimento, setInvestimento] = useState([]);
  
  async function refreshInvestimentos() {
    InvestimentoService.retrieveAllInvestimentos()
      .then(
        response => {
          setInvestimento(response.data)
        }
      )
  }

  useEffect(() => {
    refreshInvestimentos();
    return() => {}
  }, [])

  function remove(record) { 
    InvestimentoService.deleteInvestimento(record.codigo);
    message.success('Investimento removido com sucesso 🎊');
  }

  return (
      <div className="container"> 
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">
                <Link to="/cadastrar">
                  Cadastrar Investimento
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/cadastrar">
                  Listar Investimento
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              <h2>Investimentos</h2>
              <Table dataSource={investimento}>
                <Column
                  title="Código do ativo"
                  dataIndex="codigoAtivo"
                  key="codigoAtivo">
                </Column>
                <Column
                  title="Valor" 
                  dataIndex="valorCota" 
                  key="valorCota">
                </Column>
                <Column
                  title="Quantidade de Cotas"
                  dataIndex="quantidadeCotas"
                  key="quantidadeCota">
                </Column>
                <Column
                  title="Data da Compra"
                  dataIndex="dataCompra"
                  key="dataCompra">
                </Column>
                <Column
                  title="Remover"
                  key="atualizar"
                  render={(text, record) => (
                    <Button onClick={() => remove(record)} type="primary">
                      Remover
                    </Button>
                  )}>
                </Column>
              </Table>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>My Invest ©2021 Created by Erika Skarda 💰</Footer>
      </Layout>
    </div>
  )
}
