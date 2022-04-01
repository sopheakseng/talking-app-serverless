const functions = require('firebase-functions')
const {fdb} = require('../../admin')

const friendFollow = functions.firestore
    .document('friends/{docId}')
    .onCreate( async (snap, context) => {
      const newValue = snap.data()

      try {
        const follow = fdb.collection('follow').doc()

        const param = {
          newValue,
          follow: true,
          context,
        }

        await follow.set(param)
      } catch (err) {
        console.error(err)
      }
    })

module.exports = {
  friendFollow,
}