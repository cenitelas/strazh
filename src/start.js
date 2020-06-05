const { app, BrowserWindow } = require('electron')
app.commandLine.appendSwitch('ignore-connections-limit', '85.29.136.125')
const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
    const {width, height} = require('electron').screen.getPrimaryDisplay().workAreaSize
    mainWindow = new BrowserWindow({
        width:width,
        height:height,
        'always-on-top': true,
        show: true,
        kiosk: true,
        movable:false,
        'min-width': null,
        'min-height': null,
        frame: false,
        minimizable:false,
        // alwaysOnTop:true,
        fullscreen:true,
        'zoom-factor': 1,
        thickFrame:false,
        fullscreenable:true,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true,
            java: false,
            webgl: true,
            plugins: true,
            webaudio: true,
            'web-security': false
        }
    })
    mainWindow.setFullScreen(true)
    mainWindow.webContents.openDevTools()
    mainWindow.loadURL(
        process.env.ELECTRON_START_URL ||
        url.format({
            pathname: path.join(__dirname, '/../public/index.html'),
            protocol: 'file:',
            slashes: true
        })
    )

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('ready-to-show', () => { mainWindow.setSimpleFullScreen(true); });

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})
