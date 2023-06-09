import googleAnalytics from '@analytics/google-analytics'
import Analytics from 'analytics'

const analytics = Analytics({
    app: 'devv-webapp',
    plugins: [
        googleAnalytics({
            measurementIds: ['G-0TJBNN58Q9'],
            debug: true,
        }),
    ],
})

export const AnalyticsEvents = {
    Enroll: 'enroll',
    PreEnroll: 'pre-enroll',
}

export default analytics
