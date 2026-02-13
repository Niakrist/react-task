// Вынеси повторяющуюся логику в кастомный хук
// Задача: избавиться от копипасты и сделать хук useIntervalCounter.

import { useIntervalCounter } from './useIntervalCounter'

function TimerComponent() {
  const count1 = useIntervalCounter(0, 1500)
  const count2 = useIntervalCounter(3)

  return (
    <div>
      {count1} / {count2}
    </div>
  )
}
