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
          <router-link class="navbar-item"
            :to="{name: 'dashboard'}"
          >
            Admino Bosso
          </router-link>
          <router-link class="navbar-item"
            :to="{name: 'dashboard'}"
          >
            Dashboard
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                <strong>Sign out</strong>
              </a>
              <router-link class="button is-light"
                 :to="{name: 'signin'}"
              >
                Sing in
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>
