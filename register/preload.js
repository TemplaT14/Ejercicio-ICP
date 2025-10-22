
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Envía el nombre al main
  writeName: (name) => ipcRenderer.send('write-name', name),

});
