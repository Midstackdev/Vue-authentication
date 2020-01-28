<template>
  <div>
    <p>Settings</p>
    <div class="buttons">
      <router-link :to="{ name: 'otp-enable'}" class="button is-primary is-light" v-if="!user.google2fa_enabled">Enable Otp</router-link>
      <router-link :to="{ name: 'otp-disable'}" class="button is-link is-light" v-else>Disable Otp</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'settings',
  components: {
    //
  },

  computed: {
  	...mapGetters({
  		user: 'auth/user'
  	})
  }
}
</script>
