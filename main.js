const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
const ventana = new BrowserWindow({ 
    width: 800, 
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'login/preload.js'), // ✅ Ruta absoluta
    }
});
ventana.loadFile('login/index.html');
};
app.whenReady().then(() => {
createWindow();
});

// 👉 Función que crea la ventana de registro
function createRegisterWindow() {
  const registerWindow = new BrowserWindow({
    width: 400,
    height: 700,
    title: 'Registro',
    webPreferences: {
      preload: path.join(__dirname, 'login/preload.js')
    }
  })
  registerWindow.loadFile('register/index.html')
}
 //abrir ventana de registro
app.whenReady().then(() => {
  createWindow();

  ipcMain.on('open-register', () => {
    createRegisterWindow();
  });
  // 👉 Recibe el nombre desde la ventana de registro
  ipcMain.on('write-name', (event, name) => {
    if (ventana) {
      // Enviar el nombre a la ventana de login
      ventana.webContents.send('fill-login', name);
    }
  });
});  

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createRegisterWindow()
  })

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})