/** @babel */

export default {
  activate () {
    const {CompositeDisposable} = require('atom')
    this.subs = new CompositeDisposable()
    this.subs.add(
      atom.workspace.observeTextEditors((editor) => {
        const fp = editor.getPath()
        if (!fp) return
        const ext = fp.substr(fp.lastIndexOf('.'))
        if (atom.config.get('language-atom-notes.excludeExtensions').includes(ext)) return
        if (!isNote(fp)) return
        atom.grammars.assignLanguageMode(editor.getBuffer(), 'source.gfm.notes')
      }),
      atom.packages.onDidActivateInitialPackages(() => {
        ensureGrammarForPackages(atom.config.get('language-atom-notes.interopPackages'))
      })
    )
  },

  deactivate () {
    this.subs.dispose()
    this.subs = null
  }
}

/** Ensures that our grammar is loaded into the conifg for the given package names. */
function ensureGrammarForPackages (names) {
  for (const name of names) {
    if (atom.packages.isPackageActive(name)) {
      addOurGrammarToPackage(name)
    }
  }
}

/** Adds our grammar to the given package's grammars setting. */
function addOurGrammarToPackage (name) {
  console.log(`language-atom-notes: ensuring ${name} supports our grammar...`)
  let supportedGrammars = atom.config.get(`${name}.grammars`)
  if (!supportedGrammars.includes('source.gfm.notes')) {
    atom.config.set(`${name}.grammars`, supportedGrammars.concat(['source.gfm.notes']))
  }
}

/** Returns true iff the given file path is a note. */
function isNote (filePath) {
  const pack = atom.packages.getActivePackage('atom-notes')
  return pack ? pack.mainModule.isNote(filePath) : false
}
