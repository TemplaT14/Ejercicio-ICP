const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let loginWindow;
let registerWindow;

function createLoginWindow() {
  loginWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'login/preload.js')
    }
  });

  loginWindow.loadFile('login/index.html');
}

function createRegisterWindow() {
  registerWindow = new BrowserWindow({
    width: 400,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'register/preload.js')
    }
  });

  registerWindow.loadFile('register/index.html');
}

app.whenReady().then(() => {
  createLoginWindow();

  // Abrir ventana de registro
  ipcMain.on('open-register', () => {
    createRegisterWindow();
  });

  // Recibir nombre de usuario desde registro y enviarlo al login
  ipcMain.on('write-name', (event, username) => {
    if (loginWindow) {
      loginWindow.webContents.send('fill-login', username);
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
