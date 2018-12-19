/* eslint-disable no-console */

import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' +
          'For more details, visit https://goo.gl/AFskqB'
      );
    },
    registered() {
      console.log('Service worker has been registered.');
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated() {
      console.log('New content is available; please refresh.');
    },
    offline() {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    }
  });
  self.addEventListener('fetch', function(event) {
    console.log('Handling fetch event for', event.request.url);

    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          console.log('Found response in cache:', response);

          return response;
        }
        console.log(
          'No response found in cache. About to fetch from network...'
        );

        return fetch(event.request)
          .then(function(response) {
            console.log('Response from network is:', response);

            return response;
          })
          .catch(function(error) {
            console.error('Fetching failed:', error);

            throw error;
          });
      })
    );
  });
}
