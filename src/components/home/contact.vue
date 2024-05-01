<template>
	<form action="" method="POST" class="d-flex flex-column justify-content-center">
		<div v-for="(item, index) in inputs" :key="index" class="inputs">
			<label :for="item.for" class="form-label text-info lead">{{
			item.label
		}}</label>
			<input v-if="item.id != 'message'" :autocomplete="item.autocomplete" :type="item.type"
				class="form-control form-controls mb-4 rounded-0" :name="item.id" :id="item.id"
				:placeholder="item.placeholder" />
			<textarea v-else class="form-control form-controls mb-2 rounded-0" :name="item.id" :id="item.id"
				:placeholder="item.placeholder" style="height: 120px; resize: none;"></textarea>
		</div>
		<input type="submit" class="btn btn-secondary w-100 send rounded-0" style="width: 150px" />

		<input type="hidden" name="_next" value="" />
	</form>
</template>
<script setup>
name: "contact";
const inputs = [
	{
		id: "name",
		autocomplete: 'given-name',
		for: "name",
		placeholder: "Juan Perez",
		label: "Tu nombre",
		type: "text",
	},
	{
		id: "email",
		autocomplete: "family-name",
		for: "email",
		placeholder: "juanperez@gmail.com",
		label: "Tu correo electronico",
		type: "email",
	},
	{
		id: "message",
		autocomplete: "off",
		for: "message",
		placeholder: "Hola, me gustaria saber...",
		label: "Tu mensaje",
	},
];
const label = "Formulario";
</script>

<style scoped lang="scss">
@import '../../assets/bootstrap-custom.scss';
form {
	.inputs label:nth-child(1) {
		margin-top: 0 !important;
	}

	input {
		min-height: 60px;
	}

	textarea {
		min-height: 120px;
	}

	.send {
		height: 65px;
		transition: 500ms;
	}

	.send:hover {
		background: linear-gradient(90deg, #0a254d9d 0%, #0dcaf0 120%);
		animation: buttonHover 2s alternate infinite;
	}

	.form-control {
		transition: 350ms;
		background-color: var(--form-input-rgb) !important;
		border: 1px solid ;
	}

	.form-control:hover {
		box-shadow: 0px 0px 20px -5.5px var(--shadow-rgb);
	}

}
</style>
