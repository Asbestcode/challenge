const form = document.querySelector('[data-js="form"]');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    firstName = data.firstName;
    age = Number(data.age);
    badness = Number(data.badness);
    ageBadnessSum = age + badness;
    console.log("The age-badness-sum of "+firstName+" is "+ageBadnessSum);
})
