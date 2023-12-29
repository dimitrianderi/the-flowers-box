import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/AuthStore'

export function useReg() {
    const { handleSubmit, isSubmitting, submitCount } = useForm()
    const router = useRouter()
    const authStore = useAuthStore()
    const MIN_PASS = 6
    const MAX_NAME = 12
    const isErrorEmail = ref(false)
    const isErrorPass = ref(false)
    const isErrorName = ref(false)
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
    const { value: name, errorMessage: errorName } = useField(
        'name',
        yup
            .string()
            .trim()
            .required('fill in this field')
            .max(MAX_NAME, `the name must be no more than ${MAX_NAME} characters`)
    )

    const onSubmit = handleSubmit(async (values) => {
        try {
            await authStore.reg(values)
            router.push('/')
        } catch (e) { }
    })

    watch(submitCount, (newValue) => {
        if (newValue > 0) {
            isErrorEmail.value = true
            isErrorPass.value = true
            isErrorName.value = true
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
        name,
        errorName: computed(() => isErrorName.value ? (errorName.value || isErrAuth.value) : ''),
        isSubmitting,
        onSubmit,
    }
}
