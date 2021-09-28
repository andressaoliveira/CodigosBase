//Crie um arquivo index.js no seu componente
import { connect } from 'react-redux';
import Nome from './Nome';

//O método mapStateToProps transforma um trecho do estado da Store
//em uma prop utilizável pelo componente, com o nome newValue.
const mapStateToProps = store => ({
  nome: store.clickState.newValue
});

//No momento de exportar o componente, precisamos fazer a sua conexão 
// através do método connect do React Redux
const NomeConnected = connect(mapStateToProps)(Nome);

export { NomeConnected as Nome }
