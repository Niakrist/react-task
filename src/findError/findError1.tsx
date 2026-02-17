import { useEffect, useState } from 'react'

const fetchRandomNumber = () => Promise.resolve(Math.random())

export const NumberAndScroll = () => {
  const [number, setNumber] = useState<number | null>(0)
  const scroll = useScroll()

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRandomNumber()
      setNumber(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <div className='number'> Number: {number} </div>
      <div> Scroll: {scroll} </div>
    </>
  )
}

export const useScroll = () => {
  const [scroll, setScroll] = useState<number>(window.scrollY)
  useEffect(() => {
    const handleScrollY = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScrollY)

    return () => window.removeEventListener('scroll', handleScrollY)
  }, [])

  return scroll
}
