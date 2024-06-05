import { handleSwitchTheme } from "../utils/themes/handleSwitchTheme.js"

const abdullah = {
    "firstName": 'Abdullah', // string
    lastName: `Waheed`, //string
    age: 18, // number
    isWearGlasses: false, // boolean
    // object within an object
    address: {
        country: `pakistan`,
        city: `lahore`,
        postalCode: 54782
    },
    // array inside an object
    marks: [40, 78, 67, 99],
    // function inside an object
    makeFullName: (fname, lname) => {
        return `${fname} ${lname}`
    },
    // make a normal function inside this object that genFullName usinf this.firstName
}
console.log(abdullah)
console.log(abdullah.address)
console.log(abdullah.marks)
console.log(abdullah.makeFullName(`bilal`, `nadeem`))


const users = [
    {
        id: 1,
        name: `abdullah`,
        email: `abdullah@gmail.com`
        // inside this object, more arrays, objects and functions can be accessed
    },

    {
        id: 2,
        name: `bilal`,
        email: `bilal@gmail.com`
    },

    {
        id: 3,
        name: `faizan`,
        email: `faizan@gmail.com`
    },

]
console.log(users)
console.log(users[0])
console.log(users[0].id)
console.log(users[0].name)
console.log(users[0].email)

console.log(`http request via axios`)

const kuchBhi = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`) // Promise
console.log(kuchBhi.data)

const theme = document.getElementById("theme");
theme.style.backgroundColor = "red";
theme.style.height = `100vh`;


const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", handleSwitchTheme );

const somethingFromJs = document.getElementById("somethingFromJs")
console.log(somethingFromJs)
somethingFromJs.innerHTML = `
    <div>
        h1 of html changed hto h2 with some content
        <nav>
            <ul>
                <li>nav menu bar lists can alos goes here</li>
                <li>ise sy miltu julti cheez ka nam react js hai,ek hil file mei js or html k code ko likna with client side functionality</li>
            </ul>
        </nav>
    </div>
`