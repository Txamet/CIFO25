     Configuración básica de Vs Code

# Visual Studio Code

Última actualización: _Dec 1 2024_

---

Configuración inicial y extensiones básicas para desarrollo\*web**\*_frontend_** en [_Visual Studio Code_](https://code.visualstudio.com/).

## Configuración inicial

    {
      "window.zoomLevel": 1,
      "editor.wordWrap": "on",
      "files.autoSave": "onFocusChange",
      "window.restoreWindows": "none",
      "security.workspace.trust.untrustedFiles": "open",
      "editor.detectIndentation": false,
      "editor.tabSize": 2,
      "editor.bracketPairColorization.enabled": true,
      "editor.guides.bracketPairs": true,
      "editor.renderWhitespace": "all",
      "terminal.integrated.defaultProfile.windows": "Git Bash",
      "liveServer.settings.donotVerifyTags": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnPaste": true,
      "editor.formatOnSave": true,
      "editor.formatOnType": true,
      "liveServer.settings.CustomBrowser": "firefox",
      "liveServer.settings.host": "localhost",
      "emmet.syntaxProfiles": {
        "javascript": "html"
      },
      "emmet.includeLanguages": {
        "javascript":"html",
        "php": "html",
        "markdown": "html"
      },
      "emmet.showSuggestionsAsSnippets": true,
      "emmet.variables": {
        "lang":"es",
        "charset":  "UTF-8"
      },
      "workbench.iconTheme":"material-icon-theme"
     }

Copiando la configuración en el archivo **_settings.json_** de tu _VSCode:_

1.  Ir al Menú _File_ (Archivo),
2.  entrar en _Preferences_ (Preferencias),
3.  Seleccionar _Settings_ (Configuraciones),
4.  Clic en el botón _Open Settings (JSON)_ que está en la esquina superior derecha,
5.  Copía la configuración que te sirva.

## Extensiones

La siguientes extensiones son importantes para _Visual Studio Code_:

1.  [_Spanish Language Pack for Visual Studio Code_](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-es): para usar la interfaz de _VS Code_ en español.
2.  [_Live Server_](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): levanta un servidor local de desarrollo con función de recarga en vivo para páginas estáticas y dinámicas desde*Visual Studio Code*.
3.  [_Prettier - Code formatter_](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): formatea mi código _frontend_ (_HTML_, _CSS_ y _JavaScript_).
4.  [_ESLint_](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): para integrar [_ESLint_](https://eslint.org/) a _Visual Studio Code_.
5.  [_Htmltagwrap_](https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap): para incluir trozos de código en etiquetas con _Visual Studio Code_.
6.  [_Material Icon Theme_](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme): para utilizar iconos Materialize en _Visual Studio Code_.
7.  [_Auto Rename Tag_](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): para renombrar pares de etiquetas en _Visual Studio Code_.

## Atajos de teclado

- [_Keyboard shortcuts for Linux_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf).
- [_Keyboard shortcuts for macOS_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf).
- [_Keyboard shortcuts for Windows_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf).

---
