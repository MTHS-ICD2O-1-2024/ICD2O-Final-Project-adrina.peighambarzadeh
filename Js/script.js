const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");

const options = ["Yes", "Maybe", "No"];
const data = [1, 1, 1]; // equal slices
const colors = ["#4CAF50", "#FF9800", "#F44336"]; // green, orange, red

// Each segment is 120 degrees
const rotationRanges = [
  { minDegree: 0, maxDegree: 119, value: "Yes" },
  { minDegree: 120, maxDegree: 239, value: "Maybe" },
  { minDegree: 240, maxDegree: 359, value: "No" },
];

// Initialize Chart.js pie chart
let myChart = new Chart(wheel, {
  plugins: [ChartDataLabels],
  type: "pie",
  data: {
    labels: options,
    datasets: [{
      data: data,
      backgroundColor: colors,
      borderWidth: 2,
      borderColor: "#ffffff",
    }],
  },
  options: {
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: {
        color: "#fff",
        font: { size: 24, weight: "bold" },
        formatter: (value, ctx) => ctx.chart.data.labels[ctx.dataIndex],
      },
    },
  },
});

function getResult(degree) {
  degree = degree % 360; // Normalize angle
  for (let range of rotationRanges) {
    if (degree >= range.minDegree && degree <= range.maxDegree) {
      return range.value;
    }
  }
  return null;
}

spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  finalValue.textContent = "Spinning...";

  const randomDegree = Math.floor(Math.random() * 360);
  const spins = Math.floor(Math.random() * 10) + 5; // 5 to 14 spins
  const totalRotation = spins * 360 + randomDegree;

  wheel.style.transition = "transform 5s ease-out";
  wheel.style.transform = `rotate(${totalRotation}deg)`;

  wheel.addEventListener("transitionend", () => {
    const selected = getResult(randomDegree);
    finalValue.textContent = `Result: ${selected}`;
    spinBtn.disabled = false;
    wheel.style.transition = "";
  }, { once: true });
});
