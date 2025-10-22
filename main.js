// main.js
// Módulos necesarios de Electron
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let loginWindow;
let registerWindow;
//Esto creo la ventana de login
function createLoginWindow() {
  loginWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "login/preload.js"),
      /*nodeIntegration: false,   //buena práctica?
      contextIsolation: true*/
    },
  });
  //Cargar el archivo HTML del login
  loginWindow.loadFile("login/index.html");
}
//Esto creo la ventana de registro
function createRegisterWindow() {
  registerWindow = new BrowserWindow({
    width: 400,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "register/preload.js"),
    },
  });
  //Cargar el archivo HTML del registro
  registerWindow.loadFile("register/index.html");
}
//Cuando la app esté lista, crea la ventana de login
app.whenReady().then(() => {
  createLoginWindow();

  // Abrir ventana de registro
  ipcMain.on("open-register", () => {
    createRegisterWindow();
  });

  // Recibir nombre de usuario desde registro y enviarlo al login
  ipcMain.on("write-name", (event, username) => {
    if (loginWindow) {
      loginWindow.webContents.send("fill-login", username);
    }
  });
});
//Para recrear la ventana en macOS si se cierra y se hace click en el icono
app.on("activate", function () {
  if (BrowserWindow.getAllWindows().length === 0) createLoginWindow();
});
//Para cerrar la app completamente en windows y linux.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

