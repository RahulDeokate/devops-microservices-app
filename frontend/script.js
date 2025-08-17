async function getProfile() {
  try {
    // Backend service name will be resolved by Kubernetes service DNS
const res = await fetch("http://backend-service:3000/api/profile");
    const data = await res.json();
 
    document.getElementById("result").innerHTML = `
      <h3>Profile Info</h3>
Name: ${data.name}</p>
      <p><b>Role:</b> ${data.role}</p>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = `<p style="color:red">❌ Error: ${error.message}</p>`;
  }
}
