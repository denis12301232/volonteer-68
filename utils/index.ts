export function scrollToEl(scrollSelector: string, toSelector: string) {
   const scrollElement = document.querySelector(scrollSelector);
   const rectScroll = scrollElement?.getBoundingClientRect();
   const rectTo = document.querySelector(toSelector)?.getBoundingClientRect();
   const exists = scrollElement && rectTo && rectScroll;

   exists && scrollElement.scrollTo({ behavior: 'smooth', top: rectTo.top - rectScroll.top });
}
