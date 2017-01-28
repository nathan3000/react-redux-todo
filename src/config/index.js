import devConfig from './config.dev'
import testConfig from './config.test'

const config = function() {
    switch(process.env.NODE_ENV){
        case 'development':
            return devConfig
        case 'test':
            return testConfig
        default:
            return devConfig
    }
}

export default config()
