const path = require('path');

module.exports = {
  // Corresponde ao arquivo de entrada da aplicação
  entry: path.resolve(__dirname,'src', 'index.js'),
  // Local onde o bundle é gerado e armazenado, o bundle é o codigo transpilado pelo webpack,
  // o codigo que transpila as sintaxes do javaScript para o browser poder entender.
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // Instalar as biblioteca webpack-dev-server e escrever o codigo abaixo, depois criar o script
  // no package.json
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    // As regras de modulo servem para informar ao webpack quais engines cada arquivo deve utilizar,
    // no caso quais tipos de loaders cada linguagem deve usar para que o codigo seja transpilado e o
    // browser consiga entender.
    rules: [
      {
        // Na expressão test é preciso passar uma expressão regular que é composta por barras, a contra
        // barra serve para que o ponto seja um ponto e nao um caractér qualquer, e o $ significa que o
        // nome do arquivo deve terminar com .js para que essa regra seja executada.
        test: /\.js$/,
        // A funcinalidade deste exclude deve-se ao node modules não precisar ser transpilado duas vezes
        // quando importamos arquivo do node modules dentro de arquivos JS eles ja vem transpilados,
        // entao se nao houver esse exclude o babel fará dois trabalhos
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
        },
      },  {
        test: /\.css$/,
        use: [
          // O style-loader faz a transferencia de um arquivo.css
          // para a DOM
          { loader: 'style-loader' },
          // O css-loader permite que os arquivos CSS possam importar
          // outros arquivos, como imagens por exemplo.
          { loader: 'css-loader' },
        ]
      }, {
          // barra reta para simbolizar OU e interrogação para opcional,
          // pode ser JPG ou JPEG, o i é para insentive CASE, ou seja,
          // vai reconhecer arquivo salvos em maiusculo e minusculo
          test: /.*\.(gif|png|jpe?g)$/i,
          use: {
            loader: 'file-loader'
          }
        }
    ]
  }
}
