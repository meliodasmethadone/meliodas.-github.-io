function setTheme(theme) {
  if (theme === "green") {
    document.documentElement.style.setProperty("--main", "#7CFF00");
    document.documentElement.style.setProperty("--alt", "#b36bff");
  }
  if (theme === "red") {
    document.documentElement.style.setProperty("--main", "#ff2a2a");
    document.documentElement.style.setProperty("--alt", "#ff8a8a");
  }
  if (theme === "purple") {
    document.documentElement.style.setProperty("--main", "#b36bff");
    document.documentElement.style.setProperty("--alt", "#7CFF00");
  }
}
