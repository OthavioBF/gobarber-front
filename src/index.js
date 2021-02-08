// Este arquivo src/index.js é o principal da aplicação, é daqui que as conexões são entre as linguagens
// são feitas.

import React from 'react';

// Esse react-dom com a funcão render é responsavel por renderizar o react na arvore de documentos
// do HTML
import { render } from 'react-dom';

import App from './App';

// É uma boa pratica de programação manter o componente princial, e todos os componentes separados em
// arquivos diferentes, assim sendo chamados aqui dentro do index assim sendo renderizados ao nosso HTML
render(<App />, document.getElementById('app'));
