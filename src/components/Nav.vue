<template>
    <!--Main Navigation-->
<header class="">
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-info scrolling-navbar">
    <div class="container">
        <a class="navbar-brand" href="#"><strong>TTG</strong></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Cart"><i class="fas fa-shopping-cart"></i><span class="badge rounded-pill bg-danger ms-2">{{this.$root.cart.length}}</span></router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Opinions</a>
        </li>
      </ul>
      <ul v-if="!$root.auth" class="navbar-nav nav-flex-icons">
        <li class="nav-item">
          <a class="nav-link">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Sign Up</a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link"><i class="fab fa-facebook-f"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><i class="fab fa-twitter"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><i class="fab fa-instagram"></i></a>
        </li> -->
      </ul>
    </div>
    </div>
  </nav>

</header>
<!--Main Navigation-->
</template>
<script>
export default {
    name:'Nav',
}
</script>