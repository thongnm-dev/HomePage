# ui-web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Uninstall
"@types/jquery": "^3.5.4",
"jquery": "^3.5.1",



    config => {
        
        if (process.env.NODE_ENV === 'production') {
            return {
                
        }
        else {
            return {
                plugins: [
                    // new CompilerHelperPlugin(),
                    new CopyWebpackPlugin({
                        patterns: [
                            {
                                from: 'src/lib/core.js',
                                to: 'bundle'
                            }
                        ]
                    }),
                    new CopyWebpackPlugin({
                        patterns: [
                            {
                                from: 'node_modules/jquery/dist/jquery.min.js',
                                to: 'lib/jQuery'
                            }
                        ]
                    }),
                    new CopyWebpackPlugin({
                        patterns: [
                            {
                                from: 'src/lib/script.js',
                                to: 'bundle'
                            }
                        ]
                    })
                ]
            }
        }
    }
