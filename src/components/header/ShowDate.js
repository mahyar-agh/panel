import React, { useState, useEffect } from "react";

const ShowDate = () => {
  const now = new Date();

  const [, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // International date
  const [year, month, day, weekDay] = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })
    .formatToParts(now)
    .filter((item) => item.type !== "literal")
    .map((item) => item.value);

  // making time string
  const time = `امروز ${weekDay} ${day} ${month} ماه سال ${year}،ساعت ${now.getHours()}:${
    now.getMinutes() < 10
      ? String(now.getMinutes()).padStart(2, "0")
      : now.getMinutes()
  }`;

  // return
  return <div style={{ fontSize: "0.8rem", color: "#b2b2b2" }}>{time}</div>;
};
export default ShowDate;
