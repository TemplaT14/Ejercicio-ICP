const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
const win = new BrowserWindow({ 
    width: 800, 
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'login/preload.js'), // ✅ Ruta absoluta
      contextIsolation: true, // ✅ Muy importante para que funcione contextBridge
      nodeIntegration: false
    }

});
win.loadFile('login/index.html');
};
app.whenReady().then(() => {
createWindow();
});
app.on('activate', () => {
if (BrowserWindow.getAllWindows().length === 0) createWindow();
});


// 👉 Función que crea la ventana de registro
function createRegisterWindow() {
  const registerWindow = new BrowserWindow({
    width: 400,
    height: 500,
    title: 'Registro',
    webPreferences: {
      preload: path.join(__dirname, 'login/preload.js')
    }
  })

  registerWindow.loadFile('register/index.html')
}

app.whenReady().then(() => {
  // 👉 Escucha el evento del renderer para abrir la ventana
  ipcMain.on('open-register', () => {
    createRegisterWindow()
  })

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createRegisterWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})