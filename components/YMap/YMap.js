'use client'
import { useEffect, useRef } from 'react';

const YMap = ({ coordinates = [55.323664, 86.152559] }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const placemarkRef = useRef(null);

  useEffect(() => {
    // Проверяем, загружен ли уже API
    if (window.ymaps) {
      initMap();
      return;
    }

    // Загружаем API только если его нет
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=35e69fa1-b8ab-4812-b2ff-bcb4f27cc874&lang=ru_RU';
    script.async = true;

    script.onload = () => {
      window.ymaps.ready(initMap);
    };

    document.body.appendChild(script);

    return () => {
      // Удаляем скрипт только если мы его добавляли
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      // Уничтожаем карту при размонтировании
      if (mapInstance.current) {
        mapInstance.current.destroy();
      }
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current || !window.ymaps) return;

    // Создаем карту, если ее еще нет
    if (!mapInstance.current) {
      mapInstance.current = new window.ymaps.Map(mapRef.current, {
        center: coordinates,
        zoom: 13,
      });
    }

    // Удаляем старую метку, если есть
    if (placemarkRef.current) {
      mapInstance.current.geoObjects.remove(placemarkRef.current);
    }

    // Создаем новую метку
    placemarkRef.current = new window.ymaps.Placemark(
      coordinates,
      {
        hintContent: 'АВАЛЬ',
        balloonContent: 'Описание места',
      },
      {
        preset: 'islands#redDotIcon',
      }
    );

    // Добавляем метку на карту
    mapInstance.current.geoObjects.add(placemarkRef.current);
    // Центрируем карту на метке
    mapInstance.current.setCenter(coordinates);
  };

  // Обновляем карту при изменении координат
  useEffect(() => {
    if (window.ymaps && mapInstance.current) {
      initMap();
    }
  }, [coordinates]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default YMap;