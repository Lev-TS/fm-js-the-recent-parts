function handleResponse(/* destructure here */) {
  TestCase({
    /* restructure here */
  })
}

function TestCase(data) {
  console.log(
    data.topic == "JS Recent Parts" &&
    data.format == "Live" &&
    data.slides.start === 0 &&
    data.slies.emd === 77
  ) 
}