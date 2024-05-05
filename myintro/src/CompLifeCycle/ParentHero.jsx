import React from 'react'
import ErrorBoundaries from './ErrorBoundaries'
import { Hero } from './Hero'

export const ParentHero = () => {
    return (
        <div>
            <ErrorBoundaries><Hero heroName={"thor"} /></ErrorBoundaries>
                <ErrorBoundaries><Hero heroName={"spiderman"} /></ErrorBoundaries>
                <ErrorBoundaries><Hero heroName={"ironman"} /></ErrorBoundaries>
                <ErrorBoundaries><Hero heroName={"thanos"} /></ErrorBoundaries>
        </div>
    )
}
