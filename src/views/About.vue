<template>
  <div class="h-[80%] flex justify-center items-center">
    <div
      class="w-1/2 h-2/3 flex items-center bg-white drop-shadow-xl border rounded-xl"
    >
      <div class="h-[80%] flex flex-col items-center justify-center">
        <span class="text-3xl border-b border-[--primary-blue] mb-6"
          >about us</span
        >
        <span class="px-12 text-sm mb-6"
          >We are family owned and operated, because of this we can guarantee
          excellent service irrespective of order size. We pride ourselves on a
          quick turn-around time and we are able to provide samples for fitment
          if required. Established in 2010, we’ve developed a trusted network of
          suppliers that allows us to source any PPE you may require. Our
          suppliers are compliant with the highest quality standards which
          allows us to provide the correct workwear while still remaining
          competitive with our pricing. There is no minimum order quantity and
          we will deliver to your premises. Contact us below and see how
          Freeky’s PPE & Corporate Supplies can help your business Leap
          Ahead.</span
        >
        <div class="w-2/3 border-y mb-4"></div>
        <div class="w-2/3 flex justify-evenly">
          <div class="flex flex-col items-start">
            <span>Frik van der Merwe</span>
            <div class="flex items-center my-2">
              <PhoneIcon class="h-4 mr-1" />
              <span>082 659 4255</span>
            </div>
            <div class="flex items-center">
              <EnvelopeIcon class="h-4 mr-1" />
              <a href="mailto:frik@freekysppe.com">frik@freekysppe.com</a>
            </div>
          </div>
          <div class="border-r border-[--primary-blue]"></div>
          <div class="flex flex-col items-end">
            <span>Calvin van der Merwe</span>
            <div class="flex items-center my-2">
              <span>082 968 6612</span>
              <PhoneIcon class="h-4 ml-1" />
            </div>
            <div class="flex items-center">
              <a href="mailto:calvin@freekysppe.com">calvin@freekysppe.com</a>
              <EnvelopeIcon class="h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhoneIcon, EnvelopeIcon } from "@heroicons/vue/24/outline";
</script>
