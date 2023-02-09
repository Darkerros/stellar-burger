
export const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res.json())
}

export const getStatus = (status) => {
    switch (status) {

        case "created":
            return 'Создан'

        case "pending":
            return 'Готовится'

        case "done":
            return 'Выполнен'

        default:
            return "done"
    }
}

export const getDate = (date) => {
    let day;
    const orderDate = new Date(Date.parse(date.replace("z","")))
    const currentDay = new Date().getDate()

    switch (orderDate.getDate()){
        case currentDay:
            day = "Сегодня"
            break

        case currentDay -1:
            day = "Вчера"
            break

        case currentDay -2:
            day = "Позавчера"
            break

        default:
            day = orderDate.toLocaleDateString("ru-RU",{weekday: "long",day: "numeric"}).toString()
            break
    }

    return `${day}, ${orderDate.toLocaleTimeString("ru-RU",{hour:"numeric",minute:"numeric"})} i-GMT+3`
}