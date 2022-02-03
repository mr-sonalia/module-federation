<template>
	<div class="card">
		<div class="card__header">
			<h4>Vue Card(Remote)</h4>
		</div>
		<div class="card__body">
			<form class="form" @submit.prevent="submitHander">
				<input
					ref="nameRef"
					type="text"
					name="name"
					id="name"
					placeholder="Name"
					class="form__input"
				/>
				<input
					ref="emailRef"
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					class="form__input"
				/>
				<input
					ref="phoneRef"
					type="tel"
					name="phone"
					id="phone"
					placeholder="Phone"
					class="form__input"
				/>

				<input type="submit" value="Submit" class="form__submit" />
			</form>
		</div>
		<div class="card__footer">
			<p v-if="uname && email && phone">
				Name: {{ uname }} <br />
				Email: {{ email }} <br />
				Phone: {{ phone }}
			</p>
			<p class="error" v-else>Enter values</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "VueCard",
	data() {
		return {
			uname: "",
			email: "",
			phone: null,
		};
	},
	props: {
		pName: String,
		pEmail: String,
		pPhone: Number,
	},
	components: {},
	//computed: mapGetters(['']),
	methods: {
		//...mapActions([''])
		submitHander() {
			const 
        uname = this.$refs["nameRef"].value,
				email = this.$refs["emailRef"].value,
				phone = this.$refs["phoneRef"].value;

			this.uname = uname ? uname : this.pName;
			this.email = email ? email : this.pEmail;
			this.phone = phone ? phone : this.pPhone;
		},
	},
	mounted() {},
};
</script>

<style lang="scss"></style>
