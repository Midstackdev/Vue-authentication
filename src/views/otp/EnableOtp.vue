<template>
  <div>
    <p>Enable</p>
    <form @submit.prevent="submit">
	    <div v-if="otp.image">
    		<p>Scan the Qr code with your authenticator app</p>
	    	<img :src="otp.image" alt="Qr code for otp">
	    </div>
	    <div class="field">
	      <label class="label">Code</label>
	      <div class="control">
	        <input class="input" type="text" placeholder="Code" name="otp" id="otp" v-model="form.otp">
	      </div>
	    </div>
	    <div class="control">
	      <button type="submit" class="button is-primary">Submit</button>
	    </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'otp-enable',
  components: {
    //
  },

  data () {
  	return {
  		otp: {
  			image: null
  		},

  		form: {
  			otp: null
  		}
  	}
  },

  methods: {
  	...mapActions({
  		attempt: 'auth/attempt'
  	}),

  	async getOtpImage () {
  		let response = await axios.get('auth/otp')

  		this.otp.image = response.data
  	},

  	async submit () {
  		try {
  			await axios.post('auth/otp', this.form)
  			await this.attempt()

  			this.$router.replace({ name: 'settings' })
  		} catch(e) {
  			// statements
  			console.log(e);
  		}
  	}
  },

  mounted () {
  	this.getOtpImage()
  }
}
</script>
