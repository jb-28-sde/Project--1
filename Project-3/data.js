document
  .getElementById("toggleSidebar")
  .addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle("show");
  });

/* ================= Utilization Line Chart ================= */

const ctx = document.getElementById("utilChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["May", "June", "July", "Aug", "Sept", "Oct"],
    datasets: [
      {
        label: "Overall Utilization",
        data: [62, 68, 78, 95, 48, 84],
        tension: 0.45,
        fill: true,
        backgroundColor: "rgba(13,110,253,0.12)",
        borderColor: "rgba(13,110,253,0.9)",
        pointBackgroundColor: "#0d6efd",
        pointRadius: 5,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
    scales: {
      y: {
        min: 40,
        max: 100,
      },
    },
  },
});

/* ================= Bar Chart ================= */

const barCtx = document.getElementById("reportBar");

new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["Payments", "Analytics", "Infra", "AI", "CRM"],
    datasets: [
      {
        label: "Project Efficiency (%)",
        data: [60, 89, 88, 87, 76],
        backgroundColor: "rgba(13,110,253,0.75)",
        borderRadius: 10,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true, max: 100 },
    },
  },
});

/* ================= Doughnut Chart ================= */

const pieCtx = document.getElementById("reportPie");

new Chart(pieCtx, {
  type: "doughnut",
  data: {
    labels: ["Front-end", "Backend", "Data Science", "QA", "DevOps"],
    datasets: [
      {
        data: [20, 30, 40, 24, 10],
        backgroundColor: [
          "#0d6efd",
          "#198754",
          "#ffc107",
          "#dc3545",
          "#6610f2",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    plugins: {
      legend: { position: "bottom" },
    },
  },
});
