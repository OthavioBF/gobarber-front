module.exports ={
  presets: [
    // Responsavel por alterar as funcionalidades que o navagador nao entende do javaScript
    "@babel/preset-env",
    // Responsavel por alterar as funcionalidades que o navagador nao entende do React
    "@babel/preset-react"
  ],
  plugins: [
    // Este plugin serve para o que a classe do componente entenda o metodo state
    "@babel/plugin-proposal-class-properties"
  ]
};
