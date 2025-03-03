<script setup>
  const route = useRoute()
  // 'useFetch' is a handy shortcut for combining '$fetch' and 'useAsyncData'
  const { data, error } = await useFetch(
    `https://www.omdbapi.com/?apikey=bc62d4dc&i=${route.params.id}`,
    {
      pick: ["Title", "Plot", "Error", "Poster"],
      key: '/movies/${route.params.id}',
    }
  );

  if (error.value ) {
    // handle accordingly
  }

  if(data.value.Error === "Incorrect IMDb ID.") {
    showError({statusCode: 404, statusMessage: "Page Not Found"});
  }

//   const { data } = useAsyncData('/movies/${route.params.id}', () => {
//     return $fetch(
//       `https://www.omdbapi.com/?apikey=bc62d4dc&i=${route.params.id}`
//     );
//   },
//   {
//     // 'pick' is an easier way to filter the data than 'transform'
//     pick: ["Title", "Plot"],
//     // transform (data) {
//     //   return {
//     //     Plot: data.Plot,
//     //     Title: data.Title,
//     //   };
//     // },
//   }
// );

useHead({
  title: data.value.Title,
  meta: [
    {name: "description", content: data.value.Plot },
    {property: "og:description", content: data.value.Plot },
    {property: "og:image", content: data.value.Poster },
    {name: "twitter:card", content: "summary_image_large" },
  ],
});
</script>

<template>
  <div>
    <pre>
      {{data}}
    </pre>
  </div>
</template>