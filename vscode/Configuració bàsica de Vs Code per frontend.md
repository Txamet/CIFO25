    Configuració bàsica de Vs Code

# Visual Studio Code

Última actualització: _Dec 1 2024_

---

Configuració inicial i extensions bàsiques per desenvolupament _web_ **_frontend_** amb [_Visual Studio Code_](https://code.visualstudio.com/).

## Configuració inicial

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
      "emmet.includeLanguages": {
        "javascript": "html"
      },
      "liveServer.settings.donotVerifyTags": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnPaste": true,
      "editor.formatOnSave": true,
      "editor.formatOnType": true
      "liveServer.settings.CustomBrowser":  "firefox",
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
     },

Copiant la configuració a l'arxiu **_settings.json_** de _VSCode:_

1.  Anar al Menú _File_ (Arxiu),
2.  entrar en _Preferences_ (Preferències),
3.  Seleccionar _Settings_ (Configuracions),
4.  Clic en el botó _Open Settings (JSON)_ que és a la cantonada superior dreta,
5.  Còpia la configuració que et serveixi.

## Extensions

La següents extensions són importants per a _Visual Studio Code_:

1.  [_Spanish Language Pack for Visual Studio Code_](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-es): per a usar la interfície de _VS Code_ en espanyol.
2.  [_Live Server_](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): aixeca un servidor local de desenvolupament amb funció de recàrrega en viu per a pàgines estàtiques i dinàmiques des de*Visual Studio Code*.
3.  [_Prettier - Code formatter_](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): formata el meu codi _frontend_ (_HTML_, _CSS_ i _JavaScript_).
4.  [_ESLint_](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): per a integrar [_ESLint_](https://eslint.org/) a _Visual Studio Code_.
5.  [_Htmltagwrap_](https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap): per a incloure trossos de codi en etiquetes ambn _Visual Studio Code_.
6.  [_Material Icon Theme_](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme): per a utilitzar icones Materialize en _Visual Studio Code_.
7.  [_Auto Rename Tag_](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): per a canviar de nom parells d'etiquetes en _Visual Studio Code_.

## Dreceres de teclat

- [_Keyboard shortcuts for Linux_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf).
- [_Keyboard shortcuts for macOS_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf).
- [_Keyboard shortcuts for Windows_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf).

---
