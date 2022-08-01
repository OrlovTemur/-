const user = {
    name: "Aziz",
    surname: 'Adams',
    age: 15,
    isMarried: true,
    girls: ['nargiza', 'malika', 'karina', 'aziza'],
    passport: {
        serries: 'AC',
        number: 213123213
    },
    fullName: () => {
        return user.name + ' ' + user.surname
    }
}

// достать все значения в один массив и все ключи тоже в один но отдельный массив
let mass = [Object.keys(user)]
let mass1 = [Object.values(user)]


let wallet = {
    cash: 19000,
        card: {
        password: 7777,
            cash: 13532
    }
}

// отфильтровать данные по их типам данных в соответствующие переменные
let types = {
    number: [],
    string: [],
    object: [],
    boolean: []
}


// Седенить два объекта в один новый
let newObj = Object.assign(user, wallet)

// соединить два массива в один
user.girls.concat(types.number)


console.log(user.girls);
console.log(newObj);
console.log(mass, mass1);