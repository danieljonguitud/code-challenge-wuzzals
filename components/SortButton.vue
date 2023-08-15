<template>
  <div class="mb-2">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="toggleSortOrder">
      Sort by {{ sortOrder === 'asc' ? 'Descending' : 'Ascending' }} ABV
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String,
});

const sortOrder = ref(props.modelValue);

const emit = defineEmits(['update:modelValue']);

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  emit('update:modelValue', sortOrder.value);
};
</script>