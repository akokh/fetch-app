import React, { Component } from "react";
import { render } from "react-dom";

export default  async function Fetch() {
    console.log("5")
    await fetch('https://example.com/does-not-exist')
        .then(function (response) {
            // When the page is loaded convert it to text
            return response.text()
            console.log("9")
        })
        .then(function (html) {
            // Initialize the DOM parser
            var parser = new DOMParser();

            // Parse the text
            var doc = parser.parseFromString(html, "text/html");

            // You can now even select part of that html as you would in the regular DOM
            // Example:
            // var docArticle = doc.querySelector('article').innerHTML;

            console.log(doc);
        })
        .catch(function (err) {
            console.log('Failed to fetch page: ',err);
        });

    // fetch('https://gomakethings.com/about/').then(function (response) {
    //     // The API call was successful!
    //     return response.text();
    // }).then(function (html) {
    //     // This is the HTML from our response as a text string
    //     console.log(html);
    // }).catch(function (err) {
    //     // There was an error
    //     console.warn('Something went wrong.', err);
    // });

}
