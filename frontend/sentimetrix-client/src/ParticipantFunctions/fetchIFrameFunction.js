import React, { useState } from "react";

async function fetchIframe(interviewId) {
    // let iframe =  await fetch(`http://localhost:5000/v1/interview/iframe/2d44aacc-7084-11ee-ad6c-f218989b53bf.json`)
    // .then((resp) => {return resp.text()})

    // return '<iframe width="560" height="315" src="https://www.youtube.com/embed/EI8eNjJnEJM?si=d6ETuu9oSjfFCN8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    return '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FXFY1YW3jF9FwXLk7s0SL3p%2FSentimetrix%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddev" allowfullscreen></iframe>'
}

export {fetchIframe};