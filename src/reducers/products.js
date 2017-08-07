import * as actions from './../constants/products'

export const initialState = {
    productsById: [],
    search:'',
    basket: [],
    totalPrice: 0,
    descriptions: ['name', 'resolution', 'cpu','cpuCount', 'core', 'weight', 'price'],
    fields: {
        name: 'Название',
        description: 'Описание',
        resolution: 'Разрешение',
        cpu: 'Модель процессора',
        cpuCount: 'Количество ядер',
        core: 'Частота процессора, МГц',
        weight: 'Вес, г',
        price: 'Цена, BYR'
    },
    itemProduct: {}
};
export default function products(state = initialState, action) {
    switch (action.type) {
        case actions.INPUT_SEARCH:
            return {
                ...state,
                productsById: action.searchProducts,
                search: action.searchData
            }

        case actions.ADD_TO_BASKET:
            let newObj = state.productsById.filter(item => !item.name.localeCompare(action.payload));
            let newArr = [...state.basket];
            let newTotalPrice = 0;
            newArr.map(function(item){
                if (item.name == action.payload) {
                    ++item.count
                }
                newTotalPrice += item.price * item.count
            })
            if (state.basket.filter(item => !item.name.localeCompare(action.payload))[0]) {
                return {
                    ...state,
                    basket: newArr,
                    totalPrice: newTotalPrice
                }
            } else {
                newObj[0].count = 1;
                return {
                    ...state,
                    basket: [
                        ...state.basket,
                        newObj[0]
                    ],
                    totalPrice: state.totalPrice + newObj[0].price
                }
            }

        case actions.DELETE_FROM_BASKET:
            let position = 0;
            newArr = [...state.basket];
            newTotalPrice = 0;
            newArr.map(function(item){
                if (item.name == action.payload) {
                    --item.count;
                }
                if (item.count == 0) {
                    newArr.splice(position,1)
                }
                ++position;
                newTotalPrice += item.price * item.count;
                })
            return {
                    ...state,
                    basket: newArr,
                    totalPrice: newTotalPrice
            }

        case actions.GET_LIST_PRODUCTS:
            return {
                ...state,
                productsById: action.payload
            }

        case actions.GET_ITEM_PRODUCTS:
            return {
                ...state,
                itemProduct: action.payload
            }

        default:
            return state;
    }
}
