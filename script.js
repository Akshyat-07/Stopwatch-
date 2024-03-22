const countDown = document.getElementById("countDown");
      const resetValue = document.querySelector(".resetValue");

      const startBtn = document.querySelector(".start_btn");
      const stopBtn = document.querySelector(".stop_btn");
      const resetBtn = document.querySelector(".reset_btn");
      const timeBtn = document.querySelector(".time_btn");
      const clearBtn = document.querySelector(".clear_btn");

      let time = 0;
      let interval;

      const startTimer = () => {
        interval = setInterval(() => {
          countDown.innerText = time++;
        }, 1000);
      };
      startBtn.addEventListener("click", startTimer);
      stopBtn.addEventListener("click", () => {
        clearInterval(interval);
      });

      resetBtn.addEventListener("click", () => {
        time = 0;
        countDown.innerText = time;
        clearInterval(interval);
      });

      timeBtn.addEventListener("click", () => {
        const newP = document.createElement("p");
        newP.innerText = `time stop at ${time-1}s`;
        resetValue.appendChild(newP);
      });

      clearBtn.addEventListener("click", () => {
        resetValue.innerHTML = "";
      });