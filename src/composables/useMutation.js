import { ref } from 'vue'

export const useMutatuion = ({ mutationFn, onSuccess, onError }) => {
  const data = ref()
  const isLoading = ref(false)
  const error = ref(null)

  const mutation = async (...args) => {
    isLoading.value = true
    try {
      error.value = null
      //   data.value = await mutationFn(...args)
      onSuccess?.(data)
    } catch (e) {
      error.value = e
      onError?.(error)
    } finally {
      isLoading.value = true
    }
  }

  return {
    data,
    isLoading,
    error,
    mutation
  }
}
