# Inkpot-web

## Prerequesites

You have two way to run this project. So that, you can choose between these: 
* install yarn using this [link](https://yarnpkg.com/en/docs/install) and follow the guide to run the development server
* install docker using this [link](https://www.docker.com/products/docker-desktop) and follow the guide to run the nginx server with docker

## Run with development server

If you have already installed yarn in your environment run the development server is really easy.

First of all let's install all dependency packages typing in the command line `yarn install`.

After that, just run `yarn start` and when you read `Compiled successfully` go to [`localhost:8080`](http://localhost:8080) and enoy :)

## Run with docker

If you prefer docker instead, first build the docker image, to do that type `docker build --tag inkpot-web .`, that can require a few minutes.

And to run the server `docker run --rm -p 8080:80 inkpot-web` you can find inkpot in [`localhost:8080`](http://localhost:8080) and enoy :)



