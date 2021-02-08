import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  // Dentro do state é onde ficam todas as informaçoes que serao manipuladas pelo componete, ele é imutavel.
  // Para que possamos criar ou alterar um estado precisamos da função setState. A setState serve para criar
  // um novo estado, ela pega as informaçoes que ja tem e cria um novo estado com as configuraçoes que passamos
  // dentro dela
  state = {
    newTech: '',
    techs: []
  };

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) })
    }
  }

  // Executado sempre que houver alterações nas props de estado, esta function recebe como paramatros(prevProps,
  // prevState), quando nao usamos alguns destes parametros podemos colocar o underLine no lugar
  componentDidUpdate(_, prevState) {
    if(prevState.tech !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount() {

  }
  // O motivo pelo qual usamos uma arrow function neste caso é porque dentro de uma classe em um componente
  // a arrow function possibilita que possamos usar o THIS para referenciar a ela em outros campos.
  handleInputChange = e => {
    this.setState({ newTech: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      // Se deseja atualizar o array de techs voce precisa recriar o array do zero, utilizamos o spread(...)
      // para pegar todos os valores que ja estão presentes no array de techs, e como ultimo paramentro voce
      // passa o newTech informando o novo item na lista de techs
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }
  // Toda classe no react precisa ter o metodo render, pois é ele que retorna o nosso HTML
  render() {
    return (
      // O react nao permite duas tags HTML seguidas sem que elas estejam dentro de uma TAG/CONTAINER
      // que as envolva.
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => ( // Quando mapeamos um componente, o mesmo tem de ter a chave,
          // a declaração da variavel(tech), e a propriedade onDelete. Como no componente techItem nao temos as
          // funçoes e os estados, como este componente nao abriga essas informaçoes temos que passar elas como
          // propriedades do nosso componente(techItem)
          <TechItem
            key={tech}
            tech={tech}
            onDelete={() => this.handleDelete(tech)}/>
          ))}
        </ul>
        <input
          type="texte"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
