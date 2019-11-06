<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item"
            :to="{name: 'home'}"
          >
            Home
          </router-link>
          <template v-if="authenticated">
            <router-link class="navbar-item"
              :to="{name: 'dashboard'}"
            >
              Menu
            </router-link>
            <router-link class="navbar-item"
              :to="{name: 'dashboard'}"
            >
              Dashboard
            </router-link>
          </template>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <template v-if="authenticated">
                <a class="button is-light" @click="signOut">
                  Sign out
                </a>
                <a class="button is-light">
                  {{user.name}}
                </a>
              </template>
              <template v-if="!authenticated">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <router-link class="button is-light"
                   :to="{name: 'signin'}"
                >
                  Sing in
                </router-link>
              </template>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user'
      })
    },

    methods: {
      ...mapActions({
        signOUtAction: 'auth/signOut'
      }),

      signOut () {
        this.signOUtAction().then(() => {
          this.$router.replace({
            name: 'home'
          })
        })
      }
    }
  }
</script>