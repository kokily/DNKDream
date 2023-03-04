export default function parseHeading(body: string) {
  if (typeof document !== 'undefined') {
    const div = document.createElement('div');
    div.innerHTML = body;

    const els = Array.from(div.children);
    const headings = els.filter((el) => el.tagName.match(/H([1-3])/));

    const headingsInfo = headings.map((header) => ({
      id: header.id,
      text: header.textContent,
      level: parseInt(header.tagName.replace('H', ''), 10),
    }));

    const minLv = Math.min(
      ...Array.from(headingsInfo.map((info) => info.level))
    );

    headingsInfo.forEach((info) => {
      info.level -= minLv;
    });

    return headingsInfo;
  } else {
    return [];
  }
}
