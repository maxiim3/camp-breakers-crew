import {useI18n} from "vue-i18n"

export function useLang() {
	const {locale, t} = useI18n()

	function switchLang(lang: "fr" | "en") {
		locale.value = lang
	}

	return {
		t,
		locale,
		switchLang,
	}
}
