# gcp-automl-vision-edge-with-angular

![title](https://github.com/aoyagi9936/gcp-automl-vision-edge-with-angular/blob/master/src/src/assets/images/card_title.png?raw=true, "French bulldog or Pug")

This application uses a model exported from Google Cloud Automl Vision to determine if a given image is a French bulldog or a pug.  
The classification is done in the browser and there is no communication to the server.

## Setup Local Development

``` shell
$ cd dev
$ docker-compose up app-init # setup node_modules
$ docker-compose up ng-serve
```

Access to `localhost:4200` with a brawser.

## Deploy to Google AppEngine

``` shell
$ cd dev
$ docker-compose up ng-build-prod
``

``` shell
$ cd ../
$ gcloud app deploy
$ gcloud app browse
``
