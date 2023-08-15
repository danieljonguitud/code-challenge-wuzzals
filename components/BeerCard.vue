<template>
  <div class="flex">
    <div href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img :src="beer.image_url" alt="Beer Image" class="object-cover w-48 h-48 rounded-t-lg md:rounded-none md:rounded-l-lg" />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ beer.name }}</h5>
        <p class="mb-2 text-sm text-gray-600 italic">"{{ beer.tagline }}"</p>
        <p class="mb-3 text-sm text-gray-600">{{ beer.description }}</p>
        <p class="mb-2 text-sm text-gray-600">ABV: {{ beer.abv }}</p>
        <p class="mb-2 text-sm text-gray-600">IBU: {{ beer.ibu }}</p>
        <p v-if="containsLactose" class="mt-2 bg-yellow-200 p-2 rounded text-yellow-800">Contains lactose!</p>
        <p v-if="isDryHopped" class="mt-2 bg-green-200 p-2 rounded text-green-800">Dry hopped!</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Beer } from '~/components/types';

interface BeerCardProps {
  beer: Beer;
}

const props = defineProps<BeerCardProps>()

const containsLactose = computed(() => {
  return props.beer.ingredients.hops.some(hop => hop.name.toLowerCase().includes('lactose'));
});
const isDryHopped = computed(() => {
  return props.beer.ingredients.hops.some(hop => hop.add === 'dry hop');
});
</script>