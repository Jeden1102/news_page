import axios from "axios";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  try {
    const query = getQuery(event);
    const response = await axios.get(
      `${runtimeConfig.public.NEWS_API_URL}/search`,
      {
        params: {
          apiKey: runtimeConfig.public.NEWS_API_KEY,
          ...query,
        },
      }
    );

    const news = response.data.news.filter((n) => n.image !== "None");
    return {
      data: news,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});
