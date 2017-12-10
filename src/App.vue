<template>
	<div class="app">
		Enter your name <input v-model="name" /><br>
		Choose the lang 
		<select v-model="lang">
			<option value="en">en</option>
			<option value="zh">zh</option>
		</select>
		<hr/>
		<!-- $i is an alias to $inter.get -->
		{{ $i('welcome.simple', {name}) }}
		<hr/>
		{{ $i('welcome.weather', {name}) }}
	</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name: 'egoist',
			lang: 'en'
    }
  },
	watch: {
		lang(lang) {
			this.$inter.setLocale(lang)
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>