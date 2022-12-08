function draw() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  // blue circle
  context.beginPath();
  context.lineWidth = 25;
  context.arc(197, 155, 50, 0, 2 * Math.PI, true); // x, t, radius, start angle, end angle, direction
  context.strokeStyle = "blue";
  context.stroke();

  // green circle
  context.beginPath();
  context.arc(197, 155, 90, 0, 2 * Math.PI, true); // x, t, radius, start angle, end angle, direction
  context.strokeStyle = "green";
  context.stroke();

  // red circle
  context.beginPath();
  context.arc(197, 155, 130, 0, 2 * Math.PI, true); // x, t, radius, start angle, end angle, direction
  context.strokeStyle = "red";
  context.stroke();

  //   white background of rectangle
  context.fillStyle = "white";
  context.fillRect(178, 150, 39, 160);

  //   black rectangle
  context.fillStyle = "black";
  context.fillRect(185, 155, 25, 150);

  // text
  context.font = "80px franklin gothic medium";
  context.fillStyle = "black";
  context.fillText("ABS-CBN", 40, 370);
}
