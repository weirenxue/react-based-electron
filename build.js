const path = require('path');
const builder = require('electron-builder');

builder.build({
    projectDir: path.resolve(__dirname),
    win: ['portable', 'nsis'],  // portable 為 Windows 的免安裝程式，nsis 為安裝程式
    config: {
        'appId': 'io.github.weirenxue.react-electron-demo', // 應用程式 ID
        'productName': 'React Based Electron',  // 應用程式名稱
        'copyright': 'Copyright © 2021 Wei-Ren Xue',    // 授權宣告
        'directories': {
            'output': 'electron-build/win'  // 打包後的應用程式放置在 electron-build/win
        },
        // 設定打包後的 icon
        'win': {
            'icon': path.resolve(__dirname, 'icon.png'), 
        },
        // 打包需要用到的原始碼、模組，皆需要寫到 files 內
        'files': [
            'build/**/*',
            'node_modules/**/*',
            'package.json',
            'main.js',
            'preload.js',
        ],
        'extends': null,
    }
}).then(
    (data) => console.log(data),
    (err) => console.error(err)
)