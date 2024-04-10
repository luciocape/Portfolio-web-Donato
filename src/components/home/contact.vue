<template>
	<form action="" method="POST" class="d-flex flex-column justify-content-center">
		<div v-for="(item, index) in inputs" :key="index" class="inputs">
			<label :for="item.for" class="form-label text-info lead">{{
				item.label
			}}</label>
			<input
				v-if="item.id != 'message'"
				:type="item.type"
				class="form-control form-controls mb-4 rounded-0"
				:name="item.id"
				:id="item.id"
				:placeholder="item.placeholder"
			/>
			<textarea
				v-else
				class="form-control form-controls mb-2 rounded-0"
				:name="item.id"
				:id="item.id"
				:placeholder="item.placeholder"
				style="max-height: 120px"
			></textarea>
		</div>
		<input type="submit" class="btn btn-primary w-100 send rounded-0" style="width: 150px" />

		<input type="hidden" name="_next" value="" />
	</form>
</template>
<script setup>
name: "contact";
const inputs = [
	{
		id: "name",
		for: "name",
		placeholder: "Juan Perez",
		label: "Tu nombre",
		type: "text",
	},
	{
		id: "email",
		for: "email",
		placeholder: "juanperez@gmail.com",
		label: "Tu correo electronico",
		type: "email",
	},
	{
		id: "message",
		for: "message",
		placeholder: "Hola, me gustaria saber...",
		label: "Tu mensaje",
	},
];
const label = "Formulario";
</script>

<style scoped lang="scss">
form {
	input {
		min-height: 60px;
	}
    textarea{
        min-height: 120px;
    }
    .send{
        height: 65px;
    }
}
</style>
