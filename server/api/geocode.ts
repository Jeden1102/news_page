import axios from "axios";

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    try {
        const query = getQuery(event);
        const response = await axios.get(
            `${runtimeConfig.public.WEATHER_API_URL}/geo/1.0/direct`,
            {
                params: {
                    appid: runtimeConfig.public.WEATHER_API_KEY,
                    ...query,
                },
            }
        );
        const coords = { lat: response.data[0].lat, lng: response.data[0].lon };
        return coords;
    } catch (error) {
        return {
            error: error.message,
        };
    }
});
