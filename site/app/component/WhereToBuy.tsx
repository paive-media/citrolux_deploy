import {FC} from "react";
import Image from "next/image";

const pharmacyList: Array<{ url: string, imgSrc: string }> = [
    {
        url: 'https://aptekaeconom.com/catalog/lekarstva-i-bady/obshcheukreplyayushchie-i-toniziruyushchie-preparaty/114995/',
        imgSrc: '/images/logo/apteka_dlya_bereglivih.webp'
    },
    {url: 'https://stolichki.ru/drugs/citrolyuks-r-r-vnutr-50ml', imgSrc: '/images/logo/stolichki.webp'},
    {url: 'https://zdorov.ru/catalog/344/852/853/citrolyuks-107263', imgSrc: '/images/logo/zdorov.ru.webp'},
    {
        url: 'https://lekopttorg.ru/catalog/lekarstva_i_bady/obshheukreplajushhije_i_tonizirujushhije_preparaty9/citroluks_fl-kap_50ml.html',
        imgSrc: '/images/logo/lekopttorg.webp'
    },
    {url: 'https://maksavit.ru/catalog/98479/', imgSrc: '/images/logo/maksavit.webp'},
    {
        url: 'https://aptekanevis.ru/catalog/product/tsitrolyuks_r_r_50ml_obshcheukreplyayushchee_bad_/#ostatki',
        imgSrc: '/images/logo/nevis.webp'
    },
    {url: 'https://neopharm.ru/drugs/14672', imgSrc: '/images/logo/neopharm.webp'},
    {
        url: 'https://planetazdorovo.ru/catalog/lekarstva-i-bad/prostuda-i-gripp/protivovirusnye-immunokorrektory/citrolyuks-rastvor-dlya-priema-v-2927311/',
        imgSrc: '/images/logo/platena-zdorovya.webp'
    },
    {url: 'https://www.rigla.ru/product/100686', imgSrc: '/images/logo/ico-rigla_1.webp'},
    {url: 'https://www.eapteka.ru/goods/id224158/', imgSrc: '/images/logo/ico-sber-eapteka.webp'},
    {
        url: 'https://social-apteka.ru/catalog/bad-vitaminno-mineralnye-kompleksy/citrolyuks-r-r-50ml-bad-48_19908/',
        imgSrc: '/images/logo/ico-social-apteka.webp'
    },
    {url: 'https://farmakopeika.ru/katalog/2458/1280370/', imgSrc: '/images/logo/farmakopeika.webp'},
    {url: 'https://farmlend.ru/product/218133', imgSrc: '/images/logo/farmlend.webp'},
]

const marketPlaceList: Array<{ url: string, imgSrc: string }> = [
    {
        url: 'https://apteka.ru/product/5e3274ed6df8020001929cbb/?q=%D1%86%D0%B8%D1%82%D1%80%D0%BE%D0%BB%D1%8E%D0%BA%D1%81',
        imgSrc: '/images/logo/apteka.ru.webp'
    },
    {url: 'https://zdravcity.ru/p_citroljuks-r-r-vnutr-50ml-0001477.html', imgSrc: '/images/logo/zdravcity.webp'},
]

const ePharmacyList: Array<{ url: string, imgSrc: string }> = [
    {
        url: 'https://pokupki.market.yandex.ru/search?cvredirect=2&text=%D1%86%D0%B8%D1%82%D1%80%D0%BE%D0%BB%D1%8E%D0%BA%D1%81',
        imgSrc: '/images/logo/yandex.market.webp'
    },
]

const WhereToBuy: FC = async () => {
    return (
        <section id={"where-to-buy"} className={"px-8 mt-20"}>
            <h3
                className={"my-8 font-open-sans-regular text-main text-4xl md:text-5xl text-center uppercase"}>
                Где купить?
            </h3>
            <h4
                className={"mb-12 font-open-sans-regular text-gray-600 text-3xl text-center"}>
                Аптечные сети
            </h4>
            <div className={"px-4 grid grid-cols-2 md:grid-cols-5 gap-12"}>
                {pharmacyList.map((element, index) => (
                    <a
                        href={element.url}
                        className={
                            "aspect-square flex items-center hover:scale-110 ease-in duration-200"
                        }
                        key={index}
                        target={"_blank"}
                    >
                        <Image
                            width={0}
                            height={0}
                            sizes={"100vw"}
                            alt={element.imgSrc}
                            src={element.imgSrc}
                            className={"w-full"}
                        />
                    </a>
                ))}
            </div>
            <h4
                className={
                    "mb-2 font-open-sans-regular text-gray-600 text-3xl text-center"
                }
            >
                Маркетплейсы
            </h4>
            <div className={"px-4 grid grid-cols-2 md:grid-cols-5 gap-12"}>
                {marketPlaceList.map((element, index) => (
                    <a
                        href={element.url}
                        className={
                            "aspect-square flex items-center hover:scale-110 ease-in duration-200"
                        }
                        key={index}
                        target={"_blank"}
                    >
                        <Image
                            width={0}
                            height={0}
                            sizes={"100vw"}
                            alt={element.imgSrc}
                            src={element.imgSrc}
                            className={"w-full"}
                        />
                    </a>
                ))}
            </div>
            <h4
                className={
                    "mb-2 font-open-sans-regular text-gray-600 text-3xl text-center"
                }
            >
                Интернет-аптеки
            </h4>
            <div className={"px-4 grid grid-cols-2 md:grid-cols-5 gap-12"}>
                {ePharmacyList.map((element, index) => (
                    <a
                        href={element.url}
                        className={
                            "aspect-square flex items-center hover:scale-110 ease-in duration-200"
                        }
                        key={index}
                        target={"_blank"}
                    >
                        <Image
                            width={0}
                            height={0}
                            sizes={"100vw"}
                            alt={element.imgSrc}
                            src={element.imgSrc}
                            className={"w-full"}
                        />
                    </a>
                ))}
            </div>
        </section>
    );
};

export {WhereToBuy};
