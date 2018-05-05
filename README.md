# Language Atom Notes

[![apm package][apm-ver-link]][releases]
[![david][david-badge]][david]
[![download][dl-badge]][apm-pkg-link]
[![mit][mit-badge]][mit]
[![code-style][code-style-badge]][code-style]
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)

This package provides a grammar for [Atom Notes][atom-notes] which includes
syntax highlighting for interlinks.

![screen-shot][screen-shot]

## ⚙️ Configuration

The settings for this package includes a list of packages that can interoperate
with [`atom-notes`][atom-notes]. For example
[`markdown-preview`][markdown-preview] and [`spell-check`][spell-check].

What makes these packages special is that they provide neat additional features
for your notes files, **and they have a `grammars` configuration setting**.

The `language-atom-notes` package ensures the addition of `source.gfm.notes` to
each package you list. We (should 🤞) support any package that contains a
`grammars` setting. If you find that isn't the case, please [report it][issues].

## 💖 Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/1903876?v=4" width="100px;"/><br /><sub><b>Amy Troschinetz</b></sub>](http://lexicalunit.com)<br />[💻](https://github.com/lexicalunit/language-atom-notes/commits?author=lexicalunit "Code") | [<img src="https://avatars1.githubusercontent.com/u/948301?v=4" width="100px;"/><br /><sub><b>Seongjae Lee</b></sub>](http://bluebrown.net)<br />[💻](https://github.com/lexicalunit/language-atom-notes/commits?author=seongjaelee "Code") | [<img src="https://avatars0.githubusercontent.com/u/9479788?v=4" width="100px;"/><br /><sub><b>lakonis</b></sub>](https://github.com/lakonis)<br />[🐛](https://github.com/lexicalunit/language-atom-notes/issues?q=author%3Alakonis "Bug reports") | [<img src="https://avatars1.githubusercontent.com/u/165914?v=4" width="100px;"/><br /><sub><b>John Kamenik</b></sub>](http://jkamenik.github.io)<br />[🐛](https://github.com/lexicalunit/language-atom-notes/issues?q=author%3Ajkamenik "Bug reports") | [<img src="https://avatars0.githubusercontent.com/u/2340371?v=4" width="100px;"/><br /><sub><b>Aaron S. Wolf</b></sub>](http://aswolf.github.io)<br />[🐛](https://github.com/lexicalunit/language-atom-notes/issues?q=author%3Aaswolf "Bug reports") |
| :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

---

[MIT][mit] © [lexicalunit][lexicalunit], [seongjaelee][seongjaelee] et [al][contributors]

[lexicalunit]:      http://github.com/lexicalunit
[seongjaelee]:      http://github.com/seongjaelee

[apm-pkg-link]:     https://atom.io/packages/language-atom-notes
[apm-ver-link]:     https://img.shields.io/apm/v/language-atom-notes.svg
[code-style-badge]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[code-style]:       https://standardjs.com/
[contributors]:     https://github.com/lexicalunit/language-atom-notes/graphs/contributors
[david-badge]:      https://david-dm.org/lexicalunit/language-atom-notes.svg
[david]:            https://david-dm.org/lexicalunit/language-atom-notes
[dl-badge]:         http://img.shields.io/apm/dm/language-atom-notes.svg
[issues]:           https://github.com/lexicalunit/language-atom-notes/issues
[mit-badge]:        https://img.shields.io/apm/l/language-atom-notes.svg
[mit]:              http://opensource.org/licenses/MIT
[releases]:         https://github.com/lexicalunit/language-atom-notes/releases

[atom-notes]:       https://github.com/lexicalunit/atom-notes
[markdown-preview]: https://github.com/atom/markdown-preview
[screen-shot]:      https://user-images.githubusercontent.com/1903876/30125679-d283494a-92fe-11e7-868b-e788f4fc0e66.png
[spell-check]:      https://github.com/atom/spell-check
