// import Toastify from 'toastify-js'
// import 'toastify-js/src/toastify.css'

// export const showToast = (
//   message,
//   duration = 3000,
//   backgroundColor = 'linear-gradient(to right, #00b09b, #96c93d)',
// ) => {
//   Toastify({
//     text: message,
//     duration: duration,
//     close: true,
//     gravity: 'top', // 'top' or 'bottom'
//     position: 'right', // 'left', 'center', 'right'
//     // backgroundColor: backgroundColor,
//   }).showToast()
// }

import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export const showToast = (message, duration = 3000, backgroundColor = '#4CAF50') => {
  Toastify({
    text: message,
    duration: duration,
    close: true,
    gravity: 'top',
    position: 'right',
    backgroundColor: backgroundColor,
    stopOnFocus: true,
    className: 'toast-notification',
  }).showToast()
}
