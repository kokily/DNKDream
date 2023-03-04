import escapeUrl from './escapeUrl';

export default function setHeaderId(body: string) {
  if (typeof document !== 'undefined') {
    const div = document.createElement('div');
    div.innerHTML = body;

    const h1 = div.querySelectorAll('h1');
    const h2 = div.querySelectorAll('h2');
    const h3 = div.querySelectorAll('h3');

    const list: string[] = [];

    const setId = (el: HTMLHeadingElement) => {
      const id = escapeUrl(el.innerText);
      const exists = list.filter((existsId) => existsId.indexOf(id) !== -1);
      const addId = `${id}${exists.length === 0 ? '' : `-${exists.length}`}`;

      el.id = addId;
      list.push(addId);
    };

    [h1, h2, h3].forEach((head) => head.forEach(setId));

    return div.innerHTML;
  }
}
