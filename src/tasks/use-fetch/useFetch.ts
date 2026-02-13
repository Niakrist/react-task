import { useEffect, useState } from 'react'

export const useFetch = (url: string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // Борется с race conditions (гонкой запросов)
    // Запрос к /posts (медленный, 3 сек)
    // Пользователь переключил на /users (быстрый, 1 сек)
    // Ответ от /users пришел → setData(usersData)
    // Ответ от /posts пришел через 2 сек → setData(    postsData) ❌
    let ignore = false

    // Физически отменяет HTTP запрос
    // Без AbortController:
    // Запрос уходит в "никуда"
    // Браузер ждет ответа
    // Memory leak (утечка памяти)
    const controller = new AbortController()

    const fetchData = async () => {
      setLoading(true) // Начало загрузки
      setError(null) // Сбрасываем прошлую ошибку
      try {
        const response = await fetch(url, {
          signal: controller.signal // 👈 Отправляем запрос с возможностью отмены
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()

        // Сохраняем данные ТОЛЬКО если запрос не устарел
        // Запрос мог быть отменен
        // Пользователь мог уйти со страницы
        // Пришел ответ от старого запроса
        if (!ignore) {
          setData(result)
        }
      } catch (err) {
        if (!ignore) {
          if (err instanceof Error && err.name === 'AbortError') {
            // Это нормальная отмена запроса - не обрабатываем как ошибку
            return
          }

          setError(err instanceof Error ? err : new Error(String(err)))
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }
    if (url) {
      fetchData()
    }

    return () => {
      ignore = true // Помечаем запрос как устаревший
      controller.abort() // 👈 Отменяем HTTP запрос при размонтировании
    }
  }, [url])

  return { data, loading, error }
}
