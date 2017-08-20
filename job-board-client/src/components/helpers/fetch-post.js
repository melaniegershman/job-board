import encodeObject from "./encode-object";

export default function fetchPost(stateObj, cb) {

    const urlEncodedData = encodeObject(stateObj);

    fetch('http://localhost:3000/api/v1/jobs', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlEncodedData
    })
    .then(response => response.json())
    .then((response) => {
        let submittedState = Object.assign({}, stateObj);
        submittedState.submitted = true;

        cb(submittedState);
    });

}
