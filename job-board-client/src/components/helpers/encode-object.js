// Takes an object and returns a x-www-form-urlencoded string
export default function encodeObject(object) {
    var formBody = [];

    for (var property in object) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(object[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");

    return formBody;
}
