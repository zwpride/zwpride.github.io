# Wei Zhang · Academic Homepage

Live site: https://zwpride.github.io/

A lightweight, static academic homepage. No build step or external runtime dependencies are required.

## Maintenance

- `index.html`: education, research experience, academic service, and contact links.
- `papers.js`: publications and public paper/code/model/dataset links.
- `glass.css`: visual design and responsive layout.
- `interface.js`: navigation and interaction behavior.
- `favicon.svg`: site icon.

Publications are sorted by `acceptedDate`, falling back to the first `arxivDate`. Venue notification dates serve as references where individual decision timestamps are unavailable; revised arXiv dates do not change the ordering.

GitHub Pages publishes the repository root from the `master` branch. Commit changes to update the live site.

To preview locally, run `python3 -m http.server 4177` in this directory, then open http://localhost:4177/.
