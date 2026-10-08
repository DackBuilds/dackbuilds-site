// Turns ![alt](/images/x.jpg "Caption") into a numbered figure:
// <figure><img><figcaption>Fig. 1. Caption</figcaption></figure>
// An image without a title stays a plain image. Numbers restart in every post.
import { visit } from 'unist-util-visit';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

export default function remarkFigures() {
  return (tree) => {
    let n = 0;
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!parent || index === undefined || node.children.length !== 1) return;
      const img = node.children[0];
      if (img.type !== 'image' || !img.title) return;
      n += 1;
      const cls = /\.svg(\?|$)/i.test(img.url) ? 'fig fig-mark' : 'fig';
      parent.children[index] = {
        type: 'html',
        value:
          `<figure class="${cls}"><img src="${esc(img.url)}" alt="${esc(img.alt || '')}" loading="lazy" decoding="async">` +
          `<figcaption><span class="fig-n">Fig. ${n}.</span> ${esc(img.title)}</figcaption></figure>`,
      };
    });
  };
}
