# fedes webapp

built using [ghost](https://ghost.org)

## setting up

```
$ npm install
$ npm install -g gulp
```

### seeding DB

requirements: ruby 2+

```
$ bundle install --without staging production
$ ./seed.rb
```

## development

```
$ gulp
```

## Deployment

```
$ ./deploy.bash production
```
