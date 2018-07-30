import React from "react";
import { Card, Flex, WhiteSpace } from "antd-mobile";

const Weather = weather => {
  return (
    <div>
      <Card full>
        <Card.Header
          title={weather.city_name}
          extra={<span>{weather.date}</span>}
        />
        <Card.Body>
          <Flex style={{ textAlign: "center" }}>
            <Flex.Item>{weather.temperature}°C</Flex.Item>
            <Flex.Item>{weather.wind_direction}</Flex.Item>
            <Flex.Item>{weather.hurricane}</Flex.Item>
          </Flex>
        </Card.Body>
        <Card.Footer
          content={weather.climate}
          extra={<div>{weather.humidity}</div>}
        />
      </Card>
      <WhiteSpace size="md" />
    </div>
  );
};
export default Weather;

// "city_name": "地球",
// "date": "2017-01-08",
// "temperature": "-275",
// "humidity": "120",
// "climate": "对流层",
// "wind_direction": "一阵妖风",
// "hurricane": "36级",
