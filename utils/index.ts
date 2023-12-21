export function scrollIntoView(selector: string, options?: boolean | ScrollIntoViewOptions) {
  document.querySelector(selector)?.scrollIntoView(options);
}
