import axios from "axios";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  try {
    const response = await axios.get(
      `${runtimeConfig.public.NEWS_API_URL}/latest-news`,
      {
        params: {
          apiKey: runtimeConfig.public.NEWS_API_KEY,
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
