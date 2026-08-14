let leakDetected = false;
let usage = 0;

function generateSensorData() {

    let flow;
    let pressure;

    if (leakDetected) {
        flow = (Math.random() * 8 + 18).toFixed(2);
        pressure = (Math.random() * 0.4 + 1.0).toFixed(2);
    } else {
        flow = (Math.random() * 5 + 10).toFixed(2);
        pressure = (Math.random() * 0.3 + 1.7).toFixed(2);
    }

    usage += Number(flow) / 60;

    document.getElementById("flow").textContent =
        flow + " L/min";

    document.getElementById("pressure").textContent =
        pressure + " bar";

    document.getElementById("usage").textContent =
        usage.toFixed(1) + " L";

    checkLeak(flow, pressure);
}

function checkLeak(flow, pressure) {

    const status = document.getElementById("status");
    const alert = document.getElementById("alert");
    const leak = document.getElementById("leak");

    if (leakDetected || flow > 17 || pressure < 1.4) {

        status.textContent = "⚠ LEAK DETECTED";
        status.style.color = "red";

        alert.textContent =
            "⚠ Warning: Abnormal flow/pressure detected!";

        alert.style.color = "red";

        leak.style.display = "block";

    } else {

        status.textContent = "✓ SYSTEM NORMAL";
        status.style.color = "green";

        alert.textContent =
            "Pipeline operating normally.";

        alert.style.color = "green";

        leak.style.display = "none";
    }
}

function simulateLeak() {
    leakDetected = true;
}

function resetSystem() {
    leakDetected = false;
    usage = 0;

    document.getElementById("status").textContent =
        "✓ SYSTEM NORMAL";

    document.getElementById("status").style.color =
        "green";
}

setInterval(generateSensorData, 2000);

generateSensorData();
