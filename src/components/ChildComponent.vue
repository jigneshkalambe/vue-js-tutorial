<template>
  <!-- <div>
    <h1>Child Component</h1>
    <p>This is a child component</p>
    <p>{{ name }}</p>
    <pre>
      imported from parent component
      {{ obj }}
    </pre>
    <v-btn color="primary" @click="tempFn(name)">
      <v-icon>mdi-check</v-icon>
      Click me
    </v-btn>
  </div> -->
  <div>
    <h2>THIS IS CHILD COMPONENT</h2>
    <!-- <slot></slot> -->
    <slot name="header"></slot>
    <slot name="default"></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script>
import { VBtn, VIcon } from 'vuetify/components'
export default {
  name: 'ChildComponent',
  components: {
    VBtn,
    VIcon,
  },
  // props: {
  //   msg: {
  //     type: String,
  //     required: true,
  //   },
  //   obj: {
  //     type: Object,
  //     required: true,
  //   },
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   tempFn: {
  //     type: Function,
  //   },
  // },
}
</script>
<style scoped>
div {
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>
