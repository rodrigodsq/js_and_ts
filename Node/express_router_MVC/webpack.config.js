//OBS: CommonJS é o modelo de modulos do nodejs.
//webpack.config.js: Arquivo com as configurações do webpack. 

const path = require('path');

module.exports = {
    mode: 'production',

    //caminho do nosso codigo principal;
    entry: './frontend/main.js',

    //caminho para onde vai o nosso codigo transpilado;
    output:{
        path: path.resolve(__dirname, 'public', 'assets', 'js' ),            //com isso facilitara o sistema encontrar o arquivo independente do s.o operacional.
        filename: 'bundle.js',                                               //nome do arquivo que vai esta contido no diretorio da chave path.
    },
    module: {
        rules:[{
            exclude: /node_modules/,                            //para o bundle não perde tempo verificando a pasta node_modules
            test: /\.js$/,                                      //arquivos suportados????
            use:{
                loader: 'babel-loader',                         //informando que é para usar o babel loader.
                options:{
                    presets: ['@babel/env']
                }
            }
        },{
            test: /\.css$/,                                     //arquivos suportado
            use: ['style-loader', 'css-loader']   
        }]
    },

//como o webpack transpila o nosso codigo, esse source-map faz o mapeamento, tipo se ocorrer erro no cod transpilado ele mapeia e mostra no nosso cod onde esta erro.
    devtool:'source-map'
};