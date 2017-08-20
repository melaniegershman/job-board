import encodeObject from "./encode-object";

export default function fetchPost(stateObj, cb) {

    const urlEncodedData = encodeObject(stateObj.data);

    let requestURL = "http://localhost:3000/api/v1/jobs/";
    let requestObj = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlEncodedData
    }

    if (stateObj.isEditing) {
        requestURL = `http://localhost:3000/api/v1/jobs/${stateObj.data.id}`;
        requestObj.method = 'PUT';
    }

    fetch(requestURL, requestObj)
        .then(response => response.json())
        .then((response) => {
            let submittedState = Object.assign({}, stateObj);
            submittedState.submitted = true;

            cb(submittedState);
        });

}
