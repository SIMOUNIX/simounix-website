<!-- card component for project preview -->

<template>
    <div class="small-card">
      <img :src="image" alt="project preview" class="small-card__image" />
      <div class="small-card__text">
        <h3 class="small-card__title">{{ title }}</h3>
        <p class="small-card__description">{{ description }}</p>
        <!-- <router-link :to="link" class="small-card__link">
          {{ linkText }}
        </router-link> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SmallCard",
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      link: {
        type: [String, Object],
        required: true,
      },
      linkText: {
        type: String,
        required: true,
      },
    },
  };
  </script>