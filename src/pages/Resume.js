import React from "react";

export default function Resume() {
  return (
    <>
      <h2>SKILLS</h2>
      <ul>
        <li>Computer Science Applied to JavaScript</li>
        <li>Databases (MySQL, MongoDB)</li>
        <li>DServer Side Development (MERN Stack)</li>
        <li>Browser Based Technologies (HTML, CSS, JavaScript, jQuery, Bootstrap, Progressive Web Applications)</li>
        <li>Deployment and Delivery (Heroku, Git, GitHub Pages)</li>
        <li>API Design (Client-Server Model, API, Rest, JSON, AJAX, HTTP request methods, GraphQL)</li>
        <li>Quality Assurance (Unit Testing, Linting, Continuous Integration)</li>
        <li>Other Skills of Note (Adobe Creative Suite, Strong Professional Writing and Communication, Presentations)</li>
      </ul>

      <p>
        You may view my full resume{" "}
        <a href="/public/images/resume.pdf" target="_blank" rel="noopener noreferrer" class="my-link">
          here.
        </a>
      </p>
    </>
  );
}
