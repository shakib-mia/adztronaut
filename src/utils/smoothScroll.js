function easeOutQuad(t) {
  return t * (2 - t);
}

export function smoothScrollTo(destinationOffset, duration) {
  const start = window.scrollY;
  const startTime =
    "now" in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const destinationOffsetToScroll = Math.round(
    documentHeight - windowHeight < destinationOffset
      ? documentHeight - windowHeight
      : destinationOffset,
  );

  if ("requestAnimationFrame" in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    return;
  }

  function scroll() {
    const now =
      "now" in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, (now - startTime) / duration);
    const timeFunction = easeOutQuad(time);
    window.scroll(
      0,
      Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start),
    );

    if (window.scrollY !== destinationOffsetToScroll) {
      requestAnimationFrame(scroll);
    }
  }

  scroll();
}
