const admin = require('firebase-admin')
var serviceAccountStg = require('./src/cred/serviceAccountKeyStg.json')

const region = {asia: 'asia-northeast1'}

const serviceAcc = admin.credential.cert(serviceAccountStg)

const initConfig = () => ({
  credential: serviceAcc,
  databaseURL: 'https://talking-app-stg-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'talking-app-stg',
  storageBucket: 'talking-app-stg.appspot.com',
})

const adm = admin.initializeApp(initConfig())
const db = adm.database()
const fdb = adm.firestore()

module.exports = {
  db,
  fdb,
  region,
}