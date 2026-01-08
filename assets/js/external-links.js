document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("#") || href.startsWith("javascript:")) return;

    const isExternal =
      href.startsWith("http") &&
      link.hostname !== window.location.hostname;

    const isPdf =
      href.toLowerCase().endsWith(".pdf");

    if (isExternal || isPdf) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
