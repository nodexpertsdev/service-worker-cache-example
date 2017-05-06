
/**
 * @desc script for registering service worker
 * @author Mukul
 */

if ('serviceWorker' in navigator) {
  // registering the service worker file
  navigator.serviceWorker.register('./service-worker.js', {
    scope: './'                                                     // optional
  }).then(function (reg) {
    console.log('Service Worker registered successfully!');
  }).catch(function (err) {
    console.log('Service Worker failed to register', err);
  });
}
