try {
  eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile("jr.js", 1).ReadAll());
} catch(e) {
  WScript.Echo("JR error: " + e.description);
}
try {
  eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile("keio.js", 1).ReadAll());
} catch(e) {
  WScript.Echo("Keio error: " + e.description);
}
