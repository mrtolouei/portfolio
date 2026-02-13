import type { Command } from "~/types/command"
import type { CommandContext } from "~/types/commandContext"

export const weather: Command = {
    name: "weather",
    description: "Show current weather for your location",
    execute: async (_args, ctx: CommandContext) => {
        try {
            ctx.addOutput("Fetching weather for your location…")
            const geoRes = await fetch("https://ipapi.co/json/")
            if (!geoRes.ok) throw new Error("Failed to get location info")
            const geoData = await geoRes.json()
            const lat = geoData.latitude
            const lon = geoData.longitude
            const city = geoData.city
            const region = geoData.region
            const country = geoData.country_name

            if (!lat || !lon) throw new Error("Location coordinates not available")

            const weatherRes = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
            )
            if (!weatherRes.ok) throw new Error("Failed to fetch weather info")
            const weatherData = await weatherRes.json()

            const cw = weatherData.current_weather
            if (!cw) throw new Error("Current weather data unavailable")
            ctx.addOutput(`
Location: ${city}, ${region}, ${country}
Temperature: ${cw.temperature}°C
Wind Speed: ${cw.windspeed} km/h
Weather Code: ${cw.weathercode} 
Time: ${cw.time}
      `)
        } catch (err: any) {
            ctx.addOutput(`❌ Unable to fetch weather: ${err.message || err}`)
        }
    },
}
