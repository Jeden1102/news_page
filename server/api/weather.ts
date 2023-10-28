import axios from "axios";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  try {
    const query = getQuery(event);
    const response = await axios.get(
      `${runtimeConfig.public.WEATHER_API_URL}/data/2.5/${query.type}`,
      {
        params: {
          appid: runtimeConfig.public.WEATHER_API_KEY,
          ...query,
        },
      }
    );
    return {
      data: response.data,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});
