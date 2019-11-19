import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux' // Apenas em caso de estar utilizando o REDUX
import sagaPlugin from 'reactotron-redux-saga'

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux()) // Apenas em caso de estar utilizando o REDUX
    .use(sagaPlugin())
    .connect()
  tron.clear()
  console.tron = tron
}
