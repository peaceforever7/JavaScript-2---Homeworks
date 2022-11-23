const convert = (elem, target1, target2, currency) => {
  elem.addEventListener("input", () => {
      const request = new XMLHttpRequest();
      request.open("GET", "data.json");
      request.setRequestHeader("Content-type", "application/json");
      request.send();
      request.addEventListener("load", () => {
          const response = JSON.parse(request.response);
          if (currency === "som") {
              target1.value = (elem.value / response.usd).toFixed(2);
              target2.value = (elem.value / response.rmb).toFixed(2);
          } else if (currency === "usd") {
              target1.value = (elem.value * response.usd).toFixed(2);
              target2.value = (elem.value * response.usd / response.rmb).toFixed(2);
          } else if (currency === "rmb") {
              target1.value = (elem.value * response.rmb / response.usd).toFixed(2);
              target2.value = (elem.value * response.rmb).toFixed(2);
          }
          elem.value === "" ? (target1.value = "") || (target2.value = "") : null;
      });
  });
};
convert(som, usd, rmb, "som")
convert(usd, som, rmb, "usd")
convert(rmb, usd, som, "rmb")