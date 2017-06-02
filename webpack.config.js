const { resolve } = require("path");
const webpack = require("webpack");

module.exports =
    {
        context: resolve(__dirname, 'src'),
        
        entry:  [
                    'react-hot-loader/patch',
                        //  activate HMR for react
                        
                    'webpack-dev-server/client?http://localhost:8080',
                        //  bundle client for webpack dev sever
                        //  connect to provided endpoint
                        
                    'webpack/hot/only-dev-server',
                        //  bundle client for hot reloading
                        //  only- means to only hot reload for sucessful updates
                    
                    './index.js'
                        // entry point for app
                ],
                
        output: {
                    filename: 'bundle.js',
                    
                    path: resolve(__dirname, 'dist'),
                    
                    publicPath: '/'
                        //  necessary for HMR to know where to load hot update chunks
                },
        
        devtool: 'inline-source-map',
        
        devServer:  {
                        hot: true,
                            //  enable HMR on server
                        
                        contentBase: resolve(__dirname, 'dist'),
                            //  match output path
                        
                        publicPath: '/'
                            //  match the output `publicPath`
                    },
        
        module: {
                    rules:  [
                                {
                                    test: /\.jsx?$/,
                                    use: [ 'babel-loader' ],
                                    exclude: /node_modules/
                                },
                                
                                {
                                    test: /\.css$/,
                                    use: [ 'style-loader', 'css-loader?modules' ]
                                }
                            ]
                },
                
        plugins: [
                    new webpack.HotModuleReplacementPlugin(),
                        //  enable HMR globally
                    
                    new webpack.NamedModulesPlugin()
                        //  prints more readable module names in the browser console on HMR updates
                 ]
    };