import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/AuthStore'

export function useAuth() {
    const { handleSubmit, isSubmitting, submitCount } = useForm()
    const router = useRouter()
    const authStore = useAuthStore()
    const MIN_PASS = 6
    const isErrorEmail = ref(false)
    const isErrorPass = ref(false)
    const isErrAuth = computed(() => authStore.getErrAuth);

    const { value: email, errorMessage: errorEmail } = useField(
        'email',
        yup
            .string()
            .trim()
            .email('the email address is entered incorrectly')
            .required('fill in this field')
    )
    const { value: pass, errorMessage: errorPass } = useField(
        'password',
        yup
            .string()
            .trim()
            .required('fill in this field')
            .min(MIN_PASS, `the password must be at least ${MIN_PASS} characters long`)
    )

    const onSubmit = handleSubmit(async (values) => {
        try {
            await authStore.login(values)
            router.push('/')
        } catch (e) { }
    })

    watch(submitCount, (newValue) => {
        if (newValue > 0) {
            isErrorEmail.value = true
            isErrorPass.value = true
        }
    })

    watch([email, pass], ([newEmail, newPass], [oldEmail, oldPass]) => {
        submitCount.value = 0;

        isErrorEmail.value = newEmail !== oldEmail ? false : isErrorEmail.value;
        isErrorPass.value = newPass !== oldPass ? false : isErrorPass.value;
    });

    return {
        email,
        errorEmail: computed(() => isErrorEmail.value ? (errorEmail.value || isErrAuth.value) : ''),
        pass,
        errorPass: computed(() => isErrorPass.value ? (errorPass.value || isErrAuth.value) : ''),
        isSubmitting,
        onSubmit,
    }
}
