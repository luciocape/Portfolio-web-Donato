<template>
	<form action="https://formsubmit.co/doninfantino@gmail.com" method="POST"
		class="d-flex flex-column justify-content-center">
		<div v-for="(item, index) in inputs" :key="index" class="inputs">
			<label :for="item.for" class="form-label text-info lead">
				{{ $t("Contact." + item.label + ".label") }}
			</label>
			<input v-if="item.id != 'message'" :autocomplete="item.autocomplete" :type="item.type"
				class="form-control form-controls mb-4 rounded-0 lead" :name="item.id" :id="item.id"
				:placeholder="item.placeholder" />
			<textarea v-else class="form-control form-controls mb-2 rounded-0 lead" :name="item.id" :id="item.id"
				:placeholder="$t('Contact.' + item.label + '.placeholder')" style="height: 120px; resize: none;"></textarea>
		</div>
		<input type="submit" :value="$t('Contact.send')" class="btn btn-secondary w-100 send rounded-0 lead" style="width: 150px"/>

		<input type="hidden" name="_next" value="https://donatoinfantino.com/" />
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
		label: "input1",
		type: "text",
	},
	{
		id: "email",
		autocomplete: "family-name",
		for: "email",
		placeholder: "juanperez@gmail.com",
		label: "input2",
		type: "email",
	},
	{
		id: "message",
		autocomplete: "off",
		for: "message",
		label: "input3",
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
		border: 1px solid;
	}

	.form-control:hover {
		box-shadow: 0px 0px 20px -5.5px var(--shadow-rgb);
	}

}
</style>
