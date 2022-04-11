import { ref } from 'vue';
export function useFetch(endpoint: string) {
  interface responseData {
    id: string;
    joke: string;
  }
  const data = ref<responseData | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string>('');

  function handleError(e: unknown) {
    let message: string;
    if (e instanceof Error) {
      message = e.message;
    } else message = String(e);
    error.value = message;
  }

  async function fetchData() {
    loading.value = true;
    try {
      const res = await fetch(endpoint, {
        headers: {
          Accept: 'application/json',
        },
      });
      if (!res.ok) throw new Error('Request Failed.');
      const json = await res.json();
      data.value = json;
      error.value = '';
    } catch (e) {
      handleError(e);
    } finally {
      loading.value = false;
    }
  }

  return { data, loading, error, fetchData };
}
