        'use strict';

        self.addEventListener('push', function (event) {

            const notificationObject = JSON.parse(event.data.text());
            const title = notificationObject.title;
            const options = {
                body: notificationObject.msg,
                icon: notificationObject.icon,
                image: notificationObject.image,
                url:notificationObject.url,
                tag: notificationObject.tag,
                renotify: true,
                  data: notificationObject.url
            };

             event.data.url = notificationObject.url;
            self.id_envio = notificationObject.id_envio;
            self.notificationURL = notificationObject.url;
            event.waitUntil(self.registration.showNotification(title, options));
        });

            self.addEventListener('notificationclick', function(event) {

              var notification = event.notification;

              var action = event.action;

              if (action === 'close')
              {

                notification.close();
              }
              else
              {
                  clients.openWindow(event.notification.data);
                  notification.close();
              }
        });

        self.addEventListener('notificationclose', function(e) {
          var notification = e.notification;
        });
}
