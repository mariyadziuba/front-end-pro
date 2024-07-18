const ladder = {
    step: 0, // початкове значення обрахунку
  
    up: function () {
      this.step++; // збільшуємо значення обрахунку на 1/ this - дорівнює нулю, оскільки він посилається на обєкт, в 
      return this; // Повертаємо значення об'єкту ladder, , що дозволяє викликати інші методи цього об'єкта в ланцюжку
    },
  
    down: function () {
      this.step--; // зменшуємо значення обрахунку на 1
      return this; 
    },
  
    showStep: function () {
      console.log(this.step); // показує поточне значення
      return this; //  
    }
  };
