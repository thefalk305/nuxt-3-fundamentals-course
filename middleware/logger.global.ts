export default defineNuxtRouteMiddleware((to, from) => {
  console.log( "To: ", to, "\nFrom: ", from, "from the named middleware");
})

