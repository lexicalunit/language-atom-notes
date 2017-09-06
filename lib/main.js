/** @babel */

export default {
  activate () {
    const {CompositeDisposable} = require('atom')
    this.subs = new CompositeDisposable()
    this.subs.add(
      atom.workspace.observeTextEditors((editor) => {
        if (isNote(editor.getPath())) {
          editor.setGrammar(atom.grammars.grammarForScopeName('source.gfm.notes'))
        }
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
function ensureGrammarForPackages (...names) {
  for (const name of names) {
    if (atom.packages.isPackageActive(name)) {
      addOurGrammarToPackage(name)
    }
  }
}

/** Adds our grammar to the given package's grammars setting. */
function addOurGrammarToPackage (name) {
  let supportedGrammars = atom.config.get(`${name}.grammars`)
  if (!supportedGrammars.includes('source.gfm.notes')) {
    atom.config.set(`${name}.grammars`, supportedGrammars.concat(['source.gfm.notes']))
  }
}

/** Returns true iff the given file path is a note. */
function isNote (filePath) {
  if (!filePath) return false

  const {normalize, realpathSync} = require('fs-plus')
  const normalPath = normalize(filePath)

  const extensions = atom.config.get('atom-notes.extensions')
  if (!extensions) return false

  const {extname} = require('path')
  const ext = extname(filePath.toString())
  if (!extensions.includes(ext)) return false

  const atomNotesDirectory = atom.config.get('atom-notes.directory')
  if (!atomNotesDirectory) return false

  const normalAtomNotesDirectory = normalize(atomNotesDirectory)
  if (normalPath.startsWith(normalAtomNotesDirectory)) return true

  // support symlinks
  try {
    const realNotesDirectory = realpathSync(normalAtomNotesDirectory)
    if (normalPath.startsWith(realNotesDirectory)) return true

    const syncPath = realpathSync(normalPath)
    if (syncPath.startsWith(normalAtomNotesDirectory)) return true
    if (syncPath.startsWith(realNotesDirectory)) return true
  } catch (e) {
    if (e.code === 'ENOENT') return false
    throw e
  }

  return false
}
