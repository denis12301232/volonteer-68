export default function useNavigation() {
   const router = useRouter();
   const route = useLocaleRoute();

   function goBack() {
      window.history.length > 2 ? router.go(-1) : router.push(route({ name: 'index' })!);
   }

   return { router, goBack, route };
}
