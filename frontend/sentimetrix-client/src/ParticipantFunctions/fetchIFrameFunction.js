import React, { useState } from "react";

async function fetchIframe(interviewId) {
    // let iframe =  await fetch(`http://localhost:5000/v1/interview/iframe/2d44aacc-7084-11ee-ad6c-f218989b53bf.json`)
    // .then((resp) => {return resp.text()})

    return '<iframe width="560" height="315" src="https://www.youtube.com/embed/EI8eNjJnEJM?si=d6ETuu9oSjfFCN8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
}

export {fetchIframe};