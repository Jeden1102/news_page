import { defineStore } from "pinia";
import axios from "axios";
export const useWeatherStore = defineStore("weather", {
    state: () => {
        return { recent: null as any };
    },
    actions: {
        async getWeather(city: string, current: boolean = true) {
            const coords = (await axios.get(`/api/geocode?q=${city}`)) as any;
            const response = (await axios.get(
                `/api/weather?lat=${coords.data.lat}&lon=${
                    coords.data.lng
                }&type=${current ? "weather" : "forecast"}&units=metric`
            )) as any;
            return response.data.data;
        },
    },
});
