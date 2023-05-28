export const useCFetch = (url, options) => {
  const runtimeConfig = useRuntimeConfig()
  useFetch(url, {baseURL:runtimeConfig.public.baseUrl, ...options})
}