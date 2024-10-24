<template>
    <body data-spy="scroll" data-target="#rock-navigation">
	<!-- START NAVIGATION -->
<div class="navbar navbar-default bs-dos-nav navbar-fixed-top sticky-navigation" role="navigation">
		<div class="container">

			<div class="navbar-header">
				<button class="navbar-toggle" data-toggle="collapse" data-target="#rock-navigation">
					<span class="icon icon-bar"></span>
					<span class="icon icon-bar"></span>
					<span class="icon icon-bar"></span>
				</button>
				<a href="#" class="navbar-brand">Ultra Profile</a>
			</div>
			<nav class="collapse navbar-collapse" id="rock-navigation">
				<ul class="nav navbar-nav navbar-right main-navigation text-uppercase">
					<li><router-link to="/dashboard" class="smoothScroll">Home</router-link></li>
                    <li><router-link to="/mywork" class="smoothScroll">My Work</router-link></li>
					<li><router-link to="/portfolio_showcase" class="smoothScroll">Portfolio</router-link></li>
					<li><a href="#about" class="smoothScroll">About</a></li>
					<li><router-link to="/contact" class="smoothScroll">Contact</router-link></li>
                    <li>
                        <a href="#" @click.prevent="logout">Logout</a>
                    </li>
				</ul>
			</nav>

		</div>
	</div>
	<!-- END NAVIGATION -->
     </body>
</template>


<script>
export default {
  data() {
    return {
      isLoggedIn: localStorage.getItem('isLoggedIn') === 'true'
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('isLoggedIn');
      this.$router.push('/');
      this.isLoggedIn = false;
    }
  }
};
</script>

<style scoped>
/* Navbar styles */
</style>