<template>
  <!-- MEAL -->
  <!-- meat extended -->
  <svg
    v-if="icon === 'meal' && !isReduced && isMeat"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(114, 51.529).width"
    :height="dimensions(114, 51.529).height"
    viewBox="0 0 114 51.529"
  >
    <g id="Gruppe_21" data-name="Gruppe 21" transform="translate(-29 -37)">
      <g id="Gruppe_19" data-name="Gruppe 19">
        <path
          id="Pfad_1"
          data-name="Pfad 1"
          d="M70.5,37.5l-3,30h-17l-3-30Z"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
      <g
        id="Ellipse_1"
        data-name="Ellipse 1"
        transform="translate(29 59.471)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      >
        <ellipse cx="57" cy="14.529" rx="57" ry="14.529" stroke="none" />
        <ellipse cx="57" cy="14.529" rx="56.5" ry="14.029" fill="none" />
      </g>
      <g id="Gruppe_20" data-name="Gruppe 20">
        <path
          id="Pfad_2"
          data-name="Pfad 2"
          d="M60,70.736S62.5,79.5,77.5,79.5s15-4,23-2,13.322,1.236,12.161-2.382S109.5,70.5,104.5,69.5s-12-7-20-6S63.5,61.973,60,70.736Z"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <path
          id="Pfad_3"
          data-name="Pfad 3"
          d="M60,63.736S62.5,72.5,77.5,72.5s15-4,23-2,13.322,1.236,12.161-2.382S109.5,63.5,104.5,62.5s-12-7-20-6S63.5,54.973,60,63.736Z"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <line
          id="Linie_3"
          data-name="Linie 3"
          y1="7.348"
          transform="translate(60 63.388)"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <line
          id="Linie_4"
          data-name="Linie 4"
          y1="5.618"
          transform="translate(112.661 69.5)"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <path
          id="Pfad_4"
          data-name="Pfad 4"
          d="M72.5,61.5s-5.969-.112-3.485,2.944,7.526,4.18,8.506,2.618.6-5.563-2.21-5.563Z"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
    </g>
  </svg>
  <!-- meat reduced -->
  <svg
    v-if="icon === 'meal' && isReduced && isMeat"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(33.079, 15.007).width"
    :height="dimensions(33.079, 15.007).height"
    viewBox="0 0 33.079 15.007"
  >
    <g
      id="Gruppe_113"
      data-name="Gruppe 113"
      transform="translate(-629.472 -55.904)"
    >
      <g
        id="Gruppe_107"
        data-name="Gruppe 107"
        transform="translate(630 56.388)"
      >
        <path
          id="Pfad_16"
          data-name="Pfad 16"
          d="M630,67.846s1.517,5.317,10.618,5.317,9.1-2.427,13.955-1.213,8.083.75,7.379-1.445S660.034,67.7,657,67.1s-7.281-4.247-12.135-3.64S632.124,62.529,630,67.846Z"
          transform="translate(-630 -59.141)"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <path
          id="Pfad_17"
          data-name="Pfad 17"
          d="M630,60.846s1.517,5.317,10.618,5.317,9.1-2.427,13.955-1.213,8.083.75,7.379-1.445S660.034,60.7,657,60.1s-7.281-4.247-12.135-3.64S632.124,55.529,630,60.846Z"
          transform="translate(-630 -56.388)"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <line
          id="Linie_16"
          data-name="Linie 16"
          y1="4.459"
          transform="translate(0 4.247)"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <line
          id="Linie_17"
          data-name="Linie 17"
          y1="3.409"
          transform="translate(31.952 7.956)"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <path
          id="Pfad_18"
          data-name="Pfad 18"
          d="M640.892,61.5s-3.622-.068-2.114,1.786,4.566,2.536,5.161,1.588S644.3,61.5,642.6,61.5Z"
          transform="translate(-633.307 -58.398)"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
    </g>
  </svg>
  <!-- vegi extended -->
  <svg
    v-if="icon === 'meal' && !isReduced && isVegetarian"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(114, 51.529).width"
    :height="dimensions(114, 51.529).height"
    viewBox="0 0 114 51.529"
  >
    <g id="Gruppe_181" data-name="Gruppe 181" transform="translate(-141 -38)">
      <g id="Gruppe_177" data-name="Gruppe 177">
        <g id="Gruppe_176" data-name="Gruppe 176">
          <g id="Gruppe_175" data-name="Gruppe 175">
            <path
              id="Pfad_41"
              data-name="Pfad 41"
              d="M182.5,38.5l-3,30h-17l-3-30Z"
              fill="#fff"
              :stroke="iconColor"
              stroke-miterlimit="10"
              stroke-width="1"
            />
          </g>
          <g
            id="Ellipse_3"
            data-name="Ellipse 3"
            transform="translate(141 60.471)"
            fill="#fff"
            :stroke="iconColor"
            stroke-miterlimit="10"
            stroke-width="1"
          >
            <ellipse cx="57" cy="14.529" rx="57" ry="14.529" stroke="none" />
            <ellipse cx="57" cy="14.529" rx="56.5" ry="14.029" fill="none" />
          </g>
        </g>
      </g>
      <g id="Gruppe_178" data-name="Gruppe 178">
        <path
          id="Pfad_42"
          data-name="Pfad 42"
          d="M178.5,71.5l21.257-5.986L233.349,67.5l-21.007,4"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="1"
          stroke-width="1"
        />
        <rect
          id="Rechteck_48"
          data-name="Rechteck 48"
          width="33.842"
          height="4.029"
          transform="translate(178.5 71.5)"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <path
          id="Pfad_43"
          data-name="Pfad 43"
          d="M212.342,75.529"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <path
          id="Pfad_44"
          data-name="Pfad 44"
          d="M212.342,75.529l21.007-3.041V67.5"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="1"
          stroke-width="1"
        />
      </g>
      <g id="Gruppe_179" data-name="Gruppe 179">
        <path
          id="Pfad_45"
          data-name="Pfad 45"
          d="M185.505,60.034s1.011,8.29,9.244,8.363,16.134.052,15.216-8.363"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <path
          id="Pfad_46"
          data-name="Pfad 46"
          d="M185.505,60.034s2.156,5.383,22.177,2.564c0,0,5.141-2.82,0-4.615s-13.252-2.468-17.248-1.618S185.505,60.034,185.505,60.034Z"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <path
          id="Pfad_47"
          data-name="Pfad 47"
          d="M190.224,59.182s.8,2.447,8.2,1.165c0,0,1.9-1.282,0-2.1a12.17,12.17,0,0,0-6.381-.736A2.559,2.559,0,0,0,190.224,59.182Z"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
      <g id="Gruppe_180" data-name="Gruppe 180">
        <path
          id="Pfad_48"
          data-name="Pfad 48"
          d="M169.505,69.034s1.011,8.29,9.244,8.363,16.134.052,15.216-8.363"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <path
          id="Pfad_49"
          data-name="Pfad 49"
          d="M169.505,69.034s2.156,5.383,22.177,2.564c0,0,5.141-2.82,0-4.615s-13.252-2.468-17.248-1.618S169.505,69.034,169.505,69.034Z"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <path
          id="Pfad_50"
          data-name="Pfad 50"
          d="M174.224,68.182s.8,2.447,8.2,1.165c0,0,1.9-1.282,0-2.1a12.17,12.17,0,0,0-6.381-.736A2.559,2.559,0,0,0,174.224,68.182Z"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
    </g>
  </svg>
  <!-- vegi reduced -->
  <svg
    v-if="icon === 'meal' && isReduced && isVegetarian"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(38.964, 20.195).width"
    :height="dimensions(38.964, 20.195).height"
    viewBox="0 0 38.964 20.195"
  >
    <g
      id="Gruppe_183"
      data-name="Gruppe 183"
      transform="translate(-701.532 -57.415)"
    >
      <g id="Gruppe_182" data-name="Gruppe 182">
        <path
          id="Pfad_51"
          data-name="Pfad 51"
          d="M702.064,64.172s1.564,12.819,14.294,12.932,24.948.081,23.529-12.932"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <path
          id="Pfad_52"
          data-name="Pfad 52"
          d="M702.064,64.172s3.333,8.324,34.293,3.964c0,0,7.95-4.361,0-7.136s-20.492-3.816-26.672-2.5S702.064,64.172,702.064,64.172Z"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <path
          id="Pfad_53"
          data-name="Pfad 53"
          d="M709.361,62.854s1.233,3.784,12.687,1.8c0,0,2.941-1.982,0-3.244s-7.582-1.734-9.868-1.137A3.956,3.956,0,0,0,709.361,62.854Z"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
    </g>
  </svg>
  <!-- vegan extended -->
  <svg
    v-if="icon === 'meal' && !isReduced && isVegan"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(114, 51.529).width"
    :height="dimensions(114, 51.529).height"
    viewBox="0 0 114 51.529"
  >
    <g id="Gruppe_187" data-name="Gruppe 187" transform="translate(-20 -37)">
      <g id="Gruppe_185" data-name="Gruppe 185">
        <g id="Gruppe_184" data-name="Gruppe 184">
          <path
            id="Pfad_54"
            data-name="Pfad 54"
            d="M61.5,37.5l-3,30h-17l-3-30Z"
            fill="#fff"
            :stroke="iconColor"
            stroke-miterlimit="10"
            stroke-width="1"
          />
        </g>
        <g
          id="Ellipse_4"
          data-name="Ellipse 4"
          transform="translate(20 59.471)"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        >
          <ellipse cx="57" cy="14.529" rx="57" ry="14.529" stroke="none" />
          <ellipse cx="57" cy="14.529" rx="56.5" ry="14.029" fill="none" />
        </g>
      </g>
      <g id="Gruppe_186" data-name="Gruppe 186">
        <path
          id="Pfad_55"
          data-name="Pfad 55"
          d="M68.168,65.82V77.5h8.3l2.491-11.68s7.716,3,11.668-3.267-2.371-6.264-7.113-6.264,14.226-4.742,4.742-7.9-11.065,1.581-11.065,1.581S77.68,38.9,71.9,42.853s-7.356,8.694-4.194,10.274-15.807-6.322-11.065,0,9.447,6.623,9.447,6.623-14.14-4.442-10.213,0S68.168,65.82,68.168,65.82Z"
          fill="#fff"
          :stroke="iconColor"
          stroke-width="1"
        />
        <path
          id="Pfad_56"
          data-name="Pfad 56"
          d="M76.471,77.5,81.6,72.8V66.437"
          fill="#fff"
          :stroke="iconColor"
          stroke-width="1"
        />
        <path
          id="Pfad_57"
          data-name="Pfad 57"
          d="M71.329,50.628s1.243-3.171,2.2-1.586a6.765,6.765,0,0,1,.959,3.167"
          fill="#fff"
          :stroke="iconColor"
          stroke-width="1"
        />
        <path
          id="Pfad_58"
          data-name="Pfad 58"
          d="M79.908,58.121s4.638-.314,2.771,1.629-2.771,1.871-2.771,1.871"
          fill="#fff"
          :stroke="iconColor"
          stroke-width="1"
        />
        <path
          id="Pfad_59"
          data-name="Pfad 59"
          d="M70.4,58.121s2.167-4.234,3.126-1.912l.959,2.323"
          fill="#fff"
          :stroke="iconColor"
          stroke-width="1"
        />
      </g>
    </g>
  </svg>
  <!-- vegan reduced -->
  <svg
    v-if="icon === 'meal' && isReduced && isVegan"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(33.081, 32.052).width"
    :height="dimensions(33.081, 32.052).height"
    viewBox="0 0 33.081 32.052"
  >
    <g
      id="Gruppe_188"
      data-name="Gruppe 188"
      transform="translate(-757.419 -48.059)"
    >
      <path
        id="Pfad_60"
        data-name="Pfad 60"
        d="M769.268,69.4V79.611h7.263L778.709,69.4s6.748,2.622,10.2-2.857-2.073-5.479-6.221-5.479,12.442-4.147,4.148-6.912-9.677,1.383-9.677,1.383.424-9.678-4.627-6.221-6.433,7.6-3.668,8.985-13.825-5.529-9.677,0,8.262,5.792,8.262,5.792-12.366-3.885-8.932,0S769.268,69.4,769.268,69.4Z"
        fill="#fff"
        :stroke="iconColor"
        stroke-width="1"
      />
      <path
        id="Pfad_61"
        data-name="Pfad 61"
        d="M776.531,79.611l4.489-4.115V69.935"
        fill="#fff"
        :stroke="iconColor"
        stroke-width="1"
      />
      <path
        id="Pfad_62"
        data-name="Pfad 62"
        d="M772.033,56.11s1.088-2.774,1.926-1.387a5.913,5.913,0,0,1,.839,2.769"
        fill="#fff"
        :stroke="iconColor"
        stroke-width="1"
      />
      <path
        id="Pfad_63"
        data-name="Pfad 63"
        d="M779.536,62.663s4.056-.275,2.424,1.424-2.424,1.637-2.424,1.637"
        fill="#fff"
        :stroke="iconColor"
        stroke-width="1"
      />
      <path
        id="Pfad_64"
        data-name="Pfad 64"
        d="M771.225,62.663s1.9-3.7,2.734-1.672l.839,2.031"
        fill="#fff"
        :stroke="iconColor"
        stroke-width="1"
      />
    </g>
  </svg>
  <!-- CALENDAR -->
  <!-- calendar extended -->
  <svg
    v-if="icon === 'calendar' && !isReduced"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(61.196, 67.207).width"
    :height="dimensions(61.196, 67.207).height"
    viewBox="0 0 61.196 67.207"
  >
    <g id="Gruppe_143" transform="translate(-240 -130)">
      <g id="Gruppe_142" transform="translate(240.5 130.5)">
        <rect
          id="Rechteck_33"
          width="37"
          height="42"
          transform="translate(0 6)"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <rect
          id="Rechteck_34"
          width="37.489"
          height="42.033"
          transform="translate(3.106 12.84) rotate(-7.472)"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <rect
          id="Rechteck_35"
          width="37.489"
          height="42.033"
          transform="translate(6.265 20.26) rotate(-11.998)"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <rect
          id="Rechteck_36"
          width="37.489"
          height="42.033"
          transform="translate(11.503 26.066) rotate(-17.841)"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <rect
          id="Rechteck_37"
          width="37"
          height="6"
          fill="#fff"
          :stroke="iconColor"
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
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <line
        id="Linie_35"
        x2="15.506"
        y2="13.135"
        transform="translate(269.1 163.693)"
        fill="none"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </svg>
  <!-- calendar reduced -->
  <svg
    v-if="icon === 'calendar' && isReduced"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(16.716, 19.936).width"
    :height="dimensions(16.716, 19.936).height"
    viewBox="0 0 16.716 19.936"
  >
    <g id="Gruppe_115" transform="translate(-641.628 -129.706)">
      <rect
        id="Rechteck_22"
        width="12.649"
        height="14.108"
        transform="translate(642.128 132.152)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <rect
        id="Rechteck_23"
        width="12.587"
        height="14.113"
        transform="translate(642.506 135.244) rotate(-11.998)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <rect
        id="Rechteck_24"
        width="12.649"
        height="1.946"
        transform="translate(642.128 130.206)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </svg>
  <!-- CORRELATIONS -->
  <!-- correlations extended -->
  <svg
    v-if="icon === 'correlations' && !isReduced"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(72.865, 54.284).width"
    :height="dimensions(72.865, 54.284).height"
    viewBox="0 0 72.865 54.284"
  >
    <g id="Gruppe_159" transform="translate(-229.366 -320.272)">
      <path
        id="Pfad_34"
        d="M265.988,334h-18.2a10.165,10.165,0,0,0-4.918,1.268c-3.878,2.142-10.285,6.8-5.835,12.464a9.9,9.9,0,0,0,8.887,3.579c8.063-.886,26.521-2.454,35.857.473,12.158,3.811,14.047,14.819,1.67,15.666a213.856,213.856,0,0,1-25.078,0"
        transform="translate(-0.852 -1.731)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="Pfad_35"
        d="M271.551,325.979l8,6.791-8,6.786"
        transform="translate(-6.371 -0.502)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="Pfad_36"
        d="M268.859,378.379l-6.308-5.354,6.308-5.349"
        transform="translate(-4.993 -6.889)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="Pfad_37"
        d="M299.968,336.89l.553,8.671-6.267-8.671-5.161,1.577,2.038-7.883V322.7l3.676,7.24,7-7.24-3.585,7.883,11.326,3.547Z"
        transform="translate(-9.059)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <g id="Gruppe_158" transform="translate(229.958 353.57)">
        <path
          id="Pfad_38"
          d="M242.235,363.888s-4.884-6.531-9.931,0-1.484,16.033,6.234,16.033,8.907-2.375,8.907-3.563,3.787-10.094,1-12.172S242.235,363.888,242.235,363.888Z"
          transform="translate(-229.958 -359.434)"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <path
          id="Pfad_39"
          d="M244.456,363.607s.727-1.187,0-4.453"
          transform="translate(-232.179 -359.154)"
          fill="#fff"
          :stroke="iconColor"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
    </g>
  </svg>
  <!-- correlations reduced -->
  <svg
    v-if="icon === 'correlations' && isReduced"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(24.24, 19.728).width"
    :height="dimensions(24.24, 19.728).height"
    viewBox="0 0 24.24 19.728"
  >
    <g id="Gruppe_116" transform="translate(-623.003 -325.598)">
      <path
        id="Pfad_21"
        d="M636.077,334h-7.5a4.19,4.19,0,0,0-2.027.523c-1.6.883-4.239,2.8-2.405,5.137a4.081,4.081,0,0,0,3.663,1.475c3.323-.365,10.931-1.011,14.779.195,5.011,1.571,5.79,6.108.688,6.457a88.15,88.15,0,0,1-10.337,0"
        transform="translate(0 -5.221)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="Pfad_22"
        d="M659.551,325.979l3.3,2.8-3.3,2.8"
        transform="translate(-23.456)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="Pfad_23"
        d="M653.151,372.088l-2.6-2.207,2.6-2.2"
        transform="translate(-17.597 -27.143)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </svg>
  <!-- ISSUES -->
  <!-- issues extended -->
  <svg
    v-if="icon === 'issues' && !isReduced"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(72.83, 63.773).width"
    :height="dimensions(72.83, 63.773).height"
    viewBox="0 0 72.83 63.773"
  >
    <g id="Gruppe_120" transform="translate(-231.452 -230.384)">
      <path
        id="Pfad_24"
        d="M231.867,230.663s24.98,37.234,4.409,63.184"
        transform="translate(0)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="Pfad_25"
        d="M300.563,230.663s-24.979,37.234-4.408,63.184"
        transform="translate(3.304)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <line
        id="Linie_25"
        y1="8.816"
        x2="13.224"
        transform="translate(277.418 253.439)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <line
        id="Linie_26"
        x2="14.385"
        y2="2.939"
        transform="translate(277.418 268.133)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <line
        id="Linie_27"
        x2="11.755"
        y2="5.878"
        transform="translate(274.48 274.01)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <line
        id="Linie_28"
        x1="14.476"
        y1="9.551"
        transform="translate(246.561 250.5)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <line
        id="Linie_29"
        x1="17.092"
        y2="5.878"
        transform="translate(246.645 271.071)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="Pfad_26"
        d="M258.936,258.622l-1.031-16.163,11.681,16.163,9.62-2.939-3.8,14.694v14.694l-6.852-13.5-13.055,13.5,6.682-14.694-21.112-6.612Z"
        transform="translate(0.541 0.694)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </svg>
  <!-- issues reduced -->
  <svg
    v-if="icon === 'issues' && isReduced"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(35.394, 33.883).width"
    :height="dimensions(35.394, 33.883).height"
    viewBox="0 0 35.394 33.883"
  >
    <g id="Gruppe_114" transform="translate(555.222 -425.561) rotate(120)">
      <line
        id="Linie_18"
        x2="6.427"
        y2="3.213"
        transform="translate(660.04 249.115)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <line
        id="Linie_19"
        x1="7.914"
        y1="5.222"
        transform="translate(644.777 236.262)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="Pfad_19"
        d="M651.838,241.081l-.563-8.837,6.386,8.837,5.259-1.607-2.077,8.033v8.033l-3.746-7.378-7.137,7.378,3.653-8.033-11.542-3.615Z"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </svg>
  <!-- DAY -->
  <svg
    v-if="icon === 'day'"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(43.04, 54.138).width"
    :height="dimensions(43.04, 54.138).height"
    viewBox="0 0 43.04 54.138"
  >
    <g id="Gruppe_145" transform="translate(-238.987 -421.059)">
      <path
        id="Pfad_32"
        d="M279.029,473.441,239.5,467.265l1.235-40.765H281.5Z"
        transform="translate(0 1.177)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <rect
        id="Rechteck_45"
        width="41"
        height="6"
        transform="translate(240.5 421.559)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <line
        id="Linie_36"
        y1="22.54"
        x2="11.853"
        transform="translate(255.302 439.11)"
        fill="none"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <line
        id="Linie_37"
        x2="16.861"
        y2="14.283"
        transform="translate(252.069 441.535)"
        fill="none"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </svg>
  <!-- CHECK -->
  <svg
    v-if="icon === 'check'"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(18.042, 19.008).width"
    :height="dimensions(18.042, 19.008).height"
    viewBox="0 0 18.042 19.008"
  >
    <path
      id="Pfad_31"
      d="M235.519,678.747l8.856,7.5,8.41-17.992"
      transform="translate(-235.195 -668.04)"
      fill="#fff"
      :stroke="iconColor"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
  <!-- CROSS -->
  <svg
    v-if="icon === 'cross'"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(12.108, 15.787).width"
    :height="dimensions(12.108, 15.787).height"
    viewBox="0 0 12.108 15.787"
  >
    <g id="Gruppe_138" transform="translate(-294.492 -669.767)">
      <line
        id="Linie_32"
        y1="15.322"
        x2="8.057"
        transform="translate(297.013 670)"
        fill="none"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <line
        id="Linie_33"
        x2="11.462"
        y2="9.709"
        transform="translate(294.815 671.648)"
        fill="none"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </svg>
  <!-- EDIT -->
  <svg
    v-if="icon === 'edit'"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(15.767, 20.573).width"
    :height="dimensions(15.767, 20.573).height"
    viewBox="0 0 15.767 20.573"
  >
    <g id="Gruppe_147" transform="translate(-345.674 -667.506)">
      <path
        id="Pfad_33"
        d="M357.487,668.252l-8.8,12.8-2.219,6.283,5.509-1.587,8.818-14.6Z"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <line
        id="Linie_42"
        x1="3.291"
        y1="4.696"
        transform="translate(348.688 681.047)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <line
        id="Linie_43"
        x1="8.714"
        y2="13.782"
        transform="translate(350.333 669.613)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <line
        id="Linie_44"
        x2="1.365"
        y2="1.779"
        transform="translate(347.323 684.912)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </svg>
  <!-- NEXT -->
  <svg
    v-if="icon === 'next'"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(18.582, 13.999).width"
    :height="dimensions(18.582, 13.999).height"
    viewBox="0 0 18.582 13.999"
  >
    <g id="Gruppe_68" transform="translate(18.01 13.77) rotate(180)">
      <line
        id="Linie_10"
        x2="17.382"
        transform="translate(0.628 7.301)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="Pfad_8"
        d="M3.757,0,0,7.3l3.757,6.211"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </svg>
  <!-- PREV -->
  <svg
    v-if="icon === 'prev'"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(18.582, 13.999).width"
    :height="dimensions(18.582, 13.999).height"
    viewBox="0 0 18.582 13.999"
  >
    <g id="Gruppe_67" transform="translate(0.572 0.229)">
      <line
        id="Linie_10"
        x2="17.382"
        transform="translate(0.628 7.301)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="Pfad_8"
        d="M85.655,138.5,81.9,145.8l3.757,6.211"
        transform="translate(-81.898 -138.5)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </svg>
  <!-- USER -->
  <svg
    v-if="icon === 'user'"
    :class="{ disabled: disabled }"
    xmlns="http://www.w3.org/2000/svg"
    :width="dimensions(38.325, 58.691).width"
    :height="dimensions(38.325, 58.691).height"
    viewBox="0 0 38.325 58.691"
  >
    <g
      id="Gruppe_173"
      data-name="Gruppe 173"
      transform="translate(-306.131 -52.68)"
    >
      <path
        id="Pfad_20"
        data-name="Pfad 20"
        d="M655.277,565.934h35.344s2.155-24.375-5.344-28.124-9.375-5.625-9.375-5.625,16.874-7.5,11.249-15-11.249-11.25-16.874-7.5-7.5,13.124-5.625,16.874-5.625,8.892-9.375,14.759S655.277,565.934,655.277,565.934Z"
        transform="translate(-346.975 -455.064)"
        fill="#fff"
        :stroke="iconColor"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
import type { IconNames } from "@/ts/types";
import { IconColors, NutritionTypes } from "@/ts/enums";
import { computed } from "vue";

const props = defineProps({
  icon: { required: true, type: String as () => IconNames },
  color: {
    required: false,
    type: String as () => keyof typeof IconColors,
    default: "dark",
  },
  isReduced: { required: false, type: Boolean, default: false },
  nutritionType: {
    required: false,
    type: Number as () => NutritionTypes,
    default: 1,
  },
  width: { required: false, type: Number, default: 0 },
  height: { required: false, type: Number, default: 0 },
  disabled: { required: false, type: Boolean, default: false },
});
// -> resize
const dimensions = (
  x: number,
  y: number
): { width: number | "100%"; height: number | "100%" } => {
  if (!props.width && !props.height) {
    return {
      width: x,
      height: y,
    };
  } else if (props.width && !props.height) {
    const aspectRatioHeight = (props.width / x) * y;
    return {
      width: "100%",
      height: aspectRatioHeight,
    };
  } else if (props.height && !props.width) {
    const aspectRatioWidth = (props.height / y) * x;
    return {
      width: aspectRatioWidth,
      height: "100%",
    };
  } else {
    return {
      width: props.width,
      height: props.height,
    };
  }
};

// -> nutrition types
const isMeat = computed<boolean>(
  () => props.nutritionType === NutritionTypes.meat
);
const isVegetarian = computed<boolean>(
  () => props.nutritionType === NutritionTypes.vegetarian
);
const isVegan = computed<boolean>(
  () => props.nutritionType === NutritionTypes.vegan
);
// -> color
const iconColor = computed<IconColors>(() =>
  props.color ? IconColors[props.color] : IconColors["dark"]
);
</script>

<style lang="scss" scoped>
svg.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
