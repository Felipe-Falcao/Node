module.exports = app => {

    app.listen(3000, app.api.initial.listen.listenPort);

    app.get("/", app.api.initial.hello.helloWorld);

}