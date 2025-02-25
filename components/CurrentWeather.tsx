"use client";

import { useState, useEffect } from "react";

function capitalizeFirstLetter(str: string) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

type Res = {
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
};

export default function CurrentWeather({
  lat,
  long,
}: {
  lat: number;
  long: number;
}) {
  const [data, setData] = useState<Res>();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${String(
        process.env.NEXT_PUBLIC_WEATHER_APIKEY
      )}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="sm:mx-auto lg:mx-0 mt-3 sm:mt-5 md:mt-5 sm:max-w-xl text-gray-500 text-base sm:text-lg md:text-xl">
      Manila Weather:{" "}
      {capitalizeFirstLetter(String(data?.weather?.[0]?.description ?? "-"))}
    </div>
  );
}
