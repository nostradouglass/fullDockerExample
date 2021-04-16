const path = require('path');

module.exports = {
    entry: [
        '/src/app/index.tsx',
    ],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                // exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },

    output: {
        filename: 'app.js',
        chunkFilename: "chunk-[name].[contenthash].js",
        path: path.resolve('./', 'dist/scripts'),
        publicPath: "/scripts/",
    },
//  optimization: {
//     splitChunks: {
//         chunks: 'all',
//         minSize: 30000,
//         maxSize: 200000,
//         minChunks: 1,
//         maxAsyncRequests: 7,
//         maxInitialRequests: 5,
//         automaticNameDelimiter: '~',
//         name: true,
//         cacheGroups: {
//           vendors: {
//             chunks: 'all',
//             test: /[\\/]node_modules[\\/]/,
//             priority: -10,
//             name: 'vendor',
//             enforce: true
//           },
//           default: {
//             minChunks: 2,
//             priority: -20,
//             reuseExistingChunk: true
//           }
//         }
//       }
//     }
};