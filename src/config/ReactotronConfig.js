import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux' // Apenas em caso de estar utilizando o REDUX

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux()) // Apenas em caso de estar utilizando o REDUX
    .connect()
  tron.clear()
  console.tron = tron
}
