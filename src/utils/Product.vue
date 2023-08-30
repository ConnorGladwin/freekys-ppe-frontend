<template>
  <div>
    <AdvancedImage :cldImg="img" />
  </div>
</template>

<script setup lang="ts">
import { AdvancedImage } from "@cloudinary/vue";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { CloudConfig } from "@cloudinary/url-gen";
import { URLConfig } from "@cloudinary/url-gen";

const cloudConfig = new CloudConfig({ cloudName: "dnogg21dd" });
const urlConfig = new URLConfig({ secure: true });

const props = defineProps<{
  image: any;
}>();

let img: any;
img = new CloudinaryImage(props.image, cloudConfig, urlConfig);
</script>
