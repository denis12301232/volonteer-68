export function scrollToEl(name: string, to: string) {
   const mainEl = document.querySelector(name);
   const toEl = document.querySelector(to);
   const rectMain = mainEl?.getBoundingClientRect();
   const rectTo = toEl?.getBoundingClientRect();

   if (rectMain && rectTo) {
      mainEl?.scrollTo({ behavior: 'smooth', top: rectTo.top - rectMain.top });
   }
}
