<template>
  <div>
    <h1 class="my-10 text-5xl font-bold text-center">Beer Catalog</h1>
    <div class="flex flex-col justify-center items-center mb-10">
      <div class="mb-2">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="toggleSortOrder">
          Sort by {{ sortOrder === 'asc' ? 'Descending' : 'Ascending' }} ABV
        </button>
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="filterByCentennialHops" />
          Remove beers with Centennial Hops
        </label>
      </div>
    </div>
    <div class="flex flex-wrap justify-around w-full" >
      <div v-if="beers" v-for="beer in sortedAndFilteredBeers" :key="beer.id">
        <BeerCard :beer="beer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Beer } from "~/components/types";

const {data, error} = await useFetch('https://api.punkapi.com/v2/beers?brewed_after=11-2012');
const beers: Ref<Beer[]> = data as unknown as Ref<Beer[]>;
const filterByCentennialHops = ref(false);
const sortOrder = ref('asc');

const containsCentennialHops = (beer: Beer) => {
  return beer.ingredients.hops.some(hop => hop.name.includes('Centennial'));
};

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
};

const sortedAndFilteredBeers = computed(() => {
  return beers.value
      .filter(beer => !filterByCentennialHops.value || containsCentennialHops(beer))
      .sort((a, b) => sortOrder.value === 'asc' ? a.abv - b.abv : b.abv - a.abv);
});
</script>