export class BaseLogger {
    log(data) {
        console.log("Default logger: " + data)
    }
}

export class ElasticLogger extends BaseLogger {
    //Ezdigimiz icin bunun icerisindeki log fonksiyonu gecerli olacaktir.
    log(data) {
        console.log("Logged to Elastic: " + data)
    }
}

export class MongoLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Mongo: " + data)
    }
}