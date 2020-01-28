<template>
  <div>
    <p>Disable</p>
    <form @submit.prevent="submit">
        <div class="field">
          <label class="label">Otp</label>
          <div class="control">
            <input class="input" type="password" placeholder="Enter password" name="password" id="password" v-model="form.password">
          </div>
        </div>
        <div class="field">
          <button class="button" type="submit">Disable</button>
        </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'otp-disable',
  components: {
    //
  },

  data () {
  	return {
  		form: {
  			password: null
  		}
  	}
  },

  methods: {
  	...mapActions({
  		attempt: 'auth/attempt'
  	}),

  	async submit () {
  		try {
  			await axios.delete('auth/otp', {
	  			data: {
	  				...this.form
	  			}
	  		})
	  		await this.attempt()
	  		this.$router.replace({ name: 'settings' })
  		} catch(e) {
  			// statements
  			console.log(e);
  		}
  		
  	}
  }
}
</script>
