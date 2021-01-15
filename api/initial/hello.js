module.exports = app => {

    const helloWorld = (req, res) => {
        res.send("Hello People");
    }

    return { helloWorld };
}