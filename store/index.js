import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        basket: [],
        singleItem: [],
        products: {
            '01': {
                id: '01',
                category: 'Наушники',
                title: "Apple BYZ S852I",
                image: "02.png",
                favourite: true,
                price: "2927",
                last_price: "3527",
                rating: "4.7",
                count: 1,
                characteristics: [
                    {
                        title: 'Активное шумоподавление',
                        value: 'Нет'
                    },
                    {
                        title: 'Вес',
                        value: '10 гр'
                    },
                    {
                        title: 'Влагозащита',
                        value: 'Нет'
                    },
                    {
                        title: 'Длина кабеля',
                        value: '1.2 м'
                    },
                    {
                        title: 'Комплектация',
                        value: 'Наушники'
                    },
                    {
                        title: 'Материал корпуса',
                        value: 'Пластик, резина'
                    },
                    {
                        title: 'Микрофон',
                        value: 'Да'
                    },
                    {
                        title: 'Назначение',
                        value: 'Проводные наушники'
                    },
                    {
                        title: 'Ответить/закончить разговор',
                        value: 'Да'
                    },
                    {
                        title: 'Разъем наушников',
                        value: 'Lightning'
                    },
                    {
                        title: 'Регулятор громкости',
                        value: 'Да'
                    },
                    {
                        title: 'Тип крепления',
                        value: 'Без крепления'
                    },
                    {
                        title: 'Тип наушников',
                        value: 'Вкладыши ("таблетки")'
                    },
                    {
                        title: 'Тип подключения',
                        value: 'Проводное'
                    },
                    {
                        title: 'Частотный диапазон',
                        value: '20 Гц - 20000 Гц'
                    },
                    {
                        title: 'Чувствительность',
                        value: '109 дБ'
                    },
                ]
            },
            '02': {
                id: '02',
                category: 'Наушники',
                title: "Apple EarPods",
                image: "03.png",
                favourite: true,
                price: "2327",
                rating: "4.5",
                characteristics: [
                    {
                        title: 'Активное шумоподавление',
                        value: 'Нет'
                    },
                    {
                        title: 'Вес',
                        value: '10 гр'
                    },
                    {
                        title: 'Влагозащита',
                        value: 'Нет'
                    },
                    {
                        title: 'Длина кабеля',
                        value: '1.2 м'
                    },
                    {
                        title: 'Комплектация',
                        value: 'Наушники'
                    },
                    {
                        title: 'Материал корпуса',
                        value: 'Пластик, резина'
                    },
                    {
                        title: 'Микрофон',
                        value: 'Да'
                    },
                    {
                        title: 'Назначение',
                        value: 'Проводные наушники'
                    },
                    {
                        title: 'Ответить/закончить разговор',
                        value: 'Да'
                    },
                    {
                        title: 'Разъем наушников',
                        value: 'Lightning'
                    },
                    {
                        title: 'Регулятор громкости',
                        value: 'Да'
                    },
                    {
                        title: 'Тип крепления',
                        value: 'Без крепления'
                    },
                    {
                        title: 'Тип наушников',
                        value: 'Вкладыши ("таблетки")'
                    },
                    {
                        title: 'Тип подключения',
                        value: 'Проводное'
                    },
                    {
                        title: 'Частотный диапазон',
                        value: '20 Гц - 20000 Гц'
                    },
                    {
                        title: 'Чувствительность',
                        value: '109 дБ'
                    },
                ]
            },
            '03': {
                id: '03',
                category: 'Наушники',
                title: "Apple EarPods",
                image: "04.png",
                favourite: true,
                price: "2327",
                rating: "4.5",
                characteristics: [
                    {
                        title: 'Активное шумоподавление',
                        value: 'Нет'
                    },
                    {
                        title: 'Вес',
                        value: '10 гр'
                    },
                    {
                        title: 'Влагозащита',
                        value: 'Нет'
                    },
                    {
                        title: 'Длина кабеля',
                        value: '1.2 м'
                    },
                    {
                        title: 'Комплектация',
                        value: 'Наушники'
                    },
                    {
                        title: 'Материал корпуса',
                        value: 'Пластик, резина'
                    },
                    {
                        title: 'Микрофон',
                        value: 'Да'
                    },
                    {
                        title: 'Назначение',
                        value: 'Проводные наушники'
                    },
                    {
                        title: 'Ответить/закончить разговор',
                        value: 'Да'
                    },
                    {
                        title: 'Разъем наушников',
                        value: 'Lightning'
                    },
                    {
                        title: 'Регулятор громкости',
                        value: 'Да'
                    },
                    {
                        title: 'Тип крепления',
                        value: 'Без крепления'
                    },
                    {
                        title: 'Тип наушников',
                        value: 'Вкладыши ("таблетки")'
                    },
                    {
                        title: 'Тип подключения',
                        value: 'Проводное'
                    },
                    {
                        title: 'Частотный диапазон',
                        value: '20 Гц - 20000 Гц'
                    },
                    {
                        title: 'Чувствительность',
                        value: '109 дБ'
                    },
                ]
            },
            '04': {
                id: '04',
                category: 'Наушники',
                title: "Apple BYZ S852I",
                image: "02.png",
                favourite: true,
                price: "2927",
                last_price: "3527",
                rating: "4.7",
                percent: "20",
                characteristics: [
                    {
                        title: 'Активное шумоподавление',
                        value: 'Нет'
                    },
                    {
                        title: 'Вес',
                        value: '10 гр'
                    },
                    {
                        title: 'Влагозащита',
                        value: 'Нет'
                    },
                    {
                        title: 'Длина кабеля',
                        value: '1.2 м'
                    },
                    {
                        title: 'Комплектация',
                        value: 'Наушники'
                    },
                    {
                        title: 'Материал корпуса',
                        value: 'Пластик, резина'
                    },
                    {
                        title: 'Микрофон',
                        value: 'Да'
                    },
                    {
                        title: 'Назначение',
                        value: 'Проводные наушники'
                    },
                    {
                        title: 'Ответить/закончить разговор',
                        value: 'Да'
                    },
                    {
                        title: 'Разъем наушников',
                        value: 'Lightning'
                    },
                    {
                        title: 'Регулятор громкости',
                        value: 'Да'
                    },
                    {
                        title: 'Тип крепления',
                        value: 'Без крепления'
                    },
                    {
                        title: 'Тип наушников',
                        value: 'Вкладыши ("таблетки")'
                    },
                    {
                        title: 'Тип подключения',
                        value: 'Проводное'
                    },
                    {
                        title: 'Частотный диапазон',
                        value: '20 Гц - 20000 Гц'
                    },
                    {
                        title: 'Чувствительность',
                        value: '109 дБ'
                    },
                ]
            },
            '05': {
                id: '05',
                category: 'Наушники',
                title: "Apple BYZ S852I",
                image: "03.png",
                favourite: true,
                price: "2327",
                last_price: "3527",
                rating: "4.7",
                percent: "20",
                characteristics: [
                    {
                        title: 'Активное шумоподавление',
                        value: 'Нет'
                    },
                    {
                        title: 'Вес',
                        value: '10 гр'
                    },
                    {
                        title: 'Влагозащита',
                        value: 'Нет'
                    },
                    {
                        title: 'Длина кабеля',
                        value: '1.2 м'
                    },
                    {
                        title: 'Комплектация',
                        value: 'Наушники'
                    },
                    {
                        title: 'Материал корпуса',
                        value: 'Пластик, резина'
                    },
                    {
                        title: 'Микрофон',
                        value: 'Да'
                    },
                    {
                        title: 'Назначение',
                        value: 'Проводные наушники'
                    },
                    {
                        title: 'Ответить/закончить разговор',
                        value: 'Да'
                    },
                    {
                        title: 'Разъем наушников',
                        value: 'Lightning'
                    },
                    {
                        title: 'Регулятор громкости',
                        value: 'Да'
                    },
                    {
                        title: 'Тип крепления',
                        value: 'Без крепления'
                    },
                    {
                        title: 'Тип наушников',
                        value: 'Вкладыши ("таблетки")'
                    },
                    {
                        title: 'Тип подключения',
                        value: 'Проводное'
                    },
                    {
                        title: 'Частотный диапазон',
                        value: '20 Гц - 20000 Гц'
                    },
                    {
                        title: 'Чувствительность',
                        value: '109 дБ'
                    },
                ]
            },
            '06': {
                id: '06',
                category: 'Наушники',
                title: "Apple BYZ S852I",
                image: "04.png",
                favourite: true,
                price: "2327",
                last_price: "3527",
                rating: "4.7",
                percent: "20",
                characteristics: [
                    {
                        title: 'Активное шумоподавление',
                        value: 'Нет'
                    },
                    {
                        title: 'Вес',
                        value: '10 гр'
                    },
                    {
                        title: 'Влагозащита',
                        value: 'Нет'
                    },
                    {
                        title: 'Длина кабеля',
                        value: '1.2 м'
                    },
                    {
                        title: 'Комплектация',
                        value: 'Наушники'
                    },
                    {
                        title: 'Материал корпуса',
                        value: 'Пластик, резина'
                    },
                    {
                        title: 'Микрофон',
                        value: 'Да'
                    },
                    {
                        title: 'Назначение',
                        value: 'Проводные наушники'
                    },
                    {
                        title: 'Ответить/закончить разговор',
                        value: 'Да'
                    },
                    {
                        title: 'Разъем наушников',
                        value: 'Lightning'
                    },
                    {
                        title: 'Регулятор громкости',
                        value: 'Да'
                    },
                    {
                        title: 'Тип крепления',
                        value: 'Без крепления'
                    },
                    {
                        title: 'Тип наушников',
                        value: 'Вкладыши ("таблетки")'
                    },
                    {
                        title: 'Тип подключения',
                        value: 'Проводное'
                    },
                    {
                        title: 'Частотный диапазон',
                        value: '20 Гц - 20000 Гц'
                    },
                    {
                        title: 'Чувствительность',
                        value: '109 дБ'
                    },
                ]
            },
            '07': {
                id: '07',
                category: 'Беспроводные наушники',
                title: "Apple AirPods",
                favourite: true,
                image: '05.png',
                price: "9527",
                rating: "4.7",
                characteristics: [
                    {
                        title: 'Активное шумоподавление',
                        value: 'Нет'
                    },
                    {
                        title: 'Вес',
                        value: '10 гр'
                    },
                    {
                        title: 'Влагозащита',
                        value: 'Нет'
                    },
                    {
                        title: 'Длина кабеля',
                        value: '1.2 м'
                    },
                    {
                        title: 'Комплектация',
                        value: 'Наушники'
                    },
                    {
                        title: 'Материал корпуса',
                        value: 'Пластик, резина'
                    },
                    {
                        title: 'Микрофон',
                        value: 'Да'
                    },
                    {
                        title: 'Назначение',
                        value: 'Проводные наушники'
                    },
                    {
                        title: 'Ответить/закончить разговор',
                        value: 'Да'
                    },
                    {
                        title: 'Разъем наушников',
                        value: 'Lightning'
                    },
                    {
                        title: 'Регулятор громкости',
                        value: 'Да'
                    },
                    {
                        title: 'Тип крепления',
                        value: 'Без крепления'
                    },
                    {
                        title: 'Тип наушников',
                        value: 'Вкладыши ("таблетки")'
                    },
                    {
                        title: 'Тип подключения',
                        value: 'Проводное'
                    },
                    {
                        title: 'Частотный диапазон',
                        value: '20 Гц - 20000 Гц'
                    },
                    {
                        title: 'Чувствительность',
                        value: '109 дБ'
                    },
                ]
            },
            '08': {
                id: '08',
                category: 'Беспроводные наушники',
                title: "Apple AirPods",
                favourite: true,
                image: '06.png',
                apple: true,
                price: "9527",
                rating: "4.7",
                characteristics: [
                    {
                        title: 'Активное шумоподавление',
                        value: 'Нет'
                    },
                    {
                        title: 'Вес',
                        value: '10 гр'
                    },
                    {
                        title: 'Влагозащита',
                        value: 'Нет'
                    },
                    {
                        title: 'Длина кабеля',
                        value: '1.2 м'
                    },
                    {
                        title: 'Комплектация',
                        value: 'Наушники'
                    },
                    {
                        title: 'Материал корпуса',
                        value: 'Пластик, резина'
                    },
                    {
                        title: 'Микрофон',
                        value: 'Да'
                    },
                    {
                        title: 'Назначение',
                        value: 'Проводные наушники'
                    },
                    {
                        title: 'Ответить/закончить разговор',
                        value: 'Да'
                    },
                    {
                        title: 'Разъем наушников',
                        value: 'Lightning'
                    },
                    {
                        title: 'Регулятор громкости',
                        value: 'Да'
                    },
                    {
                        title: 'Тип крепления',
                        value: 'Без крепления'
                    },
                    {
                        title: 'Тип наушников',
                        value: 'Вкладыши ("таблетки")'
                    },
                    {
                        title: 'Тип подключения',
                        value: 'Проводное'
                    },
                    {
                        title: 'Частотный диапазон',
                        value: '20 Гц - 20000 Гц'
                    },
                    {
                        title: 'Чувствительность',
                        value: '109 дБ'
                    },
                ]
            },
            '09': {
                id: '09',
                category: 'Беспроводные наушники',
                title: "Apple AirPods",
                favourite: true,
                image: '07.png',
                price: "9527",
                rating: "4.7",
                characteristics: [
                    {
                        title: 'Активное шумоподавление',
                        value: 'Нет'
                    },
                    {
                        title: 'Вес',
                        value: '10 гр'
                    },
                    {
                        title: 'Влагозащита',
                        value: 'Нет'
                    },
                    {
                        title: 'Длина кабеля',
                        value: '1.2 м'
                    },
                    {
                        title: 'Комплектация',
                        value: 'Наушники'
                    },
                    {
                        title: 'Материал корпуса',
                        value: 'Пластик, резина'
                    },
                    {
                        title: 'Микрофон',
                        value: 'Да'
                    },
                    {
                        title: 'Назначение',
                        value: 'Проводные наушники'
                    },
                    {
                        title: 'Ответить/закончить разговор',
                        value: 'Да'
                    },
                    {
                        title: 'Разъем наушников',
                        value: 'Lightning'
                    },
                    {
                        title: 'Регулятор громкости',
                        value: 'Да'
                    },
                    {
                        title: 'Тип крепления',
                        value: 'Без крепления'
                    },
                    {
                        title: 'Тип наушников',
                        value: 'Вкладыши ("таблетки")'
                    },
                    {
                        title: 'Тип подключения',
                        value: 'Проводное'
                    },
                    {
                        title: 'Частотный диапазон',
                        value: '20 Гц - 20000 Гц'
                    },
                    {
                        title: 'Чувствительность',
                        value: '109 дБ'
                    },
                ]
            },
            '10': {
                id: '10',
                category: 'Телефоны',
                title: "iPhone 12",
                favourite: true,
                image: '09.png',
                price: "528000",
                rating: "4.7",
                characteristics: [
                    {
                        title: 'Размеры',
                        value: '71.5 x 146.7 x 7.4 мм'
                    },
                    {
                        title: 'Вес',
                        value: '164 гр'
                    },
                    {
                        title: 'SoC',
                        value: 'Apple A14 Bionic'
                    },
                    {
                        title: 'Процессор',
                        value: '2x Firestorm, 4x Icestorm, количество ядер: 6'
                    },
                    {
                        title: 'Количество ядер',
                        value: '4'
                    },
                    {
                        title: 'Оперативная память',
                        value: '4 ГБ, 2750 МГц'
                    },
                    {
                        title: 'Встроенная память',
                        value: '64 ГБ, 128 ГБ, 256 ГБ'
                    },
                    {
                        title: 'Экран',
                        value: '6.1 in, OLED, 1170 x 2532 пикселей, 24 бит'
                    },
                    {
                        title: 'Аккумулятор',
                        value: 'Li-lon (Литий-ионный)'
                    },
                    {
                        title: 'Операционная система',
                        value: 'iOS 14.1'
                    },
                    {
                        title: 'Камера',
                        value: '4032 x 3024 пикселей, 3840 x 2160 пикселей, 60 кадров/сек'
                    },
                    {
                        title: 'SIM-карта',
                        value: 'Nano-SIM'
                    },
                    {
                        title: 'Wi-Fi',
                        value: 'a, b, g, n, n 5GHz, ac, Dual band, Wi-Fi Hotspot, ax'
                    },
                    {
                        title: 'USB',
                        value: '2.0'
                    },
                    {
                        title: 'Bluetooth',
                        value: '5.0'
                    },
                    {
                        title: 'Навигация',
                        value: 'GPS, A-GPS, GLONASS, Galileo, QZSS'
                    },
                ]
            },
            '11': {
                id: '11',
                category: 'Телефоны',
                title: "iPhone 12 Pro",
                favourite: true,
                image: '09.png',
                price: "650000",
                rating: "4.7",
                characteristics: [
                    {
                        title: 'Размеры',
                        value: '71.5 x 146.7 x 7.4 мм'
                    },
                    {
                        title: 'Вес',
                        value: '189 гр'
                    },
                    {
                        title: 'SoC',
                        value: 'Apple A14 Bionic'
                    },
                    {
                        title: 'Процессор',
                        value: '2x Firestorm, 4x Icestorm, количество ядер: 6'
                    },
                    {
                        title: 'Количество ядер',
                        value: '4'
                    },
                    {
                        title: 'Оперативная память',
                        value: '6 ГБ, 2750 МГц'
                    },
                    {
                        title: 'Встроенная память',
                        value: '128 ГБ, 256 ГБ, 512 ГБ'
                    },
                    {
                        title: 'Экран',
                        value: '6.1 in, OLED, 1170 x 2532 пикселей, 24 бит'
                    },
                    {
                        title: 'Аккумулятор',
                        value: '2815 мАч, Li-lon (Литий-ионный)'
                    },
                    {
                        title: 'Операционная система',
                        value: 'iOS 14.1'
                    },
                    {
                        title: 'Камера',
                        value: '4032 x 3024 пикселей, 3840 x 2160 пикселей, 60 кадров/сек'
                    },
                    {
                        title: 'SIM-карта',
                        value: 'Nano-SIM'
                    },
                    {
                        title: 'Wi-Fi',
                        value: 'a, b, g, n, n 5GHz, ac, Dual band, Wi-Fi Hotspot, ax'
                    },
                    {
                        title: 'USB',
                        value: '2.0'
                    },
                    {
                        title: 'Bluetooth',
                        value: '5.0'
                    },
                    {
                        title: 'Навигация',
                        value: 'GPS, A-GPS, GLONASS, Galileo, QZSS'
                    },
                ]
            },
            '12': {
                id: '12',
                category: 'Телефоны',
                title: "iPhone 13",
                favourite: true,
                image: '10.png',
                price: "650000",
                rating: "4.7",
                characteristics: [
                    {
                        title: 'Размеры',
                        value: '71.5 x 146.7 x 7.65 мм'
                    },
                    {
                        title: 'Вес',
                        value: '174 гр'
                    },
                    {
                        title: 'SoC',
                        value: 'Apple A15 Bionic APL1W07'
                    },
                    {
                        title: 'Количество ядер',
                        value: '6'
                    },
                    {
                        title: 'Оперативная память',
                        value: '4 ГБ, 2133 МГц'
                    },
                    {
                        title: 'Встроенная память',
                        value: '128 ГБ, 256 ГБ, 512 ГБ'
                    },
                    {
                        title: 'Экран',
                        value: '6.1 in, OLED, 1170 x 2532 пикселей, 24 бит'
                    },
                    {
                        title: 'Аккумулятор',
                        value: '3227 мАч, Li-lon (Литий-ионный)'
                    },
                    {
                        title: 'Операционная система',
                        value: 'iOS 15'
                    },
                    {
                        title: 'Камера',
                        value: '4032 x 3024 пикселей, 3840 x 2160 пикселей, 60 кадров/сек'
                    },
                    {
                        title: 'SIM-карта',
                        value: 'Nano-SIM'
                    },
                    {
                        title: 'Wi-Fi',
                        value: 'a, b, g, n, n 5GHz, ac, Dual band, Wi-Fi Hotspot, ax'
                    },
                    {
                        title: 'Bluetooth',
                        value: '5.0'
                    },
                    {
                        title: 'Навигация',
                        value: 'GPS, A-GPS, GLONASS, Galileo, QZSS'
                    },
                ]
            },
            '13': {
                id: '13',
                category: 'Телефоны',
                title: "iPhone 13 Pro",
                favourite: true,
                image: '10.png',
                price: "650000",
                rating: "4.7",
                characteristics: [
                    {
                        title: 'Размеры',
                        value: '71.5 x 146.7 x 7.65 мм'
                    },
                    {
                        title: 'Вес',
                        value: '204  гр'
                    },
                    {
                        title: 'SoC',
                        value: 'Apple A15 Bionic APL1W07'
                    },
                    {
                        title: 'Количество ядер',
                        value: '6'
                    },
                    {
                        title: 'Оперативная память',
                        value: '6 ГБ, 2133 МГц'
                    },
                    {
                        title: 'Встроенная память',
                        value: '128 ГБ, 256 ГБ, 512 ГБ, 1024 ГБ'
                    },
                    {
                        title: 'Экран',
                        value: '6.1 in, OLED, 1170 x 2532 пикселей, 24 бит'
                    },
                    {
                        title: 'Аккумулятор',
                        value: '3095 мАч, Li-lon (Литий-ионный)'
                    },
                    {
                        title: 'Операционная система',
                        value: 'iOS 15'
                    },
                    {
                        title: 'Камера',
                        value: '4032 x 3024 пикселей, 3840 x 2160 пикселей, 60 кадров/сек'
                    },
                    {
                        title: 'SIM-карта',
                        value: 'Nano-SIM'
                    },
                    {
                        title: 'Wi-Fi',
                        value: 'a, b, g, n, n 5GHz, ac, Dual band, Wi-Fi Hotspot, ax'
                    },
                    {
                        title: 'Bluetooth',
                        value: '5.0'
                    },
                    {
                        title: 'Навигация',
                        value: 'GPS, A-GPS, GLONASS, Galileo, QZSS'
                    },
                ]
            }
        }
    },
    mutations: {
        addItemToBasket(state, item) {
            let obj = {...item}
            obj['count'] = 1
            state.basket.push(obj)
            localStorage.setItem('basket', JSON.stringify(state.basket))
        },
        removeFromBasket(state, id) {
            let index = state.basket.findIndex(item => item.id == id)
            state.basket.splice(index, 1)
            localStorage.setItem('basket', JSON.stringify(state.basket))
        },
        updateBasket(state, basket) {
            state.basket = basket
        },
        addSingleItem(state, item) {
            state.singleItem.push(item)
        },
        clearSingleItem(state) {
            state.singleItem = []
        }
    },
    actions: {
        async fetchBasket({commit}) {
            let basket = JSON.parse(localStorage.getItem('basket'))
            
            if (basket) {
                commit('updateBasket', basket)
            }

        },
        addItemToBasket(state, item) {
            state.commit('addItemToBasket', item)
            alert('Элемент успешно добавлен в корзину!')

        },
        removeFromBasket(state, item) {
            state.commit('removeFromBasket', item)
        }
    },

    getters: {
        productsToView(state) {
            let res = {
                'headphones': {},
                'wireless_headphones': {}
            }
            for (let key in state.products) {
                if (state.products[key].category == 'Наушники') {
                    res.headphones[key] = state.products[key]
                } else if (state.products[key].category == 'Беспроводные наушники') {
                    res.wireless_headphones[key] = state.products[key]
                }
            }
            return res
        },
        productForOrdering: (state) => {
            return state.singleItem
        },
        getProductById: (state) => (id) => {
            return state.products[id]
        },
        getProductFromBasket: (state) => {
            return state.basket
        },
        getCountFromBasket: (state) => {
            return state.basket.length
        }
    }
})

export default store