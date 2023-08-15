<template>
  <div>
    <label>
      <input type="checkbox" :checked="checked" @change="onCheckboxChange"/>
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  modelValue: Boolean,
  label: String
});

const checked = ref(props.modelValue);
const emit = defineEmits(['update:modelValue']);

const onCheckboxChange = (event: Event) => {
  checked.value = (event.target as HTMLInputElement).checked;
  emit('update:modelValue', checked.value);
};
</script>