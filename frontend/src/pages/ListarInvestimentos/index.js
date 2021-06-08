import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { 
  Table, 
  Button,
  message, 
  Layout, 
  Menu,
  Breadcrumb,
} from 'antd';

const { Header, Content, Footer } = Layout;
const { Column } = Table;

export default function ListarInvestimentos() {
  const [investimento, setInvestimento] = useState([]);

  function remove(record) { 
    message.success('Investimento removido com sucesso 🎊');
  }

  return (
      <div className="container"> 
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">
                <Link to="/cadastrar-investimento">
                  Cadastrar Investimento
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/cadastrar-investimento">
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
                  dataIndex="quantidadeCota"
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
