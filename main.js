const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 1000,
        minHeight: 700,
        frame: false, // Frameless window
        transparent: true, // Enable transparency
        // backgroundColor: '#0c0a09', // Removed for transparency
        icon: path.join(__dirname, 'icon.png'),
        webPreferences: {
            nodeIntegration: true, // Allow require in renderer
            contextIsolation: false, // Allow direct access to node APIs
            webSecurity: true
        }
    });

    win.loadFile('index.html');

    // Descomentar para abrir DevTools automáticamente
    //win.webContents.openDevTools();

    // IPC handlers for window controls
    ipcMain.on('minimize-window', () => {
        win.minimize();
    });

    ipcMain.on('maximize-window', () => {
        if (win.isMaximized()) {
            win.unmaximize();
        } else {
            win.maximize();
        }
    });

    ipcMain.on('close-window', () => {
        win.close();
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});