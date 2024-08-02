const path = require('path');

module.exports = {
    entry: './src/index.js', // Punto de entrada de la aplicación 
    output: {
        filename: 'bundle.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Regex para identificar archivos css
                use: ['style-loader', 'css-loader'], // Loaders para procesar archivos css
            }, 
            {
                test: /\.js$/, // Regex para identificar archivos JS
                exclude: /node_modules/, // excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', // Loader para llevar JS moderno a JS antiguo para que sea compatible con todos los navegadores
                    options: {
                        presets: [ '@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', // Generar source maps para facilitar la depuración 
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //Carpeta desde el cual el servidor hagarra los archivos
        compress: true, //Habilitar la comprensión gzip
        port: 9000, //Puerto del servidor de desarrollo 
    },
};