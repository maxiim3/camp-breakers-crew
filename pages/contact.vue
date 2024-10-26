<template>
	<VLayout with-navigation>
		<h1>{{ $t("Contact us") }}</h1>
		<TextElement
		small
		:content="
				$t(
					'Get involved! Whether you have innovative ideas to share, questions about our services, or want to contribute to our community, we would love to hear from you.'
				)
			" />
		<p>
			{{
				$t(
					"Reach out to us through our contact form below or via email. Your input helps us grow and improve our services for everyone."
				)
			}}
		</p>
		<form @submit.prevent="onSubmit">
			<div class="p-fluid grid">
				<div class="field col-12">
					<label>{{ $t("Name") }}</label>
					<PrimeInputText
						v-model="form.name"
						:class="{'p-invalid': errors.name}" />
					<small
						class="p-error"
						v-if="errors.name"
						>{{ errors.name }}</small
					>
				</div>
				<div class="field col-12">
					<label>{{ $t("Email") }}</label>
					<PrimeInputText
						v-model="form.email"
						type="email"
						:class="{'p-invalid': errors.email}" />
					<small
						class="p-error"
						v-if="errors.email"
						>{{ errors.email }}</small
					>
				</div>
				<div class="field col-12">
					<label>{{ $t("Message") }}</label>
					<PrimeTextarea
						v-model="form.message"
						rows="5"
						:class="{'p-invalid': errors.message}" />
					<small
						class="p-error"
						v-if="errors.message"
						>{{ errors.message }}</small
					>
				</div>
				<div class="field col-12">
					<PrimeButton
						:label="$t('Send Message')"
						type="submit" />
				</div>
			</div>
		</form>
	</VLayout>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue"
import {string, pipe, object, minLength, email, safeParse, type InferInput} from "valibot"

const ContactSchema = object({
	name: pipe(string(), minLength(1, "Name is required")),
	email: pipe(string(), email("Invalid email address")),
	message: pipe(string(), minLength(1, "Message is required")),
})

type ContactForm = InferInput<typeof ContactSchema>

const form = reactive<ContactForm>({
	name: "",
	email: "",
	message: "",
})

const errors = ref({
	name: "",
	email: "",
	message: "",
})

const onSubmit = () => {
	const validatedForm = safeParse(ContactSchema, form)
	if (!validatedForm.success) {
		validatedForm.issues.forEach(issue => {
			const path = issue.path?.[0].key as keyof typeof errors.value
			if (path) {
				errors.value[path] = issue.message
			}
		})
		return
	}
	console.log(validatedForm)
	// Handle form submission
}
</script>

<style scoped></style>
