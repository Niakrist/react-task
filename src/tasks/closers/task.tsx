import { useEffect, useState } from 'react'

// Ошибка из-за замыкания
function Timer() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setCount(count + 1) //  Ошибка замыкания!
    }, 1000)
  }, []) // Зависимости пустые, count из первого рендера навсегда в замыкании
  return <div>{count}</div>
}

// В этом ошибочном варианте:
// useEffect запускается один раз
// В замыкание setInterval попадает count = 0 из первого рендера
// Каждую секунду вызывается setCount(0 + 1), поэтому значение всегда будет 1

// Правильные способы исправления:
// setCount(prev => prev + 1)
// }, [count
// функция очистки
