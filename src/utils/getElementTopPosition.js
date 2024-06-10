export function getElementTopPosition(element) {
  const rect = element?.getBoundingClientRect();
  return rect?.bottom - 20 + window.scrollY;
}
