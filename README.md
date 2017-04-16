# React Redux example.

This is the code for the tutorial you can find [here](https://dev.to/svinci/react-js-web-site-example-almost-real-life-like).

To run this project you'll need NodeJS 6 and docker.

* On one console

```
cd todo-api
npm install
docker build -t svinci/todo-api .
```

* On a second console

```
cd todo-site
npm install
npm run build
docker build -t svinci/todo-site .
```

Then run

```
docker swarm init
docker stack deploy --compose-file=compose.yml todo_stack
```

After a couple seconds, once the NGINX is up and running, you can visit `http://localhost/` to see the site fully working.
