export const useCFetch = (url, options) => {
  const runtimeConfig = useRuntimeConfig()
  return useFetch(url, {baseURL:runtimeConfig.public.baseURL, ...options})
}