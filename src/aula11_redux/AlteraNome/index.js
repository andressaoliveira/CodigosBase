//Crie um arquivo index.js no seu componente
import { connect } from 'react-redux';
import { clickButton } from '../../infra/actions';
import AlteraNome from './AlteraNome';


//O método mapDispatchToProps transforma a Action Creator clickButton 
//em uma prop para o componente.
const mapDispatchToProps = dispatch => ({
  clickButton: (value) => dispatch(clickButton(value))
});

//No momento de exportar o componente, precisamos fazer a sua conexão 
// através do método connect do React Redux
const AlteraNomeConnected = connect(null, mapDispatchToProps)(AlteraNome);

export { AlteraNomeConnected as AlteraNome }
