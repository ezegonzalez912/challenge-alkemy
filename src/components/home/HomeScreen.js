import React from 'react'
import { MyTeam } from './MyTeam'
import { StatsTeam } from './StatsTeam'

export const HomeScreen = () => {
    
    return (
        <div className="home_screen">
            <MyTeam />
            <StatsTeam />
        </div>
    )
}
