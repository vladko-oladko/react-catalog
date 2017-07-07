import {PRODUCT_SORT, DEFAULT_STATE} from './../constants'

export const initialState = {
    productsById: [
        {
            id: 1,
            name: 'iPhone 6s',
            image: 'src/data/images/iphone-6.png',
            description: 'Модель iPhone 2015 года. Внешние изменения незначительные, корпус получил новый цвет — Rose Gold. Внутренние изменения более масштабные. Обновленный процессор А9, технология экрана 3D Touch, которая реагирует на силу нажатия на экран смартфона. Основная камера полностью новая, ее разрешение теперь 12Мп и она может снимать видео в разрешении 4K, фронтальная на 5Мп.',
            price: 1000,
            category: 'phone'
        },
        {
            id: 2,
            name: 'IPhone SE',
            image: 'src/data/images/iphone-5se.png',
            description: 'iPhone SE — это не просто невероятно популярный дизайн. Это следующий шаг в его развитии. Корпус лёгкого, компактного и удобного телефона сделан из гладкого матированного алюминия. На великолепном 4‑дюймовом дисплее Retina всё выглядит невероятно чётко и ярко. А завершают картину матовые скошенные края и логотип из нержавеющей стали.',
            price: 870,
            category: 'phone'
        },
        {
            id: 3,
            name: 'Xiaomi Mi Book Air 13,3',
            image: 'src/data/images/mibook-air-13.3-inch.png',
            description: '13.3" 1920 x 1080 глянцевый, Intel Core i5 6200U 2300 МГц, 8 ГБ, 256 Гб (SSD), NVIDIA GeForce 940MX, Linux, цвет крышки серебристый, цвет корпуса серебристый',
            price: 1770,
            category: 'laptop'
        },
        {
            id: 4,
            name: 'iPhone 7',
            image: 'src/data/images/iphone-7.png',
            description: 'Модель iPhone 2016 года. Внешние изменения незначительные, корпус получил новый цвет — Jet Black и поменялся привычный цвет Space Gray на Black. Впервые в своей истории корпус защищен от пыли и влаги по стандарту IP67, а вместо одного громкоговорителя теперь два стерео динамика.',
            price: 1400,
            category: 'phone'
        },
        {
            id: 5,
            name: 'Apple MacBook Air 13"',
            image: 'src/data/images/MacBook_Air_13-Inch-SCREEN.png',
            description: '13.3" 1440 x 900 глянцевый, Intel Core i5 1600 МГц, 8 ГБ, 128 Гб (SSD), Intel HD Graphics 6000, OS X, цвет крышки серебристый, цвет корпуса серебристый',
            price: 1950,
            category: 'laptop'
        }
    ],
};
export default function products(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_SORT:
            state = initialState
            action.payload = state.productsById.filter(item => !item.category.localeCompare(action.payload))
            return {
                ...state,
                productsById: action.payload
            }
        case DEFAULT_STATE:
            return initialState;
        default:
            return state;
    }
}
