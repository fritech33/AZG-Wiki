// Blockiert die Tastatur-Shortcuts für die Suche (CMD+K, STRG+K und /)
window.addEventListener('keydown', function(event) {
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const modifier = isMac ? event.metaKey : event.ctrlKey;

  // 1. Blockiert CMD+K (Mac) bzw. STRG+K (Windows/Linux)
  if (modifier && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  // 2. Blockiert die "/" Taste (häufiger Standard-Shortcut für Dokumentations-Suchen)
  // Verhindert das Auslösen, außer der Nutzer tippt gerade in einem Textfeld/Input
  if (event.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
}, true); // "true" sorgt dafür, dass das Event in der Capturing-Phase abgefangen wird, bevor Mintlify es registriert.
