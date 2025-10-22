const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Envía el nombre de usuario al main
  writeName: (username) => ipcRenderer.send('write-name', username)
});
