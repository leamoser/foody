<template>
  <!-- extended -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="61.196"
    height="67.207"
    viewBox="0 0 61.196 67.207"
    v-if="!isReduced"
  >
    <g id="Gruppe_143" transform="translate(-240 -130)">
      <g id="Gruppe_142" transform="translate(240.5 130.5)">
        <rect
          id="Rechteck_33"
          width="37"
          height="42"
          transform="translate(0 6)"
          fill="#fff"
          :stroke="hexByMode(color)"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <rect
          id="Rechteck_34"
          width="37.489"
          height="42.033"
          transform="translate(3.106 12.84) rotate(-7.472)"
          fill="#fff"
          :stroke="hexByMode(color)"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <rect
          id="Rechteck_35"
          width="37.489"
          height="42.033"
          transform="translate(6.265 20.26) rotate(-11.998)"
          fill="#fff"
          :stroke="hexByMode(color)"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <rect
          id="Rechteck_36"
          width="37.489"
          height="42.033"
          transform="translate(11.503 26.066) rotate(-17.841)"
          fill="#fff"
          :stroke="hexByMode(color)"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <rect
          id="Rechteck_37"
          width="37"
          height="6"
          fill="#fff"
          :stroke="hexByMode(color)"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
      <line
        id="Linie_34"
        y1="20.728"
        x2="10.901"
        transform="translate(272.073 161.463)"
        fill="none"
        :stroke="hexByMode(color)"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <line
        id="Linie_35"
        x2="15.506"
        y2="13.135"
        transform="translate(269.1 163.693)"
        fill="none"
        :stroke="hexByMode(color)"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </svg>
  <!-- reduced -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16.716"
    height="19.936"
    viewBox="0 0 16.716 19.936"
    v-else
  >
    <g id="Gruppe_115" transform="translate(-641.628 -129.706)">
      <rect
        id="Rechteck_22"
        width="12.649"
        height="14.108"
        transform="translate(642.128 132.152)"
        fill="#fff"
        :stroke="hexByMode(color)"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <rect
        id="Rechteck_23"
        width="12.587"
        height="14.113"
        transform="translate(642.506 135.244) rotate(-11.998)"
        fill="#fff"
        :stroke="hexByMode(color)"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <rect
        id="Rechteck_24"
        width="12.649"
        height="1.946"
        transform="translate(642.128 130.206)"
        fill="#fff"
        :stroke="hexByMode(color)"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
import type { IconColorModes } from "../../../types";
import { useColor } from "@/composables/useColor";
const props = defineProps({
  isReduced: { required: false, type: Boolean, defaul: false },
  color: {
    required: false,
    type: String as () => IconColorModes,
    default: "dark",
  },
});
const { hexByMode } = useColor();
</script>

<style lang="scss" scoped></style>
