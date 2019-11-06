<template>
  <div class="container">
   <div class="colunms">
    <div class="column is-half is-offset-one-quarter">
        <form @submit.prevent="submit">
            <h1 class="title">Sign into your account</h1>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" name="email" id="email" v-model="form.email">
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" name="password" id="password" v-model="form.password">
              </div>
            </div>
            <div class="field">
              <button class="button" type="submit">Sign in</button>
            </div>
        </form>
    </div>
   </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'signin',
  components: {
    //
  },
  data () {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapActions ({
      signIn: 'auth/signIn'
    }),

    submit () {
      this.signIn(this.form).then(() => {
      	this.$router.replace({
      		name: 'dashboard'
      	})
      })
    }
  }
}
</script>
