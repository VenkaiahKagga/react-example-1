/**
 * Created by vinci on 4/14/17.
 */
import * as superagent from "superagent";

export function get() {

    return new Promise((resolve, reject) => {
        superagent.get("/todos")
            .end((error, result) => {
                error ? reject(error) : resolve(result.body);
            });
    });

}

export function add(text) {

    return new Promise((resolve, reject) => {
        superagent.post("/todos")
            .send({'text': text})
            .end((error, result) => {
                error ? reject(error) : resolve(result.body);
            });
    });

}

export function toggle(id) {

    return new Promise((resolve, reject) => {
        superagent.patch("/todos/" + id)
            .end((error, result) => {
                error ? reject(error) : resolve(result.body);
            });
    });

}