document.getElementById("poptavka-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    jmeno: document.getElementById("jmeno").value,
    email: document.getElementById("email").value,
    telefon: document.getElementById("telefon").value,
    zprava: document.getElementById("zprava").value
  };

  try {
    const res = await fetch("https://v5-web-production.up.railway.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    await res.json();
    alert("Odesláno ✔");

  } catch (err) {
    alert("Chyba ❌ backend nedostupný");
    console.log(err);
  }
});