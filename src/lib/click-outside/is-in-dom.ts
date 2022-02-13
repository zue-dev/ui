export default function isInDom(obj: Element) {
  return Boolean(obj.closest("body"));
}
