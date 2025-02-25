<template lang="">
  <div>
    <h2>ProfileComponent</h2>
    <p v-if="path">welcome , {{ path }}</p>
    <p>{{ gettingDate().time + ' ' + gettingDate().month }}</p>
    <div v-if="id" style="margin-top: 20px">
      <div v-if="userDetails" class="profile-container">
        <div class="profile-header">
          <h3>{{ userDetails.name }}</h3>
          <span class="user-phone">{{ userDetails.phone }}</span>
        </div>

        <div class="profile-info">
          <div class="info-item">
            <strong>Email:</strong>
            <span>{{ userDetails.email }}</span>
          </div>

          <div class="info-item">
            <strong>Username:</strong>
            <span>{{ userDetails.username }}</span>
          </div>

          <div class="info-item">
            <strong>Website:</strong>
            <span>{{ userDetails.website }}</span>
          </div>

          <div v-if="userDetails.address" class="info-item">
            <strong>Address:</strong>
            <span>{{ userDetails.address.street }}, {{ userDetails.address.suite }}</span>
            <span>{{ userDetails.address.city }}, {{ userDetails.address.zipcode }}</span>
          </div>

          <div v-if="userDetails.company" class="info-item">
            <strong>Company:</strong>
            <span>{{ userDetails.company.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import httpClient from './instances/axiosInstance'
import { showToast } from './instances/toastifyInstance'

export default {
  name: 'ProfileComponent',
  setup() {
    const route = useRoute()
    const path = ref('')
    const id = ref()
    const userDetails = ref({})
    const notificationShown = ref(false)

    const getProfile = async () => {
      if (notificationShown.value) {
        return
      }
      try {
        const response = await httpClient.get(`/users/${id.value}`)
        userDetails.value = response.data
        if (response.status === 200) {
          showToast(
            'User data loaded successfully!',
            3000,
            // 'linear-gradient(to right, #ff7e5f, #feb47b)',
            '#4CAF50',
          )
          notificationShown.value = true
        }
      } catch (error) {
        console.error(error)
        showToast(
          'Failed to load user data',
          3000,
          // 'linear-gradient(to right, #ff4b1f, #ff9068)'
          '#FF6347',
        )
        notificationShown.value = true
      }
    }

    const gettingDate = () => {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      const date = new Date()
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()
      const time = `${hours}:${minutes}:${seconds}`
      const month = months[date.getMonth()]
      return { date, hours, minutes, seconds, time, month }
    }

    onMounted(() => {
      notificationShown.value = false
      path.value = route.params.name || ''
      id.value = route.params.id || null
      if (id.value) {
        getProfile()
      }
    })

    watch(
      () => [route.params.name, route.params.id],
      ([newName, newId]) => {
        path.value = newName || ''
        id.value = newId || null
        if (newId !== id.value) {
          getProfile()
          notificationShown.value = false
        }
      },
      { immediate: true },
    )

    return { path, id, userDetails, gettingDate }
  },
}
</script>
<style lang="css">
.profile-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.profile-header h3 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
}

.user-phone {
  font-size: 1rem;
  color: #888;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.info-item strong {
  font-weight: bold;
  color: #333;
}

.info-item span {
  font-size: 1rem;
  color: #555;
}
</style>
