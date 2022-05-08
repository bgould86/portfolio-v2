import React from "react";

export default function Portfolio() {
  return (
    <>
      <h2 class="mt-1p5" id="my-work">
        MY WORK
      </h2>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card grow bgc-black">
            <img src="/images/Final Screenshot.png" class="card-img-top" alt="Scott's Tots screenshot" />
            <div>
              <h2 class="card-title">Scott's Tots</h2>
              <p class="card-text">This application allows the parents of Mr. Scott Brunswig's 4th grade class at David Blaine Elementary to stay connected. Parents can interact with their child's classmates' parents and Mr. Brunswig himself!</p>

              <a href="https://project-two-threeandalady.herokuapp.com/login" target="_blank" rel="noopener noreferrer" class="my-links">
                Deployed Project
              </a>
              <a href="https://github.com/threemenandalady/project-two" target="_blank" rel="noopener noreferrer" class="my-links ml">
                Github Repo
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card grow bgc-black">
            <img src="/images/bookbuddy.png" class="card-img-top" alt="Book Buddy screenshot" />
            <div>
              <h2 class="card-title">Book Buddy</h2>
              <p class="card-text">A handy tool for book club members or anyone who wishes to search for a book by genre and filter down by number of pages.</p>

              <a href="https://highfivers.github.io/project/" target="_blank" rel="noopener noreferrer" class="my-links">
                Deployed Project
              </a>
              <a href="https://github.com/highfivers/project.git" target="_blank" rel="noopener noreferrer" class="my-links ml">
                Github Repo
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card grow bgc-black">
            <img src="/images/simpsonsquiz.png" class="card-img-top" alt="Simpsons Quiz screenshot" />
            <div>
              <h2 class="card-title">The Simpsons Quiz</h2>
              <p class="card-text">A timed quiz on the long-running, beloved animated sitcom, The Simpsons.</p>

              <a href="https://bgould86.github.io/simpsons-quiz/" target="_blank" rel="noopener noreferrer" class="my-links">
                Deployed Project
              </a>
              <a href="https://github.com/bgould86/simpsons-quiz" target="_blank" rel="noopener noreferrer" class="my-links ml">
                Github Repo
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card grow bgc-black">
            <img src="/images/weatherdash.png" class="card-img-top" alt="Weather Dashboard screenshot" />
            <div>
              <h2 class="card-title">Weather Dashboard</h2>
              <p class="card-text">Search a city and check the current weather and the five-day forecast.</p>

              <a href="https://bgould86.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer" class="my-links">
                Deployed Project
              </a>
              <a href="https://github.com/bgould86/weather-dashboard" target="_blank" rel="noopener noreferrer" class="my-links ml">
                Github Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
