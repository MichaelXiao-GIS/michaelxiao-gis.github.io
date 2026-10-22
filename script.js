document.documentElement.classList.add('js');
document.querySelector('#year').textContent = new Date().getFullYear();

const citation = `@inproceedings{xiao2026reprinting,
  author    = {Xiao, Michael (Xiancheng) and Gibin, Maurizio and Van Dijk, Justin and Longley, Paul A.},
  title     = {Reprinting and Linking the Past: Creating a Nationwide Georeferenced Directory of Fixed-Line Telephone Subscribers, 1881--1984},
  booktitle = {Proceedings of the 34th Annual GIS Research UK (GISRUK) Conference},
  year      = {2026},
  publisher = {Zenodo},
  address   = {Birmingham, UK},
  doi       = {10.5281/zenodo.19430249},
  url       = {https://discovery.ucl.ac.uk/id/eprint/10224466/}
}`;

document.querySelector('.copy-citation').addEventListener('click', async () => {
  const status = document.querySelector('.citation-status');
  try {
    await navigator.clipboard.writeText(citation);
    status.textContent = 'BibTeX citation copied.';
  } catch {
    status.replaceChildren(document.createTextNode('Clipboard unavailable. '));
    const link = document.createElement('a');
    link.href = 'assets/publication.bib';
    link.download = 'xiao-2026.bib';
    link.textContent = 'Download the BibTeX citation.';
    status.append(link);
  }
});
