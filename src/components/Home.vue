<template>
  <div>
    <h2>Home</h2>
  </div>
  <!-- <div>
    <h1>Home {{ count }}</h1>
    <p v-on:mouseover="eventMouse()">{{ msg }}</p>
    <h2>{{ tempFn() }}</h2>
    <h2>{{ ObjFn() }}</h2>
    <h2>{{ ObjFn().name }}</h2>
    <h2>{{ ObjFn().email }}</h2>
    <h2>{{ ObjFn().number = 80808080 }}</h2>
    <button v-on:click="btnFn()">Click me {{ count }}</button>
    <v-btn @click="btnFn()" color="primary">Click me {{ count }}</v-btn>
  </div>
  <div>
    <h2>Two Way Binding</h2>
    <input v-model="obj.name" type="text" />
    <p>{{ obj.name }}</p>
    <input v-model="obj.email" type="text" />
    <p>{{ obj.email }}</p>
    <input v-model="obj.number" type="text" />
    <p>{{ obj.number }}</p>
  </div>
  <div>
    <h2>Two Way Binding</h2>
    <v-text-field v-model="obj.name" type="text" width="300px" />
    <v-text-field type="text" v-model="obj.email" width="300px" />
    <v-text-field type="number" v-model="obj.number" width="300px" />

    <v-btn @click="isShow = !isShow" rounded="xl">
      <v-icon>mdi-check</v-icon>
      Print Object
    </v-btn>
    <pre style="margin: 20px 0px 0px">{{ isShow ? obj : '' }}</pre>
  </div>

  <div>
    <h2>Getting value from checkbox and radio</h2>
    <v-checkbox label="Show Object" />
    <v-checkbox v-model="isShow" label="Show Object" />
    <div v-if="isShow">
      <pre>{{ obj }}</pre>
    </div>
    <div style="display: flex; flex-wrap: wrap">
      <v-checkbox v-model="languages" label="Python" value="Python" />
      <v-checkbox v-model="languages" label="Java" value="Java" />
      <v-checkbox v-model="languages" label="JavaScript" value="JavaScript" />
      <v-checkbox v-model="languages" label="C++" value="C++" />
      <v-checkbox v-model="languages" label="C#" value="C#" />
      <v-checkbox v-model="languages" label="Ruby" value="Ruby" />
    </div>
    <div>Languages : {{ languages.join(', ') }}</div>
    <div style="display: flex; flex-wrap: wrap">
      <v-radio-group v-model="color" inline>
        <v-radio label="Red" value="Red" />
        <v-radio label="Green" value="Green" />
        <v-radio label="Blue" value="Blue" />
        <v-radio label="Yellow" value="Yellow" />
        <v-radio label="Orange" value="Orange" />
        <v-radio label="Pink" value="Pink" />
      </v-radio-group>
    </div>
    <div>Color : {{ color }}</div>
  </div>
  <div>
    <h2>Looping the array</h2>
    <ul>
      <li v-for="name in names" :key="name">{{ name }}</li>
    </ul>

    <ul>
      <li v-for="(data, index) in arrObj" :key="index">
        {{ index + 1 }}. {{ data.name }} , {{ data.email }} {{ index + 1 }} . Name is
        {{ data.name }} and email is {{ data.email }}
      </li>
    </ul>
  </div>
  <ChildComponent msg="Hello from Home.vue i'm currently in home component" :obj="obj" />
  <ul>
    <li v-for="name in names" :key="name">
      <ChildComponent :name="name" :tempFn="testing" />
    </li>
  </ul>
  <div v-html="htmlTag"></div>
  <div>
    <h2>Class binding</h2>
    <div :class="{ container: true }">
      <h3>Active</h3>
    </div>
    <div :class="{ container: isShow, otherCss: true }">
      <h3>Active</h3>
    </div>
    <div :class="applyClass">
      <h3>Active</h3>
    </div>
    <v-btn style="margin-top: 20px" @click="isShowFn" rounded="xl">
      <v-icon>mdi-check</v-icon>
      Toggle Class
    </v-btn>
  </div>
  <div>
    <h2>Using Ref</h2>
    <v-text-field ref="refInput" type="text"></v-text-field>
    <v-btn @click="focusInput" rounded="2">
      <v-icon>mdi-check</v-icon>
      Focus Input
    </v-btn>
    <ul>
      <li v-for="inputValue in inputValues" :key="inputValue">{{ inputValue }}</li>
    </ul>
  </div>
  <div>
    <h2>Lazy v-model</h2>
    <v-text-field @blur="updateValue" v-model.trim="lol" type="text" width="300px" />
    <p>
      {{ lol }}
    </p>
  </div> -->
  <!-- <div>
    <h2>Using Pinia store management</h2>
    <p>Counter : {{ counterState.counter }}</p>
    <p>doubleCounter : {{ counterState.doubleCounter }}</p>
    <v-btn @click="counterState.incCounter"> Click here </v-btn>
    <v-btn @click="counterState.incCounter()">Click here</v-btn>
    <div
      style="display: flex; gap: 10px; width: 500px; align-items: center; margin: 10px 0px 0px 0px"
    >
      <v-text-field v-model="newCounterValue" label="Enter new counter value" />
      <v-btn color="primary" @click="setCounterManually"> Click here to set value </v-btn>
    </div>
  </div> -->

  <!-- <ChildComponent>
    <h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam repellendus nobis
      accusantium ipsa exercitationem neque, libero blanditiis, eum maiores ut iste deleniti quaerat
      fugit sequi qui itaque corrupti ea!
    </h2>
  </ChildComponent> -->
  <!-- <div>
    <h3>multiple slot with names</h3>
    <ChildComponent>
      <template v-slot:header>
        <p>Header</p>
      </template>
      <template v-slot:default>
        <p>Default slot</p>
      </template>
      <template v-slot:footer>
        <p>Footer</p>
      </template>
    </ChildComponent>
  </div> -->
  <!-- <div>
    <h3>dynamic component rendering</h3>
    <div style="display: flex; gap: 20px; width: auto">
      <v-btn color="primary" @click="tab = 'A'">Tab A</v-btn>
      <v-btn color="deep-orange" @click="tab = 'B'">Tab B</v-btn>
      <v-btn color="black" @click="tab = 'C'">Tab C</v-btn>
    </div>
    <component :is="tab"></component>
  </div> -->

  <!-- <div>
    <h3>Teleport Component</h3>
    <teleport to="#additionalApp">
      <Footer />
    </teleport>
  </div> -->
  <!-- <div>
    <h1 ref="testingLifeCycle">BeforeUpdate and Updated {{ count }}</h1>
    <v-btn @click="btnFn()" color="primary">Click me {{ count }}</v-btn>
  </div> -->
  <!-- 
  <div>
    <h2>Draggable Package</h2>
    <draggableComponent
      @start="dragging = true"
      @end="dragging = false"
      v-model="arrObj"
      group="items"
      :options="{ animation: 200 }"
    >
      <template #item="{ element }">
        <div class="item">
          {{ element.name + ' ' + element.email }}
        </div>
      </template>
    </draggableComponent>
  </div> -->

  <!-- <div>
    <h2>Data from API</h2>
    Show loading message if data is still loading
    <div v-if="isLoading">
      <v-skeleton-loader type="card"></v-skeleton-loader>
    </div>

    Show the data once it is fetched and apiData is available
    <div v-if="!isLoading && apiData && apiData.length > 0">
      <ul>
        <li v-for="user in apiData" :key="user.id">{{ user.name }} - {{ user.email }}</li>
      </ul>
    </div>

    Show a message if no data is available
    <div v-else-if="!isLoading && (!apiData || apiData.length === 0)">
      <v-skeleton-loader type="list-item"></v-skeleton-loader>
      <ul>
        <li v-for="i in apiData.length" :key="i">
          <v-skeleton-loader type="list-item"></v-skeleton-loader>
        </li>
      </ul>
    </div>

    <div v-if="isLoading && apiData.length > 0">
      <ul>
        <li v-for="i in apiData.length" :key="i">
          <v-skeleton-loader type="list-item"></v-skeleton-loader>
        </li>
      </ul>
    </div>

    <div v-if="error">
      <p>Error loading data: {{ error.message }}</p>
    </div>
  </div> -->

  <!-- <div>
    <h2>Data from API</h2>

    <div v-if="isLoading">
      <v-skeleton-loader :elevation="24" type="list-item"></v-skeleton-loader>
    </div>

    <div v-if="isLoading && apiData.length === 0">
      <ul>
        <li v-for="i in 10" :key="i">
          <v-skeleton-loader :elevation="24" type="list-item"></v-skeleton-loader>
        </li>
      </ul>
    </div>

    <div v-if="!isLoading && apiData && apiData.length > 0">
      <ul>
        <li v-for="user in apiData" :key="user.id">{{ user.name }} - {{ user.email }}</li>
      </ul>
    </div>

    <div v-else-if="!isLoading && (!apiData || apiData.length === 0)">
      <p>No users available.</p>
    </div>

    <div v-if="error">
      <p>Error loading data: {{ error.message }}</p>
    </div>
  </div> -->

  <!-- <div>
    <h2>API Data In Ag Grid</h2>
    <v-lazy transition="fade-transition" :options="{ threshold: 0.5 }">
      <div class="ag-theme-alpine" style="height: 500px; width: 100%">
        <ag-grid-vue
          :columnDefs="columnDefs"
          :rowData="apiData"
          :pagination="true"
          :paginationPageSize="10"
          :domLayout="'autoHeight'"
          :theme="theme"
          style="width: 100%; height: 400px"
        />
      </div>
      <div class="ag-theme-alpine" style="height: 500px; width: 100%">
        <ag-grid-vue
          :columnDefs="columnDefs"
          :rowData="apiData"
          :pagination="true"
          :paginationPageSize="10"
          :domLayout="'autoHeight'"
          style="width: 100%; height: 400px"
        />
      </div>
    </v-lazy>
  </div> -->

  <div>
    <h2>Vee validation</h2>

    <Form @submit="validateForm" v-slot="{ values }">
      <pre>{{ values }}</pre>
      <Field name="name" rules="required" v-slot="{ field, errors }">
        <v-text-field v-bind="field" :error-messages="errors" label="Name" />
      </Field>

      <Field name="email" rules="required|email" v-slot="{ field, errors }">
        <v-text-field v-bind="field" :error-messages="errors" label="Email" />
      </Field>

      <Field type="number" name="number" rules="required|numeric" v-slot="{ field, errors }">
        <v-text-field v-bind="field" :error-messages="errors" label="Number" />
      </Field>

      <v-btn type="submit">Validate</v-btn>
    </Form>
  </div>
</template>

<script>
import {
  VBtn,
  // VIcon,
  VTextField,
  // VCheckbox,
  // VRadio,
  // VRadioGroup,
  VSkeletonLoader,
} from 'vuetify/components'
// import ChildComponent from './ChildComponent.vue'
import { useCounterStore } from '@/store/counter'
import { onMounted, ref } from 'vue'
// import A from './A.vue'
// import B from './B.vue'
// import C from './C.vue'
// import Footer from './Footer.vue'
import httpClient from './instances/axiosInstance'
import { useQuery } from 'vue-query'
import { AgGridVue } from 'ag-grid-vue3'
import draggableComponent from 'vuedraggable'
import * as yup from 'yup'
import { useForm, Form, Field, defineRule } from 'vee-validate'
import { required, email, numeric } from '@vee-validate/rules'
// import { themeBalham } from 'ag-grid-community'

defineRule('required', required)
defineRule('email', email)
defineRule('numeric', numeric)

export default {
  name: 'HomePage',
  components: {
    VBtn,
    // VIcon,
    VTextField,
    // VCheckbox,
    // VRadio,
    // VRadioGroup,
    // ChildComponent,
    // A,
    // B,
    // C,
    // Footer,
    VSkeletonLoader,
    AgGridVue,
    draggableComponent,
    Form,
    Field,
  },
  setup() {
    const counterState = useCounterStore()
    const newCounterValue = ref(counterState.counter)
    const tab = ref('A')
    const apiData = ref([])

    const fetchingApiData = async () => {
      try {
        const res = await httpClient.get('/users')
        // console.log('API data fetched successfully:', apiData.value)
        return res.data
      } catch (err) {
        console.log(err)
      }
    }

    const { isLoading } = useQuery({
      queryKey: ['users'],
      queryFn: fetchingApiData,
      onSuccess: (data) => {
        // console.log('data', data)
        apiData.value = data
      },
    })

    // function useGettingData() {
    //   return useQuery('users', fetchingApiData)
    // }

    // const { data, isLoading, error } = useGettingData()
    // console.log('call--', data)

    const setCounterManually = () => {
      if (newCounterValue.value !== '') {
        counterState.counter = parseInt(newCounterValue.value)
        localStorage.setItem('counts', JSON.stringify(counterState.counter))
        newCounterValue.value = ''
      } else {
        alert('Please enter a valid value')
      }
    }

    onMounted(fetchingApiData)

    const columnDefs = [
      { headerName: 'ID', field: 'id' },
      { headerName: 'Name', field: 'name' },
      { headerName: 'Username', field: 'username' },
      { headerName: 'Email', field: 'email' },
      { headerName: 'Street', field: 'address.street' },
      { headerName: 'Suite', field: 'address.suite' },
      { headerName: 'City', field: 'address.city' },
      { headerName: 'Zipcode', field: 'address.zipcode' },
      { headerName: 'Phone', field: 'phone' },
      { headerName: 'Website', field: 'website' },
      { headerName: 'Company Name', field: 'company.name' },
      { headerName: 'Company Catchphrase', field: 'company.catchPhrase' },
    ]

    const gridOptions = {
      rowModelType: 'clientSide',
      icons: {
        sortAscending: '<span class="mdi mdi-sort-ascending"></span>',
        sortDescending: '<span class="mdi mdi-sort-descending"></span>',
        pageFirst: '<span class="mdi mdi-page-first"></span>',
        pageLast: '<span class="mdi mdi-page-last"></span>',
        pageNext: '<span class="mdi mdi-page-next"></span>',
        pagePrevious: '<span class="mdi mdi-pages-previous"></span>',
        refresh: '<span class="mdi mdi-refresh"></span>',
        columns: '<span class="mdi mdi-columns"></span>',
      },
    }

    const theme = ''

    const validationSchema = yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Must be a valid email').required('Email is required'),
      number: yup
        .number()
        .transform((value, originalValue) => (originalValue === '' ? null : value)) // Handle empty input
        .min(0, 'Must be greater than 0')
        .max(10, 'Must be less than 10')
        .typeError('Must be a valid number')
        .required('Number is required'),
    })

    const { handleSubmit } = useForm({
      validationSchema,
    })

    // const validateForm = handleSubmit((values, errors) => {
    //   console.log('values', values)
    //   console.log('errors', errors)
    // })

    const validateForm = handleSubmit(
      (values) => {
        console.log('values', values)
      },
      (errors) => {
        console.log('errors', errors)
      },
    )

    const name = ref('')
    const email = ref('')
    const number = ref('')

    return {
      counterState,
      newCounterValue,
      setCounterManually,
      tab,
      fetchingApiData,
      apiData,
      isLoading,
      columnDefs,
      gridOptions,
      theme,
      validateForm,
      Form,
      Field,
      name,
      email,
      number,
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  // mounted() {},
  // beforeUpdate() {
  //   console.log('beforeUpdate', this.$refs['testingLifeCycle'].textContent)
  // },
  // updated() {
  //   console.log('updated', this.$refs['testingLifeCycle'].textContent)
  // },
  // best use for increase of application performance
  beforeUnmount() {},
  unmounted() {},
  // best use for increase of application performance

  data() {
    return {
      lol: '',
      msg: 'Welcome to the home page',
      // count: localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0,
      obj: localStorage.getItem('obj')
        ? JSON.parse(localStorage.getItem('obj'))
        : {
            name: 'John',
            email: 'john@example.com',
            number: 1234567890,
          },
      isShow: false,
      languages: [],
      color: '',
      names: ['John', 'Doe', 'Jane', 'Doe'],
      arrObj: [
        {
          name: 'John',
          email: 'John@gmail.com',
        },
        {
          name: 'Doe',
          email: 'Doe@gmail.com',
        },
        {
          name: 'Jane',
          email: 'Jane@gmail.com',
        },
      ],
      htmlTag: `<div><h1>HTML Tag</h1></div>`,
      inputValues: [],
    }
  },
  computed: {
    applyClass() {
      return {
        container: this.isShow,
        otherCss: true,
      }
    },
  },
  mounted() {
    if (localStorage.getItem('count')) {
      this.count = parseInt(localStorage.getItem('count'))
    }
    if (localStorage.getItem('obj')) {
      this.obj = JSON.parse(localStorage.getItem('obj'))
    }
    if (localStorage.getItem('languages')) {
      this.languages = JSON.parse(localStorage.getItem('languages'))
    }
    if (localStorage.getItem('color')) {
      this.color = localStorage.getItem('color')
    }
    if (localStorage.getItem('isShow')) {
      this.isShow = JSON.parse(localStorage.getItem('isShow'))
    }
  },
  watch: {
    obj: {
      handler(newVal) {
        localStorage.setItem('obj', JSON.stringify(newVal))
      },
      deep: true,
    },
    languages: {
      handler(newVal) {
        localStorage.setItem('languages', JSON.stringify(newVal))
      },
      deep: true,
    },
    color(newVal) {
      localStorage.setItem('color', newVal)
    },
    isShow(newVal) {
      localStorage.setItem('isShow', newVal)
    },
  },
  methods: {
    updateValue(event) {
      this.lol = event.target.value
    },
    tempFn() {
      return 'tempFn from Home.vue'
    },
    ObjFn() {
      return {
        name: 'ObjFn from Home.vue',
        email: 'obj@gmail.com',
        number: 9090909090,
      }
    },
    btnFn() {
      this.count++
      localStorage.setItem('count', this.count)
    },
    eventMouse() {
      this.count++
      localStorage.setItem('count', this.count)
    },
    testing(name) {
      return alert(`Testing from ${name}`)
    },
    isShowFn() {
      this.isShow = !this.isShow
      localStorage.setItem('isShow', this.isShow)
    },
    focusInput() {
      this.$refs.refInput.focus()
      this.inputValues.push(this.$refs.refInput.value)
    },
  },
}
</script>
<style lang="css">
body {
  padding: 20px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: red;
}
.container h3 {
  color: white;
}
.otherCss {
  font-size: 30px;
}

.item {
  width: 300px;
  padding: 10px;
  margin: 5px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: move;
}
</style>
