'use client'

import React, { useEffect, useState } from 'react'

export function Timer() {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const calculateTimeUntilSunday = () => {
            const now = new Date()
            const daysUntilSunday = 8 - now.getDay() // Calculate days until the next Sunday
            const nextSundayMidnight = new Date(now)
            nextSundayMidnight.setDate(now.getDate() + daysUntilSunday)
            nextSundayMidnight.setHours(0, 0, 0, 0)

            const timeDiff = nextSundayMidnight.getTime() - now.getTime()
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
            const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24)
            const minutes = Math.floor((timeDiff / (1000 * 60)) % 60)
            const seconds = Math.floor((timeDiff / 1000) % 60)

            return {
                days,
                hours,
                minutes,
                seconds,
            }
        }

        const timer = setInterval(() => {
            const remainingTime = calculateTimeUntilSunday()
            setTimeRemaining(remainingTime)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <p className='py-1 text-sm text-red-400'>
            Solo più{' '}
            <span className='font-semibold'>
                {timeRemaining.days} giorni {timeRemaining.hours} ore {timeRemaining.minutes}m {timeRemaining.seconds}s{' '}
            </span>
            <br />
            all'aumento dei prezzi
        </p>
    )
}
