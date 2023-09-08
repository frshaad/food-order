const slide = (direction: "left" | "right") => {
  const slider = document.querySelector("#slider");
  if (slider && direction === "left") {
    slider.scrollLeft -= 300;
  } else if (slider && direction === "right") {
    slider.scrollLeft += 300;
  }
};

export default slide;
